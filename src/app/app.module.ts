import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CRegisterComponent } from './c-register/c-register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { CLoginComponent } from './c-login/c-login.component';
import { CBookingComponent } from './c-booking/c-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    CRegisterComponent,
    InitialPageComponent,
    CLoginComponent,
    CBookingComponent,

=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 64f2edf4df9eb88b8b9bfdd865254a925f526bc3
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
