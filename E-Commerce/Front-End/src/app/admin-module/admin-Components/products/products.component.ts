import { FormsModule,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


  
}
