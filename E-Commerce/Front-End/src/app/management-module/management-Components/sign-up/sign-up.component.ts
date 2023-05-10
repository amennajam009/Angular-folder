import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { UserMnangeService } from 'src/app/Shared/Services/user-mnange.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  RegisterForm:FormGroup | any;
  constructor(private _FormBuilder:FormBuilder ,private _UserManageService:UserMnangeService ) {
    this.myUserSignUpModel();
   }

  ngOnInit(): void {
  }

 myUserSignUpModel(){
  this.RegisterForm = this._FormBuilder.group({
    firstName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    email:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    password:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
 }

 UserSubmit(){
  let payLoad = this.RegisterForm.value;
  this._UserManageService.UserSignUpApi(payLoad).subscribe((res:any)=>{
    res;
    this.RegisterForm.reset();
  })
 }



}
