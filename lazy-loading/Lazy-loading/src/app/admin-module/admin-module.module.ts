import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './admin-Components/dashboard/dashboard.component';
import { OrdersComponent } from './admin-Components/orders/orders.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
