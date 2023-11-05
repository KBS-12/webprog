import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router,private tostr:ToastrService) { }
  
  canActivate(
    route: ActivatedRouteSnapshot) {
      if (this.service.isloggedin()) {
           return true;
     }
     else {
        this.tostr.warning('Bitte Loggen sie sich erst ein!')
       this.router.navigate(['login-page']);
       return false;
     }
  }

}
