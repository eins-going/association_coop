# 한국조합경영학회 홈페이지

빌드 도구나 프레임워크 없이 순수 HTML/CSS/JS로 구성된 다중 페이지 정적 사이트입니다. 홈은 전체 사업을 소개하는 허브이며, 운영성 콘텐츠는 독립 페이지로 관리합니다.

## 구조

```
association_coop/
├── index.html            # 홈 · 전체 사업 개요
├── about.html            # 학회소개 · 정관 · 임원 · 위원회
├── events.html           # 학술행사
├── journal.html          # 학술지 조합경영연구
├── newsletter.html       # 소식지 조합과 경영
├── college.html          # 한국조합경영대학교 · KSMO MBA
├── certification.html    # 교육·자격·인증
├── awards.html           # 대한민국 조합경영대상
├── membership.html       # 입회 안내
├── bylaws.html           # 학회 정관 전문
├── assets/
│   ├── css/              # 공통 스타일시트
│   ├── js/               # 공통 인터랙션
│   ├── images/
│   │   ├── brand/        # 로고·파비콘
│   │   ├── awards/       # 경영대상 이미지
│   │   ├── college/      # 교육 페이지 이미지
│   │   ├── events/       # 학술행사 포스터
│   │   ├── journal/      # 학술지 표지
│   │   ├── newsletter/   # 소식지 기사 이미지
│   │   └── people/       # 회장·교수진 사진
│   └── sources/
│       └── events/       # 행사 포스터 편집 원본 SVG
├── robots.txt            # 검색엔진 크롤링 허용 + sitemap 위치
├── sitemap.xml           # 전체 공개 페이지 사이트맵
└── vercel.json           # 정적 사이트 배포 설정
```

빌드 스텝이 없으므로 `package.json`/`node_modules`가 필요 없습니다.

## Vercel 배포

이 사이트는 **순수 HTML/CSS/JS 정적 사이트**이므로 Vercel 무료 Hobby 플랜에서 가장 효율적으로 배포할 수 있습니다. 별도 빌드 도구나 패키지 설치 없이 그대로 업로드하세요.

### 방법 1 — 대시보드에서 Git 연동 (권장)
1. 이 저장소를 GitHub에 푸시합니다.
2. [vercel.com](https://vercel.com) → **Add New Project** → 저장소 선택
3. Framework Preset: **Other**
4. Build Command: 비워둠
5. Output Directory: 비워둠
6. Deploy 클릭 — 완료

자동 배포는 `main` 브랜치에 푸시할 때마다 실행됩니다.

### 방법 2 — CLI
```bash
npm i -g vercel
vercel        # 프리뷰 배포
vercel --prod # 프로덕션 배포
```

### Vercel 무료 플랜에 최적화된 설정
- `vercel.json`의 `cleanUrls`와 `trailingSlash` 설정으로 URL을 단순화
- 로고·파비콘·공통 CSS/JS에 정적 캐시 헤더 적용
- 빌드 과정이 없으므로 `package.json`/`node_modules`가 필요 없음

## 배포 후 할 일
- `robots.txt`, `sitemap.xml`의 `YOUR-DOMAIN.vercel.app`을 실제 배포 도메인으로 변경
- 필요 시 Vercel 프로젝트 설정에서 무료 `*.vercel.app` 서브도메인 또는 커스텀 도메인 연결
