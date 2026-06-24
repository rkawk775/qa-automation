import { test, expect } from '@playwright/test';

test('GitHub Actions 실행 확인 테스트', async ({ page }) => {

  await page.goto('https://m.place.naver.com/my');

  await expect(page).toHaveURL(/m\.place\.naver\.com/);

});