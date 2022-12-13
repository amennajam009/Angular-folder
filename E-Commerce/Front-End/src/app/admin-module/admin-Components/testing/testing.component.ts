import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/Shared/Services/testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
myForm:FormGroup | any;
  constructor(private formbuilder:FormBuilder, private Testingservice:TestingService) {
   this.myFormModel()
   this.Testingservice.postMyDataToBackEnd()
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


   Submitmyform(){
   let FormValue = this.myForm.value;
      }
    
}

