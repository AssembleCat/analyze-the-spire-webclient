# Analyze The Spire Webclient

Slay the Spire 게임의 데이터를 분석하고 시각화하는 웹 애플리케이션입니다.

## 기술 스택

- **Frontend Framework**: Next.js 15.0.4
- **UI Library**: React 19.0.0
- **Styling**: TailwindCSS 3.4.1
- **Language**: TypeScript 5
- **Development Tools**: ESLint, PostCSS

## 주요 기능

- 홈 페이지 (`/app/(home)`)
- 포스트 관리 (`/app/post`)
- 통계 분석 (`/app/stats`)
- 티어 시스템 (`/app/tier`)

## 프로젝트 구조

```
├── app/                # Next.js 페이지 및 라우팅
├── components/         # 재사용 가능한 React 컴포넌트
├── public/            # 정적 파일
├── type/             # TypeScript 타입 정의
└── styles/           # 전역 스타일 (globals.css)
```

## 시작하기

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 프로덕션 빌드:
```bash
npm run build
npm start
```

## 개발 환경 설정

- Node.js
- npm 또는 yarn
- Git