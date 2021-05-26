import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Admin} from "./admin";

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})

export class VoucherComponent implements OnInit {

  serviceTypes: any[];
  userID:string;
  name:string;
  deliverOptions: any[];
  selectedService: {};
  selectedDeliver: string;
  date:string;
  time:string;
  section = 1;
  optionMessage:string;
  ac:string;
  role:string;
  admin:Admin

  requestList: any[];

  constructor(private dbService: DatabaseService, private router:Router,private arouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.arouter.queryParams.subscribe(queryParams => {
      this.userID=queryParams.id;
      this.ac=queryParams.at;
      this.name=queryParams.name;
      this.role=queryParams.role;
    });
    this.getAllServices();
    this.dbService.ac=this.ac;
    if (this.role=='admin'){
      this.admin = new Admin(this.dbService, this.ac);
    }
  }

  changeSection(sectionId) {
    if (this.role=="basic"){
      if (sectionId==1){
        this.getAllServices();
      }
      if (sectionId==2){
        this.getBooking();
      }
      this.section = sectionId;
    }
    if (this.role=="admin"){
      if (sectionId==2){
        this.admin.getRequests();
        this.admin.getAllServices();
      }
      this.section = sectionId;
    }
  }

  editProfile(){
    this.router.navigate(['/profile'],{queryParams:{
        id: this.userID, role:this.role, name:this.name, at:this.ac
      }});
  }

  book(){
    let request={serviceType:this.selectedService['_id'], date:this.date+" "+this.time, optionalMessage:this.optionMessage, deliveryOption:this.selectedDeliver};
    this.dbService.book(this.userID,request).subscribe(result => {
      if (result['ok']==true){
        alert("Book Success");
      }else {
        alert("Book Error");
      }
    })
  }

  getBooking(){
    this.dbService.getBooking(this.userID).subscribe(result => {
      this.requestList=result['data']['bookingRequest'];
      console.log(this.requestList);
      for (let i in this.requestList){
        this.requestList[i]['serviceType']=this.getServiceName(this.requestList[i]['serviceType']);
      }
    });

  }

  getAllServices(){
    this.dbService.getAllServices(this.ac).subscribe(result => {
      this.serviceTypes=result['data'];
    });
  }

  setDeliveryOptions(){
    this.deliverOptions=this.selectedService['deliveryOptions'];
  }

  getServiceName(serviceID){
    for (let i in this.serviceTypes){
      if (this.serviceTypes[i]['_id']==serviceID){
        return this.serviceTypes[i]['name'];
      }
    }
  }

  cancelBooking(requestID){
    this.dbService.cancelRequest(this.userID,requestID,this.ac).subscribe(result => {
      if (result['ok']==true){
        alert("Cancel Success");
      }else {
        alert("Error");
      }
      this.getBooking();
    })
  }

}
