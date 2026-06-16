import { Page } from "@playwright/test";

export class MyhomePage{
    static clickAllTimeline() {
        throw new Error('Method not implemented.');
    }
    constructor(private page: Page) {}

    // MY > 내 리뷰
    async clickMyReview() {
        await this.page
            .getByRole('button', { name: '내 리뷰' })
            .click();
    }


    // 타임라인 항목 리스트 중 첫 번째 아이템의 리뷰 쓰기 버튼 클릭
    async clickTimelineReviewWrite(){

        await this.page
            .locator('button._PO18o:visible')
            .first()
            .click();

    }

    // MY > 타임라인 
    async clickAllTimeline() {

        await this.page
            .locator('button.ocs_V7')
            .click();
    }

};