import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-Components/dashboard/dashboard.component';
import { ProductsAnalyticsComponent } from './admin-Components/products-analytics/products-analytics.component';
import { ProductsComponent } from './admin-Components/products/products.component';
import { TestingComponent } from './admin-Components/testing/testing.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent,
children:[
  {path:'dashboard', component:DashboardComponent},
  {path:'products', component:ProductsComponent},
  {path:'testing',  component:TestingComponent},
  {path:'products-analytics', component:ProductsAnalyticsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
