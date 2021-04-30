import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-c-register',
  templateUrl: './c-register.component.html',
  styleUrls: ['./c-register.component.css']
})
export class CRegisterComponent implements OnInit {
  name = '';
  phone = 0;
  email = '';
  password = '';
  role = "basic";
  aT="";


  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
  }

  cRegister(){
    let user={email: this.email, role: this.role, password: this.password, name: this.name, phoneNumber: this.phone};
    this.dbService.createUser(user).subscribe(result => console.log(result["accessToken"]));
  }

}
