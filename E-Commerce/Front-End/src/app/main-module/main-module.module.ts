import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-Components/header/header.component';
import { FooterComponent } from './main-Components/footer/footer.component';
import { HomeComponent } from './main-Components/home/home.component';
import { ProductsComponent } from './main-Components/products/products.component';
import { ViewproductsComponent } from './main-Components/viewproducts/viewproducts.component';
import { CheckOutComponent } from './main-Components/check-out/check-out.component';
import { OrderSuccessfulComponent } from './main-Components/order-successful/order-successful.component';
import { OrderFailedComponent } from './main-Components/order-failed/order-failed.component';
import { WildCardComponent } from './main-Components/wild-card/wild-card.component';
import { AboutUsComponent } from './main-Components/about-us/about-us.component';
import { ContactUsComponent } from './main-Components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ViewproductsComponent,
    CheckOutComponent,
    OrderSuccessfulComponent,
    OrderFailedComponent,
    WildCardComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
