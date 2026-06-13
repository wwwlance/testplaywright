import { test } from '../base';

test('register', async ({ 
  registerPage
 }) => {
  await registerPage.goto();
  await registerPage.register();
  await registerPage.registerSuccess();
});

test('login', async ({ 
  authPage
 }) => {
  await authPage.goto();
  await authPage.login();
  await authPage.loginSuccess();
  await authPage.logout();
  await authPage.logoutSuccess();
});