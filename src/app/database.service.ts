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
}
