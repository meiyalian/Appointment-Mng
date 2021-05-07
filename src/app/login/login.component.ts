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

  constructor(private dbService: DatabaseService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    // let user={email:this.email, password:this.password};
    // this.dbService.loginUser(user).subscribe(result =>{
    //   if (result["message"]=="ok"){
    //     alert("success")
    //   }
    //   else {
    //     alert("error")
    //   }
    // });
    this.router.navigate(['/voucher']);
  }

}
