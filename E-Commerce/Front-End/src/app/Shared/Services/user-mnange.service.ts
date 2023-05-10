import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMnangeService {

  constructor(private _HttpClient:HttpClient) { }


  UserSignUpApi(payLoad:any){
     return this._HttpClient.post('http://localhost:2525/UserManagement/UserRegister',payLoad);
  }



}
