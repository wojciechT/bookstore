import { browser, by, element } from 'protractor';

export class BookListPage {
  navigateTo() {
    return browser.get('/books');
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
}
