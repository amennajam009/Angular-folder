import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { SignInComponent } from './management-Components/sign-in/sign-in.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './management-Components/sign-up/sign-up.component';





@NgModule({
  declarations: [
    ManagementModuleComponent,
    SignInComponent,
    SignUpComponent,
   

  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagementModuleModule { }
