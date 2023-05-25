
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private HttpClient:HttpClient) {
    
   }

  CreateProductcard(payLoad:any){
 return this.HttpClient.post('http://localhost:2525/productManagment/ProductData',payLoad);
  }

  GetProductcard(){
    return this.HttpClient.get('http://localhost:2525/productManagment/getProductData');
     }
  
  GetProductById(_id:any){
    return this.HttpClient.get(`http://localhost:2525/productManagment/getProductById/${_id}`);
  }
  SoftDelete(_id:any){
    return this.HttpClient.delete(`http://localhost:2525/productManagment/SoftDelete/${_id}`);
  }

   HardDelete(_id:any){
    return this.HttpClient.delete(`http://localhost:2525/productManagment/HardDelete/${_id}`);
   }

   UpdateProductById(payload:any){

    return this.HttpClient.post(`http://localhost:2525/productManagment/UpdateProductById`,payload)
    
    }
    UserSignUpApi(payLoad:any){
     return this.HttpClient.post('http://localhost:2525/UserManagement/UserRegister',payLoad)
    }
    UserSignInApi(payLoad:any){
      return this.HttpClient.post('http://localhost:2525/UserManagement/UserLogin',payLoad)
    }

    setTokenIntoLocalStorage(payLoad:any){
    localStorage.setItem('Access-Token',payLoad)
    }
    checkUserLogin(){
      return localStorage.getItem('Access-Token')!==null
    }
}
 


