import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementModuleComponent } from './management-module.component';

const routes: Routes = [{ path: '', component: ManagementModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
