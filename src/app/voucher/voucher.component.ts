import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})

export class VoucherComponent implements OnInit {

  serviceTypes = [
    {value:'flowers'},
    {value:'chocolatebox'},
  ];
  userID:string
  deliverOptions = ['delivery to the MYD offices', 'pick-up from the service'];
  selectedService: string;
  selectedDeliver: string;
  date:string;
  section = 1;
  optionMessage:string;

  requestList: any[] = [ {service:'flowers'}, {service:'chocolatebox'}];

  constructor(private dbService: DatabaseService, private router:Router) { }

  ngOnInit(): void {
  }

  changeSection(sectionId) {
    this.section = sectionId;
  }

  editProfile(){
    this.router.navigate(['/profile']);
  }

  book(){
    let request={id:this.userID,serviceType:this.selectedService, date:this.date, optionalMessage:this.optionMessage};
    this.dbService.book(request);
    //TODO
  }

  getBooking(){
    this.dbService.getBooking(this.userID);
    //TODO
  }


}
