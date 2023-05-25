import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductdataService } from 'src/app/Shared/Services/productdata.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  LoginForm:FormGroup | any;
  constructor(private FormBuilder:FormBuilder,
              private productService:ProductdataService,
              private router:Router) { 
                this.myUserLoginModel()
              }

  ngOnInit(): void {
  }


  myUserLoginModel(){
    this.LoginForm = this.FormBuilder.group({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  SubmitForm(){
    let loginValues=this.LoginForm.value
    this.productService.UserSignInApi(loginValues).subscribe((res:any)=>{
      this.productService.setTokenIntoLocalStorage(res.Token);
      if(res.userPrivilage === 'Admin'){
        this.router.navigate(['/AdminModule'])

      }
      else{
        this.router.navigate([''])
      }
    })



  }
}
