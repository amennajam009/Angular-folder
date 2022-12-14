import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/Shared/Services/testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  showData:string='';
myForm:FormGroup | any;
  constructor(private formbuilder:FormBuilder, private Testingservice:TestingService) {
   this.myFormModel()

  }
 
  ngOnInit(): void {
  }
    
   myFormModel(){
    this.myForm=this.formbuilder.group(
      {
      email:new FormControl(''),
      password:new FormControl('')
    }
    )
   }
     

  getPostData(){
  this.Testingservice.getMyDataFromBackEnd().subscribe((responsefrombackend:any)=>{
   this.showData=responsefrombackend.Result;
  })
   }

   Submitmyform(){
   let FormValue = this.myForm.value;
   this.Testingservice.postMyDataToBackEnd(FormValue).subscribe((responsefrombackend:any)=>{
    responsefrombackend;
   })
      }
    
}

