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

### 방법 1 — 대시보드에서 Git 연동 (권장)
1. 이 저장소를 GitHub에 푸시합니다.
2. [vercel.com](https://vercel.com) → **Add New Project** → 저장소 선택
3. Framework Preset: **Other** (자동 감지되며 빌드 커맨드 없이 그대로 배포)
4. Deploy 클릭 — 완료

이후 `main` 브랜치에 푸시할 때마다 자동으로 재배포됩니다(Vercel Hobby 플랜 무료).

### 방법 2 — CLI
```bash
npm i -g vercel
vercel        # 프리뷰 배포
vercel --prod # 프로덕션 배포
```

## 배포 후 할 일
- `robots.txt`, `sitemap.xml`의 `YOUR-DOMAIN.vercel.app`을 실제 배포 도메인으로 변경
- 필요 시 Vercel 프로젝트 설정에서 커스텀 도메인 연결(무료 `*.vercel.app` 서브도메인도 그대로 사용 가능)
