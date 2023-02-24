import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-analytics',
  templateUrl: './products-analytics.component.html',
  styleUrls: ['./products-analytics.component.css']
})
export class ProductsAnalyticsComponent implements OnInit {

  ProductArray=[1,2,3,4,5]

  constructor() { }

  ngOnInit(): void {
  }

}
