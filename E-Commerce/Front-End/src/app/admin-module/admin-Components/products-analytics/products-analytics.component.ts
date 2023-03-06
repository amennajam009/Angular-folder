import { ToastrService } from 'ngx-toastr';
import { Product } from './../../../SharedData/Interface/product';
import { Component, OnInit } from '@angular/core';
import { ProductdataService } from 'src/app/Shared/Services/productdata.service';

@Component({
  selector: 'app-products-analytics',
  templateUrl: './products-analytics.component.html',
  styleUrls: ['./products-analytics.component.css']
})
export class ProductsAnalyticsComponent implements OnInit {
  Url='http://localhost:2525/';
ProductArray:any=[];
particularproductData:any = {}
  constructor(private _productservice:ProductdataService , private _Toasterservice:ToastrService) {
  }

  ngOnInit(): void {
    this._productservice.GetProductcard().subscribe((Responsefrombackend:any)=>{
     Responsefrombackend.Result.forEach((element:any) => {
      if(element.softDeleteStatus !==1){
        this.ProductArray.push(element);
      }
     });
    })
  }
  getparticularDataId(_id:any){
   this._productservice.GetProductById(_id).subscribe((res:any)=>{
   this.particularproductData= res.Result;
   })
  }

  deleteparticularDataById(_id:any){
    this._productservice.SoftDelete(_id).subscribe((res:any)=>{
      this._Toasterservice.error(res.message);
      this.ProductArray=[];
      this.ngOnInit()
    })
  }
}

