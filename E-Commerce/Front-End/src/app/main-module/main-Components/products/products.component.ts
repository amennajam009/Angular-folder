import { Component, OnInit } from '@angular/core';

import { ProductdataService } from 'src/app/Shared/Services/productdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Url='http://localhost:2525/'
  // data: any=[];
  Allproducts:any=[];
  constructor(private _productdataservice:ProductdataService) { }

  ngOnInit(): void {
    this._productdataservice.GetProductcard().subscribe
    ((Responsefrombackend:any)=>{
      this.Allproducts=Responsefrombackend.Result;
    })
  }

}
