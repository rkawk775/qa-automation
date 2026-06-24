## 📲 Qa-automation : 자동화

### 1. 프로젝트 소개

Playwright 기반 Web UI 자동화 테스트 프로젝트입니다.

반복적인 기능 검증을 자동화하고,
GitHub Actions 기반 CI 환경에서 테스트 실행 및
Allure Report Dashboard를 통해 결과를 관리하는 것을 목표로 구현했습니다.
<br>

### 2. 기술 스택

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Allure Report
- GitHub Pages
<br>

### 3. 자동화 대상
<details>
  <summary>1. E2E Test Automation</summary>
  - 사용자 시나리오 기반 테스트 자동화
  - Page Object Model 구조 적용
  - Popup 페이지 이동 검증
</details>

<details>
  <summary>2. Test Result Management </summary>
  테스트 실행 결과:
  
  - PASS / FAIL 저장
  - 실패 Screenshot 저장
  - Allure Report 생성
</details>

<details>
  <summary>3. CI/CD Pipeline </summary>
  Git Push 발생 시:
    
  GitHub Push
  ↓
  GitHub Actions 실행
  ↓
  Playwright Test 실행
  ↓
  Allure Report 생성
  ↓
  GitHub Pages 배포
</details>
<br>

### 4. 프로젝트 구조
qa-automation

├── tests
│ ├── entry
│ │ └── entry.spec.ts
│
├── pages
│ └── CheckinPage.ts
│
├── .github
│ └── workflows
│ └── playwright.yml
│
└── playwright.config.ts

<br>

### 5. 테스트 실행 방법
### 6. CI/CD 흐름
### 7. 테스트 결과 Dashboard
테스트 결과는 GitHub Pages를 통해 확인 가능합니다.
Allure Dashboard를 사용하였습니다.

Dashboard: https://rkawk775.github.io/qa-automation/
<br>

### 8. 시연 영상
### 9. 개선 방향
