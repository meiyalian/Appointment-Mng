import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-c-register',
  templateUrl: './c-register.component.html',
  styleUrls: ['./c-register.component.css']
})
export class CRegisterComponent implements OnInit {
  name = '';
  phone = '';
  email = '';
  password = '';
  role = "basic";
  aT="";


  constructor(private dbService: DatabaseService, private router:Router) { }

  ngOnInit(): void {
  }

  cRegister(){
    let user={email: this.email, role: this.role, password: this.password, name: this.name, phoneNumber: this.phone};
    this.dbService.createUser(user).subscribe(result => {
      if (result["ok"]==true){
        alert("success");
        this.router.navigate(['/login']);
      }
      else {
        alert("try again");
      }
    });
  }

}
