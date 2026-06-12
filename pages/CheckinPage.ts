import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class CheckinPage{
    constructor(private page: Page) {}

    async moveCheckinPage(){
        await this.page.getByRole('button', {
            name: '리뷰 쓰기',
        }).click();
    }

    async openReceipt() {
        await this.page.getByRole('button',{
            name: '영수증',
        }).click();
    }

    async openPhotoVideo() {
        await this.page.getByRole('button',{
            name: '사진/영상',
        }).click();
    }

    async openPlaceSearch() {
        await this.page.getByRole('button',{
            name: '장소검색',
        }).click();
    }
    


    // 네앱 랜딩 안내문구 팝업
    async handleCheckinPopup() {

        const popup = this.page.getByText(
            '네이버 앱, 네이버 지도 앱에서 작성 가능해요!'
        );

        // 팝업 문구 확인
        await popup.isVisible();

        // 네앱 랜딩 버튼 클릭
        await this.page.getByRole('button', {
            name: '네이버 앱 열기',
        }).click();

        // 닫기 버튼 클릭
        await this.page.getByText('닫기checkin.naveropenpoppupno').click({
            force: true
        });

    }
};