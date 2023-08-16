import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { faEye, faEyeSlash, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm: FormGroup
emailAdress = ''
view: boolean = false;
logined: boolean = false;
alert = faCircleExclamation;

constructor(private FormBuilder: FormBuilder){
  this.loginForm = FormBuilder.group({
    emailAdress: ['', Validators.required],
    password: ['', Validators.required]
  })
}

login(){
 this.logined = true;
}


}
