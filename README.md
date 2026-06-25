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
GitHub Actions를 활용하여 코드 변경 발생 시 자동으로 테스트를 실행하고, <br>
테스트 결과를 Allure Report로 생성하여 GitHub Pages Dashboard에 배포하는 CI/CD 환경을 구성하였습니다.


### Workflow 실행 조건

`main` 브랜치 기준으로 Push 또는 Pull Request 발생 시 GitHub Actions Workflow가 실행됩니다.


### CI/CD Process

```text
Git Push / Pull Request

        ↓

GitHub Actions Trigger

        ↓

Node.js 환경 설정 및 Dependency 설치

        ↓

Playwright Browser 설치

        ↓

Playwright E2E Test 실행

        ↓

Test Result 생성
(PASS / FAIL, Screenshot)

        ↓

Allure Report 생성

        ↓

GitHub Pages Dashboard 배포

```

### GitHub Actions Workflow

Workflow 파일: .github/workflows/playwright.yml  <br>
테스트 실행 결과는 Allure Report를 통해 관리합니다.

<table width="250%">
<tr>
<th width="50%" style="white-space: nowrap;">실행 단계</th>
<th width="50%" style="white-space: nowrap;">관리 항목</th>
</tr>

<tr>
<td valign="top" style="white-space: nowrap;">

1. Repository Checkout<br>
2. Node.js 환경 구성<br>
3. npm dependency 설치<br>
4. Playwright Browser 설치<br>
5. Test 실행<br>
6. Allure Report 생성<br>
7. GitHub Pages 배포

</td>

<td valign="top" style="white-space: nowrap;">

1. Test Case 실행 결과<br>
2. PASS / FAIL 상태<br>
3. 실패 Screenshot<br>
4. 테스트 실행 이력

</td>
</tr>
</table>


## 6. 테스트 결과 Dashboard
배포된 Allure Report는 GitHub Pages를 통해 확인 가능합니다.

Dashboard: https://rkawk775.github.io/qa-automation/
<br>

## 7. 시연 영상
## 8. 개선 방향
