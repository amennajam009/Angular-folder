import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagementModuleComponent } from './management-module.component';

import { SignInComponent } from './management-Components/sign-in/sign-in.component';
import { SignUpComponent } from './management-Components/sign-up/sign-up.component';

const routes: Routes = [{ path: '', component: ManagementModuleComponent ,
    children:[
    {path: 'signIn' , component:SignInComponent},
    {path: 'signup' , component:SignUpComponent},

    ]  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
