# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: entry\entry.spec.ts >> 리뷰쓰기 진입 테스트 >> c14681352 리뷰 피드
- Location: tests\entry\entry.spec.ts:149:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: '닫기' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "본문 바로가기" [ref=e4] [cursor=pointer]:
      - /url: "#container"
    - banner [ref=e5]:
      - generic [ref=e6]:
        - button "뒤로가기" [ref=e7] [cursor=pointer]:
          - generic [ref=e9]: 뒤로가기
        - listbox "언어선택" [ref=e11] [cursor=pointer]: English
    - generic [ref=e13]:
      - link "네이버" [ref=e15] [cursor=pointer]:
        - /url: https://m.naver.com
        - heading "네이버" [level=1] [ref=e16]:
          - generic [ref=e17]: 네이버
      - generic [ref=e19]:
        - generic [ref=e20]:
          - generic [ref=e21]:
            - button "NAVER App auto Sign in" [ref=e22] [cursor=pointer]:
              - generic [ref=e23]: NAVER App auto Sign in
            - generic [ref=e25]: Or
            - generic [ref=e27]:
              - generic [ref=e28]:
                - textbox "아이디 또는 전화번호" [ref=e29] [cursor=pointer]: nvqa_place18
                - generic: ID or Phone number
              - generic [ref=e30]:
                - textbox "비밀번호" [ref=e31] [cursor=pointer]: Qalab!23
                - generic: Password
          - button "Sign in 흐리게표시됨" [active] [ref=e32] [cursor=pointer]:
            - text: Sign in
            - generic [ref=e33]: 흐리게표시됨
        - list [ref=e34]:
          - listitem [ref=e35]:
            - generic [ref=e36]:
              - text: Find
              - link "ID" [ref=e37] [cursor=pointer]:
                - /url: https://nid.naver.com/user2/api/route?m=routeIdInquiry&lang=en_US
              - text: or
              - link "Password" [ref=e38] [cursor=pointer]:
                - /url: https://nid.naver.com/user2/api/route?m=routePwInquiry&lang=en_US
          - listitem [ref=e39]:
            - link "Sign up" [ref=e40] [cursor=pointer]:
              - /url: https://nid.naver.com/user2/V2Join?m=agree&lang=en_US&realname=Y
        - list [ref=e42]:
          - listitem [ref=e43]:
            - link "Apple" [ref=e44] [cursor=pointer]:
              - /url: /oauth/global/initSNS?idp_cd=apple&locale=en_US&svctype=262144&postDataKey=&url=https%3A%2F%2Fm.place.naver.com%2Fmy&confirm.login=false
              - generic [ref=e45]: Apple
          - listitem [ref=e46]:
            - link "Google" [ref=e47] [cursor=pointer]:
              - /url: /oauth/global/initSNS?idp_cd=google&locale=en_US&svctype=262144&postDataKey=&url=https%3A%2F%2Fm.place.naver.com%2Fmy&confirm.login=false
              - generic [ref=e48]: Google
          - listitem [ref=e49]:
            - link "LINE" [ref=e50] [cursor=pointer]:
              - /url: /oauth/global/initSNS?idp_cd=line&locale=en_US&svctype=262144&postDataKey=&url=https%3A%2F%2Fm.place.naver.com%2Fmy&confirm.login=false
              - generic [ref=e51]: LINE
    - contentinfo [ref=e52]:
      - generic [ref=e53]:
        - list [ref=e54]:
          - listitem [ref=e55]:
            - link "Chatbot" [ref=e56] [cursor=pointer]:
              - /url: https://nca.naver.com/chat/account/view
          - listitem [ref=e57]:
            - link "Help" [ref=e58] [cursor=pointer]:
              - /url: https://help.naver.com/service/5640/category/bookmark?lang=ko
        - link "네이버" [ref=e60] [cursor=pointer]:
          - /url: https://www.navercorp.com/
          - generic [ref=e62]: 네이버
  - iframe
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | import { USER } from '../test-data/user';
  3  | 
  4  | export class LoginPage{
  5  |     constructor(private page: Page) {}
  6  | 
  7  |     async closePopup() {
> 8  |         await this.page.getByRole('button', {name: '닫기'}).click();
     |                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  9  |     }
  10 | 
  11 |     async moveLoginPage(){
  12 |         await this.page.getByRole('button',{
  13 |             name: '로그인해주세요',
  14 |         }).click();
  15 |     }
  16 | 
  17 |     async login(id: string, pw:string) {
  18 |         await this.page.getByRole('textbox', {
  19 |                 name: '아이디 또는 전화번호',
  20 |             })
  21 |             .fill(id);
  22 | 
  23 |         await this.page.getByRole('textbox', {
  24 |                 name: '비밀번호',
  25 |             }).fill(pw);
  26 | 
  27 |         await this.page.locator('#submit_btn').click();
  28 |     }
  29 | 
  30 |     async isLoginpage() {
  31 |         return this.page.url().includes('nidlogin.login');
  32 |     }
  33 | 
  34 |     async loginIfNeeded(){
  35 |         if ((await this.isLoginpage())) {
  36 |             await this.login(USER.id, USER.pw);
  37 |             await this.closePopup();
  38 |         }
  39 |     }
  40 | 
  41 | 
  42 | 
  43 | };
```