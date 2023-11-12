import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import  {Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {


constructor(private builder: FormBuilder, private toastr: ToastrService ,private service:AuthService, private router:Router ){

}

registerform=this.builder.group({
name:this.builder.control('',Validators.required),
id:this.builder.control('',Validators.required),
password:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(8)]))

});

proceedregistration(){
  if(this.registerform.valid){
    this.service.RegisterUser(this.registerform.value).subscribe(res => {
      this.toastr.success('Registrierung erfolgreich')
      this.router.navigate(['login-page'])});
  }else{
this.toastr.warning('Bitte gebe Valide Daten ein, dass Passwort muss mindestens 8 Zeichen lang sein!');
  }
}
}
