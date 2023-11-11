import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(public service: AuthService){}
  
  get(){
    return sessionStorage.getItem('name');
  }
  deleteSessionStorage(){
    this.service.logoutUser();
    sessionStorage.clear();
  }
}
