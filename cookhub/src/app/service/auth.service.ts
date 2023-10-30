import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }

  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(email:any){
    return this.http.get(this.apiurl+'/'+email);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(email:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+email,inputdata);
  }
  isloggedin(){
    return sessionStorage.getItem('name')!=null;
  }