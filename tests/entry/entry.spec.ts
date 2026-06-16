import { test, expect } from '@playwright/test';
import { CheckinPage } from '../../pages/CheckinPage';
import { LoginPage } from '../../pages/LoginPage';
import { MyhomePage } from '../../pages/MyhomePage';
import { TimelinePage } from '../../pages/TimelinePage';
import { ReviewhomePage } from '../../pages/ReviewhomePage';


test.describe('리뷰쓰기 진입 테스트', () => {
    let checkinPage: CheckinPage;
    let loginPage: LoginPage;
    let myhomePage : MyhomePage;
    let timelinePage : TimelinePage;
    let reviewhomePage : ReviewhomePage;

    test.beforeEach(async ({ page }) => {
        checkinPage = new CheckinPage(page);
        loginPage = new LoginPage(page);
        myhomePage = new MyhomePage(page);
        timelinePage = new TimelinePage(page);
        reviewhomePage = new ReviewhomePage(page);

        await page.goto(process.env.BASE_URL!);

        await checkinPage.moveCheckinPage();

        if(await loginPage.isLoginpage()){
            await loginPage.loginIfNeeded();
        }
    });


    /*
    test('C14681344 체크인페이지-영수증', async ({ page }) => {

        await checkinPage.moveCheckinPage();

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

        await checkinPage.moveCheckinPage();

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

        await checkinPage.moveCheckinPage();

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
    
    
    test('c14681348 체크인페이지 - 최근 방문 내역', async ({ page }) => {

        await checkinPage.moveCheckinPage();

        const popupPromise = page.waitForEvent('popup');

        await checkinPage.clickRecentVisit();

        const reviewPage = await popupPromise;

        await reviewPage.waitForLoadState();

        await expect(reviewPage).toHaveURL(
            /my\/open\/review\?visitId=.+/
        );
    });

    
    test('c14681350 MY > 타임라인 ', async ({ page }) => {

        const popupPromise = page.waitForEvent('popup');
        
        await myhomePage.clickTimelineReviewWrite()

                const reviewPage = await popupPromise;

        await reviewPage.waitForLoadState();

        await expect(reviewPage).toHaveURL(
            /my\/open\/review\?visitId=.+/
        );

    });


    test('c14681351 타임라인 상세', async ({ page }) => {

        const popupPromise = page.waitForEvent('popup');

        await myhomePage.clickAllTimeline(); 

        await page.waitForLoadState();

        await timelinePage.clickReviewWrite();

        const reviewPage = await popupPromise;

        await reviewPage.waitForLoadState();

        await expect(reviewPage).toHaveURL(
            /my\/open\/review\?visitId=.+/
        );

    });
    */

    
    test('c14681352 리뷰 피드', async ({ page }) => {
        
        await myhomePage.clickMyReview();

        await reviewhomePage.checkOnlyHasMedia();

        const popupPromise = page.waitForEvent('popup');

        await reviewhomePage.clickReviewWithOnlyKeywordOrRating();

        await reviewhomePage.clickWriteMoreReview();

        const reviewPage = await popupPromise;
        await reviewPage.waitForLoadState();

        await expect(reviewPage).toHaveURL(
            /my\/(open\/review\?reviewGroupId|review\/edit)\/.+/
        );
    });
    
});