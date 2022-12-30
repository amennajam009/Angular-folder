
import { FormsModule,FormBuilder,FormGroup, Validators, FormArray, FormControl ,  } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
@ViewChild('fileSelect') fileSelect:ElementRef|any
  



ProductCreateForm:FormGroup|any
  constructor(private FormBuilder:FormBuilder,private toaster:ToastrService,) {
    this.productFormModel()
   }
  
  ngOnInit(): void {
  }

 

// edhr mai apna code initilazed kr rhe hun
  productFormModel(){
    this.formproduct=this.FormBuilder.group({
      ProductName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      ProductQuantity:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
      ProductPrice:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
      EnterDescription:new FormControl('',Validators.required,),
      Category:new FormControl('',Validators.required),
      LogoMaterial:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
      color:new FormControl('',Validators.required),
      ProductMaterial:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
      selectSize: new FormArray([]),

    })
  }
  SubmitmyData(){
  
    this.size.forEach((element:string) => {
      let formControl=new FormControl(element);
      this.ProductCreateForm.get("selectSize").push(formControl)
    });


    let  MultipartFormData=new FormData();
    MultipartFormData.append('productName',this.ProductCreateForm.get('productName').value)
    MultipartFormData.append('ProductQuantity', this.ProductCreateForm.get('ProductQuantity').value);
    MultipartFormData.append('ProductPrice', this.ProductCreateForm.get('ProductPrice').value);
    MultipartFormData.append('EnterDescription', this.ProductCreateForm.get('EnterDescription').value);
    MultipartFormData.append('Category', this.ProductCreateForm.get('Category').value);
    MultipartFormData.append('LogoMaterial', this.ProductCreateForm.get('LogoMaterial').value);
    MultipartFormData.append('color', this.ProductCreateForm.get('color').value);
    MultipartFormData.append('ProductMaterial', this.ProductCreateForm.get(' ProductMaterial').value);
    MultipartFormData.append('selectSize', this.ProductCreateForm.get('selectSize').value);
    
    this.newImageArray.forEach((imagedata:any)=>{
  MultipartFormData.append('images',imagedata);
    
    })
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
  


  getImages(event:any){
    let fileLength=event.target.files.length;
    if(event.target.files.length<=5){
      [...event.target.files].forEach(element => this.newImageArray.push(element) );
    }
    else{
      this.newImageArray=[]
      this.toaster.error(`limit is five you have selected ${fileLength}`)
      this.fileSelect.nativeElement.value=null
      
      
    }
  }

 


}
    


