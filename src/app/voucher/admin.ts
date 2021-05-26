import {DatabaseService} from "../database.service";

export class Admin {

  public name:string;
  public defaultDelivery: any[]=[
    {option:"delivery", selected:false},
    {option:"pickup", selected:false}
  ];
  public pickup=false;
  public delivery=false;
  private dbService:DatabaseService
  public allServices: any[];
  public bookingRequests: any[];
  ac:string;


  constructor(dbService:DatabaseService, ac:string) {
    this.dbService=dbService;
    this.ac=ac;
  }

  public addService(){
    let selectedOption: string[] = [];
    for (let i in this.defaultDelivery){
      if (this.defaultDelivery[i]['selected']==true){
        selectedOption.push(this.defaultDelivery[i]['option']);
      }
    }
    let request={name:this.name, deliveryOptions:selectedOption};
    this.dbService.addService(request).subscribe(result => {
      if (result['ok']==true){
        alert("Add Success");
      }else {
        alert("Error");
      }
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
      let localtime = new Date(this.bookingRequests[i]['date']);
      this.bookingRequests[i]['date']=localtime.toLocaleString();
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
      if (result['ok']==true){
        alert("Accept Success");
      }else {
        alert("Error");
      }
      this.getRequests();
    })
  }
}
