import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CRegisterComponent} from "./c-register/c-register.component";
import {LoginComponent} from "./login/login.component";

const routes:Routes=[
  {path:'register', component:CRegisterComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
