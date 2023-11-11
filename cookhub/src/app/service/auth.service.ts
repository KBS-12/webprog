import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }
  isLoggedIn = new BehaviorSubject(false);

  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  isloggedin(){
    return sessionStorage.getItem('name')!=null;
  }
  changeLoginLogout(){
    if(this.isloggedin()==true){
      this.isLoggedIn.next(true);
    }
  }
  logoutUser() {
    this.isLoggedIn.next(false);
  }
  loginUser() {
    this.isLoggedIn.next(true);
  }

}

