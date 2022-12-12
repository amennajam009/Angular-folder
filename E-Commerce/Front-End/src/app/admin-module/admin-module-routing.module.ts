import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-Components/dashboard/dashboard.component';
import { ProductsComponent } from './admin-Components/products/products.component';
import { TestingComponent } from './admin-Components/testing/testing.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent,
children:[
  {path:'dashboard', component:DashboardComponent},
  {path:'products', component:ProductsComponent},
  {path:'testing',  component:TestingComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
