import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagmentGuard } from './Shared/Guards/user-managment.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, 
  { path: 'AdminModule', canActivate:[UserManagmentGuard],
   loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) },
  { path: 'mainModule', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, 
  { path: 'userModule', loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule) },
  { path: 'ManagementModule', loadChildren: () => import('./management-module/management-module.module').then(m => m.ManagementModuleModule) }]; //indetation....!(to inhence the readability of code)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
