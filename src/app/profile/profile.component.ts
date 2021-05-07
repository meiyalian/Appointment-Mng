import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userID:string;
  name:string;
  phoneNumber:string;
  nameInvoice:string;
  bEmail:string;
  section=1;

  changeSection(sectionId) {
    this.section = sectionId;
  }

  changeProfile(){
    //TODO
  }

  changeBill(){
    //TODO
  }

}
