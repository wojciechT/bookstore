import { browser, by, element } from 'protractor';
import {BookListPage} from '../books/list/book-list.po';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  setLogin(login: string) {
    element(by.id('login')).sendKeys(login);
  }

  setPassword(password: string) {
    element(by.id('password')).sendKeys(password);
  }

  login() {
    element(by.id('submitButton')).click();
  }

  isLoginFormPresent() {
    return element(by.id('loginContainer')).isPresent();
  }
}
