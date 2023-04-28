import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { SignInComponent } from './management-Components/sign-in/sign-in.component';




@NgModule({
  declarations: [
    ManagementModuleComponent,
    SignInComponent,

  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
