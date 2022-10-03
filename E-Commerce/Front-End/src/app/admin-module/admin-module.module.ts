import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './admin-Components/dashboard/dashboard.component';
import { ProductsComponent } from './admin-Components/products/products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    FormsModule,
    
  ]
})
export class AdminModuleModule { }
