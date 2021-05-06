import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})

export class VoucherComponent implements OnInit {

  serviceTypes: any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.serviceTypes = [
      {'value':'flowers', 'name': 'flowers'},
      {'value':'chocolatebox', 'name': 'chocolatebox'},
      {'value':'chocolatebox', 'name': 'teaparty'}
    ];
  }


}
