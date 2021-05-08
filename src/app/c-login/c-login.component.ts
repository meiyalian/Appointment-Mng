import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.css']
})
export class CLoginComponent implements OnInit {
  ngOnInit(): void {
  }

  title = 'voucherService';
  username = '';
  password = '';

  constructor(private route:Router){};

  LogIn(){
    //Should send the username and password to the backend to confirm
    
  }

}
