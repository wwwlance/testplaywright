import { expect, test } from '../base';

test('login and logout', async ({ 
  authPage
 }) => {
  await authPage.goto();
  await authPage.login();
  await expect(authPage.authMessage).toContainText('You logged into a secure area!');
  await authPage.logout();
  await expect(authPage.authMessage).toContainText('You logged out of the secure area!');
});