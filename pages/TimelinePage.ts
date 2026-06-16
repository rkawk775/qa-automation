import { Page } from "@playwright/test";

export class TimelinePage{
    constructor(private page: Page) {}

    // 타임라인 > 리뷰 쓰기 버튼 클릭
    async clickReviewWrite() {
        await this.page
        .locator('button._PO18o:visible')
        .first()
        .click();
    }
};