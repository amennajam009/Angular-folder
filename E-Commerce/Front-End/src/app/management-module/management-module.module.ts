import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { SignInComponent } from './management-Components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ManagementModuleComponent,
    SignInComponent,
   

  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagementModuleModule { }
