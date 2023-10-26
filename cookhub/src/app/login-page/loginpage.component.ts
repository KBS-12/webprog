import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service:AuthService, private router:Router ){
    sessionStorage.clear();
  }
  result: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.GetUserbyCode(this.loginform.value.email).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginform.value.password) {
            sessionStorage.setItem('name',this.result.id);
            this.router.navigate(['home-page']);
          }else {
          this.toastr.error('Email oder Passwort ist Falsch');
        }
      });
    } else {
      this.toastr.warning('Bitte gib Valide Daten ein.')
    }
  }
}
