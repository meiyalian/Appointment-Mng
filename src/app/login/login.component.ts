import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  role = '';
  aT= '';
  userId='';
  name='';

  constructor(private dbService: DatabaseService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let user={email:this.email, password:this.password};
    this.dbService.loginUser(user).subscribe(result =>{
      if (result["ok"]==true){
        this.userId=result['data']['id'];
        this.role=result['data']['role'];
        this.name=result['data']['name'];
        this.aT=result['accessToken'];
        alert("success")
        this.router.navigate(['/voucher'],{queryParams: {
            id: this.userId, role:this.role, name:this.name, at:this.aT
          }});
      }
      else {
        alert("error")
      }
    });

  }

}
