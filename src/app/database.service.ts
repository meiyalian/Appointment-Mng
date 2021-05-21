import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json", "x-access-token": 'my-auth-token'}),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}
  result: any;
  ac:string;

  createUser(user){
    return this.http.post("/signup", user);
  }

  loginUser(user){
    return this.http.post("/login",user);
  }

  book(id, request){
    return this.http.post("/user/"+id+"/booking",request, httpOptions);
  }

  getBooking(id:string){
    return this.http.get("/user/"+id+"/allBooking",httpOptions);
  }

  editProfile(profile,ac,userId){
    httpOptions.headers=httpOptions.headers.set("x-access-token",ac);
    return this.http.post("/user/"+userId+"/updatePersonalInfo",profile,httpOptions);
  }

  editBiller(biller,ac,userId){
    httpOptions.headers=httpOptions.headers.set("x-access-token",ac);
    return this.http.post("/user/"+userId+"/updateBillerInfo",biller,httpOptions);
  }

  getAllServices(ac){
    httpOptions.headers=httpOptions.headers.set("x-access-token",ac);
    return this.http.get("/allServices",httpOptions);
  }

  addService(service){
    httpOptions.headers=httpOptions.headers.set("x-access-token",this.ac);
    return this.http.post("/admin/addservice", service, httpOptions);
  }

  getRequests(){
    httpOptions.headers=httpOptions.headers.set("x-access-token",this.ac);
    return this.http.get("/admin/viewBookingRequest",httpOptions);
  }
}
