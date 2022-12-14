import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private HttpClient:HttpClient) { }

  postMyDataToBackEnd(payLoad:any){
     return this.HttpClient.post('http://localhost:9090/TestingManagement/postTestingData',payLoad)
  }

  getMyDataFromBackEnd(){
  return this.HttpClient.get('http://localhost:9090/TestingManagement/getTestingData')
  }

  delMyDataFromBackEnd(){
 return
  }
  UpDateMyDataFromBackEnd(){
    
  }
}
