import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { faEyeSlash, faEye, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{
  signinForm: FormGroup;
  emailAdress = '';
  password = '';
  view: boolean = false;
  eye = faEyeSlash;
  alert = faCircleExclamation;
  submitted: boolean = false;
  infos = {}

  constructor(private formBuilder: FormBuilder){
    this.signinForm = formBuilder.group({
      emailAdress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', Validators.required],
      day: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-9]|2[0-9]|3[0-1])$')]],
      month: ['', Validators.required],
      year: ['', [Validators.required, Validators.minLength(4)] ],
      gender: [''],
      mensagens: [''],
      dados: [''],
      termos: ['', Validators.requiredTrue]
    })
  }

  signin(){
    this.submitted = true;
    console.log(this.signinForm)
    if(this.signinForm.valid){
      console.log(this.signinForm.value)
    }
    } 
    
  changeType(){
    this.view = !this.view
    if(this.view){
      this.eye = faEye;
    }else{
      this.eye = faEyeSlash;
    }
  }

}
