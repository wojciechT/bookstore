import { Injectable } from '@angular/core';
import {Credentials} from '../credentials';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../user';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,
              private userService: UserService,
              private router: Router) { }

  login(credentials: Credentials): Observable<User> {
    return this.http
      .post<any>(environment.bookstoreApi + 'authentication', credentials)
      .pipe(
        map(response => {
          return new User(response.UserName, response.IsAutheticated, response.IsAutheticated);
        })
      );
  }

  logout() {
    this.userService.removeUser();
    this.router.navigateByUrl('/login');
  }

}
