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

  createUser(user){
    return this.http.post("/signup", user);
  }

  loginUser(user){
    return this.http.post("/login",user);
  }

  book(request){
    return this.http.post("/user/"+request.id+"/booking",request);//TODO
  }

  getBooking(id:string){
    return this.http.get("/user/"+id+"/allBooking");
  }

  editProfile(profile,ac,userId){
    httpOptions.headers=httpOptions.headers.set("x-access-token",ac);
    return this.http.post("/user/"+userId+"/updatePersonalInfo",profile,httpOptions);
  }

  editBiller(biller,ac,userId){
    httpOptions.headers=httpOptions.headers.set("x-access-token",ac);
    return this.http.post("/user/"+userId+"/updateBillerInfo",biller,httpOptions);
  }
}
