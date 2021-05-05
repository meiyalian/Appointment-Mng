import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CRegisterComponent } from './c-register/c-register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { InitialPageComponent } from './initial-page/initial-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CRegisterComponent,
    InitialPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
