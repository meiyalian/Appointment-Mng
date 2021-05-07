import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})

export class VoucherComponent implements OnInit {

  serviceTypes = [
    {value:'flowers'},
    {value:'chocolatebox'},
  ];
  deliverOptions = ['delivery to the MYD offices', 'pick-up from the service'];
  selectedService: string;
  selectedDeliver: string;
  date:string;
  section = 1;
  optionMessage:string;

  requestList: any[] = [ {service:'flowers'}, {service:'chocolatebox'}];

  constructor() { }

  ngOnInit(): void {
  }

  changeSection(sectionId) {
    this.section = sectionId;
  }


}
