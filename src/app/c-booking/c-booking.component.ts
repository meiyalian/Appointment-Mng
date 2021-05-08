import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-booking',
  templateUrl: './c-booking.component.html',
  styleUrls: ['./c-booking.component.css']
})
export class CBookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //=======================================
  //===========================================
  //Book list
  public booklist:any = [];

  //Menu list
  public menu:any[] =[
    {business:"flowers"},
    {business:"chocolatebox"},
    {business:"teaparty"},
    {business:"coffees10"},
    {business:"breakfast"},
    {business:"lunch"},
    {business:"meatmeal"},
    {business:"fishmeal"},
    {business:"vegmeal"},
    {business:"bakerygoods"},
    {business:"hairstyle"}
  ];

  //The following methods are the options of voucher service
  Add_flower(){
    this.booklist.push(this.menu[0].business);
  }

  Add_chocolatebox(){
    this.booklist.push(this.menu[1].business);
  }

  Add_teaparty(){
    this.booklist.push(this.menu[2].business);
  }

  Add_coffees10(){
    this.booklist.push(this.menu[3].business);
  }

  Add_breakfast(){
    this.booklist.push(this.menu[4].business);
  }

  Add_lunch(){
    this.booklist.push(this.menu[5].business);
  }

  Add_meatmeal(){
    this.booklist.push(this.menu[6].business);
  }

  Add_vegmeal(){
    this.booklist.push(this.menu[7].business);
  }

  Add_bakerygoods(){
    this.booklist.push(this.menu[8].business);
  }

  Add_hairstyle(){
    this.booklist.push(this.menu[9].business);
  }




  Booking(){
    //Connect with the back end, send the booklist to the backend
  }

  ClearItem(){
    this.booklist = [];
  }

}
