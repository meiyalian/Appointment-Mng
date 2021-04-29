import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

  cRegister(){
    let obj={customerName: this.name, phoneNumber: this.phone, emailAd: this.email, password: this.password};

  }

}
