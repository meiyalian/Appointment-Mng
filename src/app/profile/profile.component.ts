import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dbService: DatabaseService, private arouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.arouter.queryParams.subscribe(queryParams => {
      this.userID=queryParams.id;
      this.ac=queryParams.at;
      this.name=queryParams.name;
      this.role=queryParams.role;
    });
  }
  userID:string;
  name:string;
  phoneNumber:string;
  nameInvoice:string;
  bEmail:string;
  ac:string;
  role:string;
  section=1;

  changeSection(sectionId) {
    this.section = sectionId;
  }

  changeProfile(){
    let info={name:this.name, phoneNumber:"123"};
    this.dbService.editProfile(info,this.ac,this.userID).subscribe(result => {
      console.log(result['data']['phoneNumber']);
    });
  }

  changBiller(){
    let info={name:this.nameInvoice,email:this.bEmail};
    this.dbService.editBiller(info,this.ac,this.userID).subscribe(result => {
      console.log(result['data']['email']);
    });
  }

}
