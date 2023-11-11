import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:AuthService){  }

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
    this.service.logoutUser();
  }
  login() {
    this.service.loginUser();
  }
}
