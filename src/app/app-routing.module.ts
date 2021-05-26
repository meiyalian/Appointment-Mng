import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CRegisterComponent} from "./c-register/c-register.component";
import {LoginComponent} from "./login/login.component";
import {VoucherComponent} from "./voucher/voucher.component";
import {ProfileComponent} from "./profile/profile.component";
import {InitialPageComponent} from "./initial-page/initial-page.component";
import {AppComponent} from "./app.component";
import {AdminComponent} from "./admin/admin.component";

const routes:Routes=[
  {path:'home',component:InitialPageComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'register', component:CRegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'voucher', component:VoucherComponent},
  {path:'profile', component:ProfileComponent},
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
