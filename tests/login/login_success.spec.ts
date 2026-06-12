import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { USER } from '../../test-data/user';

test('C101 로그인 성공', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(process.env.BASE_URL!);

  await loginPage.closePopup();

  await loginPage.moveLoginPage();

  await loginPage.login(
    USER.id,
    USER.pw
  );

  await loginPage.closePopup();

  await expect(page).not.toHaveURL(/login/i);
});