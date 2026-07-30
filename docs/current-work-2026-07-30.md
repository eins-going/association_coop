# 현재 작업 기록

작성일: 2026-07-30

## 작업 범위

현재 작업은 `journal.html`의 학술지 논문 목록 체계 정비, `book/research-agenda` 기반 논문 목록 반영, 논문 HTML 생성, 그리고 `academic-paper-oa` Codex 스킬 개선을 중심으로 진행되었다.

## 주요 변경 파일

- `journal.html`
  - Vol. 1부터 Vol. 4까지 논문 목록을 `book/research-agenda/vol-01.md` ~ `vol-04.md` 기준으로 반영했다.
  - 각 Vol.은 8편 구성으로 정리했다.
  - Number 표기는 사용하지 않고 Volume만 사용한다.
  - 논문 코드는 `KSMO-DOI-202601001` 형식으로 정리했다.
  - Vol. 1의 1번, 2번 논문에 `원문 보기` 버튼을 연결했다.

- `assets/css/site.css`
  - `journal.html`의 논문 목록 구분선과 메타 영역 스타일을 조정했다.
  - 논문 목록 상자의 상단·하단 선 균형을 맞췄다.
  - `paper-meta` 영역에 불필요한 선이 보이지 않도록 처리했다.
  - 코드 색상과 굵기를 낮춰 화면에서 과하게 보이지 않도록 했다.

- `assets/js/site.js`
  - `원문 보기` 버튼 클릭 시 논문 HTML을 같은 페이지 안에서 펼쳐 보이도록 iframe 기반 토글 기능을 추가했다.

- `papers/vol-01/ksmo-doi-202601001.html`
  - Vol. 1 1번 논문 작성.
  - 제목: `조합경영학은 독자적 학문인가: 다섯 구조 축을 통한 정체성 논증`
  - 저자: 김진용
  - 소속: 한국조합경영대학교
  - 본문 길이: 약 원고지 120매
  - 참고문헌: 26개
  - `journal.html`의 `KSMO-DOI-202601001` 원문 보기와 연결됨.

- `papers/vol-01/ksmo-doi-202601002.html`
  - Vol. 1 2번 논문 작성.
  - 제목: `소유·의결·통제·위험부담·성과배분 다섯 축의 조작적 정의와 측정모형 개발`
  - 저자: 조승현, 김진용
  - 소속: 한국조합경영대학교
  - 본문 길이: 원고지 100매 수준
  - 참고문헌: 25개
  - `journal.html`의 `KSMO-DOI-202601002` 원문 보기와 연결됨.

- `C:\Users\my\.codex\skills\academic-paper-oa\SKILL.md`
  - 사회과학 논문 분량 기준을 강화했다.
  - 한국어 정식 논문 기본 분량을 원고지 100~150매, 약 20,000~30,000자로 명시했다.
  - 정식 사회과학 논문 참고문헌 기준을 최소 25개로 강화했다.
  - 참고문헌이 부족하면 정식 논문이 아니라 연구노트 또는 축약 초안으로 표시하도록 했다.
  - 한국조합경영대학교는 학과명을 임의로 붙이지 않고 기관명만 쓰도록 규칙을 추가했다.

## 현재 논문 연결 상태

| Vol. | 코드 | 제목 | 원문 HTML |
|---|---|---|---|
| Vol. 1 | KSMO-DOI-202601001 | 조합경영학은 독자적 학문인가: 다섯 구조 축을 통한 정체성 논증 | `papers/vol-01/ksmo-doi-202601001.html` |
| Vol. 1 | KSMO-DOI-202601002 | 소유·의결·통제·위험부담·성과배분 다섯 축의 조작적 정의와 측정모형 개발 | `papers/vol-01/ksmo-doi-202601002.html` |

Vol. 1의 3번 이후 논문과 Vol. 2~4 논문은 목록에는 반영되어 있으나 아직 원문 HTML은 생성되지 않았다.

## 원천 자료 구조

`book/research-agenda`를 학술지 논문 목록의 원천 관리 문서로 확인했다.

- `00-overview.md`: 전체 연구기획, 연구자 명단, 배정 원칙, Vol.-챕터 매핑
- `vol-01.md` ~ `vol-13.md`: 각 Vol별 논문 목록
- Vol. 1~12는 각 8편, Vol. 13은 4편으로 구성되어 총 100개 연구주제 체계이다.

## 결정된 관리 원칙

- `journal.html`은 화면 표시용 목록이다.
- 논문 목록의 원천은 `book/research-agenda/vol-XX.md`로 본다.
- 논문 HTML은 `papers/vol-XX/ksmo-doi-YYYYVVNNN.html` 형식으로 배치한다.
- 원문은 새 창이 아니라 `journal.html` 안에서 펼쳐 보는 방식으로 제공한다.
- 전자저널이므로 페이지 범위(`pp. 1-24`)는 표시하지 않는다.
- 논문 코드는 왼쪽, `원문 보기`는 오른쪽에 배치한다.
- 코드 표기는 `KSMO-DOI-202601001` 형식을 사용한다.
- 한국조합경영대학교 소속은 학과명 없이 기관명만 표기한다.

## 남은 작업

- Vol. 1의 3번 이후 논문 HTML 생성
- Vol. 2~4 논문 HTML 생성
- 기존 `papers/vol-01/paper-nonghyup-member-rights.html`의 사용 여부 정리
- `papers/vol-01/README.md`, `papers/vol-02/README.md`를 현재 코드 체계에 맞춰 갱신
- `docs/journal-management.md`에 실제 운영 규칙과 파일명 규칙 반영
- `book/research-agenda`와 `journal.html`을 자동 또는 반자동으로 동기화할 수 있는 관리 방식 검토

## 주의 사항

- 현재 git 상태에는 기존에 존재하던 것으로 보이는 `book/` untracked 디렉터리가 포함되어 있다.
- 작업 중 삭제하거나 되돌리지 않았다.
- 향후 커밋 전에는 변경 파일과 untracked 파일의 의도를 확인해야 한다.
