import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:AuthService, private toastr: ToastrService){  }

loginStatus;
  ngOnInit() {
    this.service.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
  });
}
  deleteSessionStorage(){
    sessionStorage.clear();
  }
  
  logout() {
    this.toastr.success('Erfolgreich Abgemeldet!');
    this.service.logoutUser();
  }
  login() {
    this.service.loginUser();
  }
}
