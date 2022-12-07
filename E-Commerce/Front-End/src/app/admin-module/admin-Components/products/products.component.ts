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
  selectSize= ["Small", "Medi..", "Large", "X-L", "XX-L"];
  CategoryArray:any=['Men','Women'];
  formproduct:FormGroup |any;
   size:any=[];
   newImageArray:any=[]
button:boolean=true

  
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
  //  let category= 'hi category';
  //  !!(formvalues.category) ? category : '' ;
  //  formvalues;


  // let suppose humry pas ek array of object hai
     let ABC =[
      {name:'amen'},
      {name:'harry'},
      {name:'neena'}
     ]
   
     let [,secondvalue]=ABC;
  }
  
  getSize(event: any) {
   if(event.target.checked){
    let value= event.target.value;
    this.size.push(value);
   }else{
    this.size=this.size.filter((value:any)=>value !=event.target.value);
   }


   this.formproduct.get(this.selectSize).setvalue(this.size);
  }
  


    }
  
    // getImages(event:any){
    //   let fielsLength=event.target.files.length;
    //   if(event.target.files.length<=5){
    //     [...event.target.files].forEach(element => this.newImageArray.push(element) );
    //   }
    //   else{
    //     this.newImageArray=[]
    //     this.toaster.error(`limit is five you have selected ${fielsLength}`)
    //     this.fileSelect.nativeElement.value=null
        
        
    //   }
    // }



