import { Page } from '@playwright/test';
import { USER } from '../test-data/user';

export class LoginPage{
    constructor(private page: Page) {}

    async closePopup() {
        await this.page.getByRole('button', {name: '닫기'}).click();
    }

    async moveLoginPage(){
        await this.page.getByRole('button',{
            name: '로그인해주세요',
        }).click();
    }

    async login(id: string, pw:string) {
        await this.page.getByRole('textbox', {
                name: '아이디 또는 전화번호',
            })
            .fill(id);

        await this.page.getByRole('textbox', {
                name: '비밀번호',
            }).fill(pw);

        await this.page.locator('#submit_btn').click();
    }

    async isLoginpage() {
        return this.page.url().includes('nidlogin.login');
    }

    async loginIfNeeded(){
        if ((await this.isLoginpage())) {
            await this.login(USER.id, USER.pw);
            await this.closePopup();
        }
    }



};