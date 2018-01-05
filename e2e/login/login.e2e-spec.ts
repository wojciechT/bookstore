import {LoginPage} from './login.po';


describe('Login page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should login test user', () => {
    page.navigateTo();

    page.setLogin('TestUser');
    page.setPassword('123456');
    page.login();
    expect(page.isLoginFormPresent()).toBe(false);
  });
});
