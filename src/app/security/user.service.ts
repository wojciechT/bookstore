import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  constructor() { }

  setCurrentUser(user: User) {
    const userJson = JSON.stringify(user);
    localStorage.setItem('user', userJson);
  }

  getCurrentUser(): User {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      return JSON.parse(userJSON) as User;
    }
    return null;
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
