import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';

import { AdminLoginComponent } from './management-Components/admin-management/admin-login/admin-login.component';
import { UserLoginComponent } from './management-Components/user-management/user-login/user-login.component';
import { UserRegisterComponent } from './management-Components/user-management/user-register/user-register.component';


@NgModule({
  declarations: [
    ManagementModuleComponent,
   
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
