### 📲 Qa-automation : 자동화

---

### 1. 프로젝트 소개

본 프로젝트는 웹 서비스의 반복적인 QA 기능 검증을 자동화하기 위한
Playwright 기반 **Mobile Web UI 자동화 테스트 프로젝트** 입니다.

주요 사용자 시나리오(리뷰 작성/수정/관리)를 E2E 테스트로 자동화하였으며, <br>
GitHub Actions 기반 CI 환경과 Allure Report Dashboard를 구축하여
테스트 실행 및 결과 관리를 자동화하였습니다.
<br>
<br>

## 2. 기술 스택

<img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"> _ Test Automation

<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white"> _ CI/CD

<img src="https://img.shields.io/badge/Allure_Report-FF4B4B?style=for-the-badge&logo=allure&logoColor=white"><img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white"> _ Test Report & Dashboard
<br>
<br>

## 3. 자동화 대상
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
  <summary>3. CI/CD Pipeline</summary>

  <br>

  Git Push 발생 시:

  <pre>
  GitHub Push
      ↓
  GitHub Actions 실행
      ↓
  Playwright Test 실행
      ↓
  Allure Report 생성
      ↓
  GitHub Pages 배포
  </pre>

</details>
<br>

## 4. 프로젝트 구조

```text
qa-automation
│
├── tests
│   └── entry
│       └── entry.spec.ts          # E2E Test Case
│
├── pages
│   └── CheckinPage.ts              # Page Object Model
│
├── .github
│   └── workflows
│       └── playwright.yml          # GitHub Actions CI/CD
│
├── playwright.config.ts            # Playwright Configuration
│
├── package.json                    # Project Dependency
│
└── README.md
```

<br>

## 5. CI/CD 흐름
## 6. 테스트 결과 Dashboard
테스트 결과는 GitHub Pages를 통해 확인 가능합니다.
Allure Dashboard를 사용하였습니다.

Dashboard: https://rkawk775.github.io/qa-automation/
<br>

## 7. 시연 영상
## 8. 개선 방향
