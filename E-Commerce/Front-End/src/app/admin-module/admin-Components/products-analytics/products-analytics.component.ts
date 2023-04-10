import { ToastrService } from 'ngx-toastr';
import { Product } from './../../../SharedData/Interface/product';
import { Component, OnInit } from '@angular/core';
import { ProductdataService } from 'src/app/Shared/Services/productdata.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-analytics',
  templateUrl: './products-analytics.component.html',
  styleUrls: ['./products-analytics.component.css']
})
export class ProductsAnalyticsComponent implements OnInit {
  Url='http://localhost:2525/';
ProductArray:any=[];
MakeMyIdPublic :any;
particularproductData:any = {}
updateproductform:any | FormGroup;

  constructor(private _productservice:ProductdataService , private _Toasterservice:ToastrService , private _FormBuilder:FormBuilder) {
    this.updateproductformModel();
  }

  ngOnInit(): void {
   this.PopulateProductArray();
  }

  updateproductformModel(){
  this.updateproductform = this._FormBuilder.group({
    ProductName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    ProductQuantity:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
    ProductPrice:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
    // EnterDescription:new FormControl('',Validators.required,),
    // Category:new FormControl('',Validators.required),
    LogoMaterial:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
    color:new FormControl('',Validators.required),
    // ProductMaterial:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
    // selectSize: new FormArray([]),
  })
  }


 PopulateProductArray(){
  this._productservice.GetProductcard().subscribe((Responsefrombackend:any)=>{
    Responsefrombackend.Result.forEach((element:any) => {
     if(element.softDeleteStatus !==1){
       this.ProductArray.push(element);
     }
    });
   })
 }

  getparticularDataId(_id:any){
    this.MakeMyIdPublic=_id
   this._productservice.GetProductById(_id).subscribe((res:any)=>{
   this.particularproductData= res.Result;
   this.updateproductform = this._FormBuilder.group({
    ProductName:new FormControl(this.particularproductData?.ProductName,[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    ProductQuantity:new FormControl(this.particularproductData?.ProductQuantity,[Validators.required,Validators.pattern(/^[0-9]*$/)]),
    ProductPrice:new FormControl(this.particularproductData?.ProductPrice,[Validators.required,Validators.pattern(/^[0-9]*$/)]),
    // EnterDescription:new FormControl('',Validators.required,),
    // Category:new FormControl('',Validators.required),
    LogoMaterial:new FormControl(this.particularproductData?.LogoMaterial,[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
    color:new FormControl(this.particularproductData?.color,Validators.required),
    // ProductMaterial:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
    // selectSize: new FormArray([]),
  })
   })
  }

  deleteparticularDataById(_id:any){
    this._productservice.SoftDelete(_id).subscribe((res:any)=>{
      this._Toasterservice.error(res.message);
      this.ProductArray=[];
      this.PopulateProductArray();
    })
  }

  HardDeleteDataById(_id:any){
    this._productservice.HardDelete(_id).subscribe((res:any)=>{
      this._Toasterservice.error(res.message);
      this.ProductArray=[];
      this.PopulateProductArray();

    })
  }
//  UpdateById(_id:any){
//   this._productservice.UpdateProductById(_id).subscribe((res:any)=>{
//     res;
//   })
//  }

update(){
  let payLoad = this.updateproductform.value;
  payLoad['_id'] = this.MakeMyIdPublic;
  this._productservice.UpdateProductById(payLoad).subscribe((res:any) =>{
    this._Toasterservice.success(res.message);
    this.getparticularDataId(this.MakeMyIdPublic);

  })
}
}


