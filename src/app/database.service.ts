import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json", "Authorization": 'my-auth-token'}),
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
}
