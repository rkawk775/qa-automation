import { test } from '@playwright/test';

test('모바일 확인', async ({page}) => {
    await page.goto('https://m.place.naver.com/my')
    await page.pause();
});