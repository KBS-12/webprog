import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(public service: AuthService, private toastr: ToastrService){}
  
  get(){
    return sessionStorage.getItem('name');
  }
  deleteSessionStorage(){
    this.service.logoutUser();
    sessionStorage.clear();
    this.toastr.success('Erfolgreich Abgemeldet!');
  }
}
