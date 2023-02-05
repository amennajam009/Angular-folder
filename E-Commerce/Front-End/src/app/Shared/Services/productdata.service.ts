
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
    return this.HttpClient.get('http://localhost:9090/productManagment/ProductData');
     }
  
}
