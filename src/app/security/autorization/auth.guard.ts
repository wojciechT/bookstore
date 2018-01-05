import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {User} from '../authentication/user';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const jsonUser = localStorage.getItem('user');
    if (jsonUser) {
      console.log('1');
        const user = JSON.parse(jsonUser) as User;
        return user.isAuthenticated && user.isAuthorized;
    }
    console.log('2');
    this.router.navigateByUrl('/login');
    return false;
  }
}
