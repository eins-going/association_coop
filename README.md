# 한국조합경영학회 홈페이지

빌드 도구나 프레임워크 없이 순수 HTML/CSS/JS 한 페이지로 구성된 정적 사이트입니다.

## 구조

```
coop/
├── index.html      # 전체 페이지 (CSS/JS 인라인 포함)
├── favicon.svg      # 파비콘
├── robots.txt        # 검색엔진 크롤링 허용 + sitemap 위치
├── sitemap.xml        # 사이트맵 (1페이지)
└── vercel.json         # 정적 사이트 배포 설정 (clean URL, 캐시 헤더)
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
- `vercel.json`에 `@vercel/static` 빌드를 명시하여 정적 파일만 배포
- `cleanUrls`와 `trailingSlash`를 사용해 URL을 단순화
- `favicon.svg`는 장기 캐시로 설정
- 빌드 과정이 없으므로 `package.json`/`node_modules`가 필요 없음

## 배포 후 할 일
- `robots.txt`, `sitemap.xml`의 `YOUR-DOMAIN.vercel.app`을 실제 배포 도메인으로 변경
- 필요 시 Vercel 프로젝트 설정에서 무료 `*.vercel.app` 서브도메인 또는 커스텀 도메인 연결
