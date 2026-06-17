import { expect, test } from '../base';

test('register', async ({ 
  registerPage
 }) => {
  await registerPage.goto();
  await registerPage.register();
  await expect(registerPage.registerMessage).toContainText('Successfully registered, you can log in now.');
});