import { Page } from "@playwright/test";

export class ReviewhomePage {
    constructor(private page: Page) {}

    // 사진/영상 리뷰만 체크박스 - 체크되어 있으면 해제
    async checkOnlyHasMedia() {
        const checkbox = this.page.locator('input#onlyHasMedia');
        const isChecked = await checkbox.isChecked();
        if (isChecked) {
            await this.page.locator('label[for="onlyHasMedia"]').click();
        }
    }

// 키워드만 있거나 별점만 있는 리뷰 버튼 클릭 (이미지 없는 것)
async clickReviewWithOnlyKeywordOrRating() {
    
    // 케이스 1: 키워드/이모지는 있지만 이미지는 없는 버튼
    const keywordOnlyButton = this.page
        .locator('button.qXYuuA')
        .filter({
            has: this.page.locator('.QoSwds, .V1coQ2'),
        })
        .filter({
            hasNot: this.page.locator('img'),
        })
        .first();

    // 케이스 2: 별점만 있고 이미지/키워드 없는 버튼
    const ratingOnlyButton = this.page
        .locator('button.qXYuuA')
        .filter({
            has: this.page.locator('._KVEL1'),
        })
        .filter({
            hasNot: this.page.locator('img, .QoSwds, .V1coQ2'),
        })
        .first();

        // 키워드 버튼 먼저 시도, 없으면 별점 버튼 클릭
        if (await keywordOnlyButton.count() > 0) {
            await keywordOnlyButton.click();
        } else {
            await ratingOnlyButton.click();
        }

        
    }

    // 클릭한 리뷰 바로 다음에 나타나는 JBeO5j 버튼 클릭
    async clickWriteMoreReview() {
        // 리뷰 클릭 후 버튼이 나타날 때까지 대기 후 클릭
        await this.page
            .locator('button.JBeO5j')
            .first()  // 페이지에서 가장 먼저 보이는 것 = 방금 클릭한 리뷰의 버튼
            .click();
    }


};