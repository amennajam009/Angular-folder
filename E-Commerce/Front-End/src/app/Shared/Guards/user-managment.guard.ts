import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductdataService } from '../Services/productdata.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserManagmentGuard implements CanActivate {
  constructor(private readonly Router:Router,private readonly productservice:ProductdataService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.productservice.checkUserLogin()) {
        this.Router.navigate(['/ManagementModule/signIn']);
        return false;
      } else {
        return true;
      }
    }
  }
 


