import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductdataService } from 'src/app/Shared/Services/productdata.service';
import { UserMnangeService } from 'src/app/Shared/Services/user-mnange.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formproduct:FormGroup|any;
  constructor(private _FormBuilder:FormBuilder , private _productService:ProductdataService , private Toaster:ToastrService) {
    this.myUserSignUpModel();
   }

  ngOnInit(): void {
  }

 myUserSignUpModel(){
  this.formproduct = this._FormBuilder.group({
    firstName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    email:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    password:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
 }

 UserSubmit(){
  let payLoad = this.formproduct.value;
  this._productService.UserSignUpApi(payLoad).subscribe((res:any)=>{
    res;
    this.Toaster.success(res.message)
    this.formproduct.reset();
  })
 }



}