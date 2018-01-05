import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {environment} from '../../../environments/environment';
import {Credentials} from '../credentials';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(userCredentials: Credentials): Observable<User> {
    return this.http.post<any>(environment.bookstoreApi + 'authentication', userCredentials)
      .pipe(
        map(response => {
        const user = new User(response.UserName, response.IsAutheticated, response.IsAutheticated);
        if (user.isAuthenticated) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
        }));
  }

  logout() {
    localStorage.removeItem('user');
  }
}
