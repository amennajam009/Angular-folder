import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
myForm:FormGroup|any;
  constructor(private FormBuilder:FormBuilder) {
    this.myFormModel();
   }
 
  ngOnInit(): void {
  }
    
   myFormModel(){
    this.myForm=this.FormBuilder.group({
      Email:new FormControl(''),
      password:new FormControl('')
    })
   }


   SubmitMyForm(){
   let myformvalues=this.myForm.value;
   }


}
