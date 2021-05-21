import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CRegisterComponent } from './c-register/c-register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { VoucherComponent } from './voucher/voucher.component';
import {MatSelectModule} from "@angular/material/select";
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    CRegisterComponent,
    InitialPageComponent,
    LoginComponent,
    VoucherComponent,
    ProfileComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
