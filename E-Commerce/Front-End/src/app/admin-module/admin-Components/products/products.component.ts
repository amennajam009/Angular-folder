import { FormsModule,FormBuilder,FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/SharedData/Interface/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  // yaha mai apna code declare kr rhe hun 
  selectSize= ["S", "M", "L", "X-L", "XX-L"]
  CategoryArray:any=['Men','Women'];
  formproduct:FormGroup |any;
  constructor(private FormBuilder:FormBuilder) {
    this.productFormModel()
   }
  
  ngOnInit(): void {
  }

// edhr mai apna code initilazed kr rhe hun
  productFormModel(){
    this.formproduct=this.FormBuilder.group({
      ProductName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
      ProductQuantity:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      ProductPrice:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      EnterDescription:['',Validators.required,],
      Category:['',Validators.required],
      LogoMaterial:['',Validators.required,Validators.pattern(/^[A-Za-z]+$/)],
      color:['',Validators.required],
      ProductMaterial:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      selectSize: new FormArray([]),

    })
  }
  SubmitmyData(){
    let formvalues=this.formproduct.value;
    console.log(formvalues);
  }
  
  

}
