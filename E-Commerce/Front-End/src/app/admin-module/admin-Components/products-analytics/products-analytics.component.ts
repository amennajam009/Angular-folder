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

  constructor(private _productservice:ProductdataService) {
  }

  ngOnInit(): void {
    this._productservice.GetProductcard().subscribe((Responsefrombackend:any)=>{
      this.ProductArray = Responsefrombackend.Result;
    })
  }

}
