import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-Components/about-us/about-us.component';
import { CheckOutComponent } from './main-Components/check-out/check-out.component';
import { ContactUsComponent } from './main-Components/contact-us/contact-us.component';
import { HomeComponent } from './main-Components/home/home.component';
import { OrderFailedComponent } from './main-Components/order-failed/order-failed.component';
import { OrderSuccessfulComponent } from './main-Components/order-successful/order-successful.component';
import { ProductsComponent } from './main-Components/products/products.component';
import { ViewproductsComponent } from './main-Components/viewproducts/viewproducts.component';
import { WildCardComponent } from './main-Components/wild-card/wild-card.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'viewproducts',component:ViewproductsComponent},
  {path:'checkout',component:CheckOutComponent},
  
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'order-failed',component:OrderFailedComponent},
  {path:'order-successful',component:OrderSuccessfulComponent},
  //{path:'**',component:WildCardComponent} //slug of wildcard always **
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
