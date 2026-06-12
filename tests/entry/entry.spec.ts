import { test, expect } from '@playwright/test';
import { CheckinPage } from '../../pages/CheckinPage';
import { LoginPage } from '../../pages/LoginPage';


test.describe('리뷰쓰기 진입 테스트', () => {
    let checkinPage: CheckinPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        checkinPage = new CheckinPage(page);
        loginPage = new LoginPage(page);

        await page.goto(process.env.BASE_URL!);

        await checkinPage.moveCheckinPage();

        if(await loginPage.isLoginpage()){
            await loginPage.loginIfNeeded();

            await checkinPage.moveCheckinPage();
        }
    });


    /*
    test('C14681344 체크인페이지-영수증', async ({ page }) => {

        await checkinPage.openReceipt();

        // 파일 선택함 발생 여부 확인
        const fileChooserPromise =
        page.waitForEvent('filechooser');


        await checkinPage.openReceipt();


        const fileChooser =
        await fileChooserPromise;


        expect(fileChooser).toBeTruthy();
    });


    test('c14681346 체크인페이지 - 사진/영상', async ({ page }) => {

        await checkinPage.openPhotoVideo();

        await checkinPage.handleCheckinPopup();

        await expect(
            page.locator('div')
            .filter({
            hasText: '네이버 앱, 네이버 지도 앱에서 작성 가능해요!'
            })
            .nth(2)
        ).not.toBeVisible();
    });


    test('c14681347 체크인페이지 - 장소검색', async ({ page }) => {

        await checkinPage.openPlaceSearch();

        await checkinPage.handleCheckinPopup();

        await expect(
            page.locator('div')
            .filter({
            hasText: '네이버 앱, 네이버 지도 앱에서 작성 가능해요!'
            })
            .nth(2)
        ).not.toBeVisible();
    });
    */
    
    test('c14681348 체크인페이지 - 최근 방문 내역', async ({ page }) => {

        const popupPromise = page.waitForEvent('popup');

        await checkinPage.clickRecentVisit();

        const reviewPage = await popupPromise;

        await reviewPage.waitForLoadState();

        console.log('기존 페이지:', page.url());
        console.log('새 페이지:', reviewPage.url());

        await expect(reviewPage).toHaveURL(
            /my\/open\/review\?visitId=.+/
        );
    });

    /*
    test('c14681350 MY > 타임라인 ', async ({ page }) => {

    });

    test('c14681351 타임라인 상세', async ({ page }) => {

    });

    test('c14681352 리뷰 피드', async ({ page }) => {

    });
    */
});