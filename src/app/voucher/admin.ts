import {DatabaseService} from "../database.service";

export class Admin {

  public name:string;
  public defaultDelivery:string[]=['delivery', 'pickup'];
  public selectedDelivery:string;
  private dbService:DatabaseService
  public allServices: any[];
  public bookingRequests: any[];
  ac:string;


  constructor(dbService:DatabaseService, ac:string) {
    this.dbService=dbService;
    this.ac=ac;
  }

  public addService(){
    let request={name:this.name, deliveryOptions:this.selectedDelivery};
    this.dbService.addService(request).subscribe(result => {
      console.log(result);
    });
  }

  public getRequests(){
    this.dbService.getRequests().subscribe(result => {
      this.bookingRequests=result['data']['bookingRequest'];
      this.setServicesName();
    });
  }

  public setServicesName(){
    for (let i in this.bookingRequests){
      this.bookingRequests[i]['serviceType']=this.getServiceName(this.bookingRequests[i]['serviceType']);
    }
  }

  public getAllServices(){
    this.dbService.getAllServices(this.ac).subscribe(result => {
      this.allServices=result['data'];
    });
  }

  getServiceName(serviceID){
    for (let i in this.allServices){
      if (this.allServices[i]['_id']==serviceID){
        return this.allServices[i]['name'];
      }
    }
  }

  acceptRequest(requestID){
    this.dbService.acceptRequest(requestID).subscribe(result => {
      console.log(result)
    })
  }
}
