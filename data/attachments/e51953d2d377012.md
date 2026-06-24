# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: entry\entry.spec.ts >> 리뷰쓰기 진입 테스트 >> c14681347 체크인페이지 - 장소검색
- Location: tests\entry\entry.spec.ts:74:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: '닫기' })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```