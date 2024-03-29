import { TestingComponent } from './admin-Components/testing/testing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './admin-Components/dashboard/dashboard.component';
import { ProductsComponent } from './admin-Components/products/products.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductsAnalyticsComponent } from './admin-Components/products-analytics/products-analytics.component';




@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    ProductsComponent,
    TestingComponent,
    ProductsAnalyticsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
   
   
    
    
    
  ]
})
export class AdminModuleModule { }
