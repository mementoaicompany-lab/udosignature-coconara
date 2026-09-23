# 코코나라 — udosignature-coconara

공개 주소: https://coconara.udosignature.com/
저장소: https://github.com/mementoaicompany-lab/udosignature-coconara
로컬 폴더: /Users/kimjiwon/Documents/Codex/2026-09-20/seo-udosignature-1-https-mementoaicompany-lab/outputs/udosignature-coconara
배포: GitHub Pages, main 브랜치 /docs 폴더. docs/CNAME은 이 브랜드 도메인만 가리킵니다.

## 업데이트

1. src/의 정적 콘텐츠, assets/, site.config.json을 수정합니다.
2. `python3 build.py`로 docs/를 다시 만듭니다.
3. `python3 scripts/check.py`를 실행합니다. 배시간 모듈이 있으면 `node scripts/check-ferry.cjs`도 실행합니다.
4. 소스와 docs/를 함께 main에 커밋·푸시하면 GitHub Pages가 갱신됩니다. 검증 workflow는 읽기 권한만 사용합니다.

## 브랜드별 분리

- 우도 시그니처: udosignature 저장소 → https://udosignature.com/
- 우도여행: udosignature-udo 저장소 → https://udo.udosignature.com/
- 코코나라: udosignature-coconara 저장소 → https://coconara.udosignature.com/
- 달콤아재: udosignature-dalkom-aje 저장소 → https://dalkom-aje.udosignature.com/
- 우도씨앗: udosignature-udopeanut 저장소 → https://udopeanut.udosignature.com/ (오픈 준비중, 공개·검색 허용)
- 우도 키에키: udosignature-udocafe 저장소 → https://udocafe.udosignature.com/ (오픈 준비중, 공개·검색 허용)
- 기존 예약 고객 안내: coconara 저장소 → https://guide.udosignature.com/ (변경하지 않음)
- 기존 Sites 안내: https://coconara-udo-guide.mementoaicompany.chatgpt.site/ (변경하지 않음)

이 프로젝트는 각자의 Git 이력과 원격 저장소를 사용합니다. 다른 브랜드 변경이 자동으로 배포되지 않습니다.
기존 안내 소스 참고 위치: /Users/kimjiwon/Documents/Codex/2026-09-07/new-chat/work/coconara-reset/
기존 Sites 프로젝트: /Users/kimjiwon/Documents/Codex/2026-09-07/new-chat/work/coconara/site/

## SEO와 데이터

페이지별 정적 HTML, title·description·H1·canonical·구조화 데이터·sitemap·robots를 빌드합니다.
사진과 문구는 운영자 제공 기존 자료 및 확인된 매장 정보를 사용합니다. 판매량·검색순위·독점·후기 점수는 새로 주장하지 않습니다.
광범위한 여행 검색은 우도여행, 렌탈 검색은 코코나라, 디저트 검색은 달콤아재로 분리합니다.
이전 상세 경로는 canonical과 즉시 이동 HTML로 새 위치를 안내합니다. GitHub Pages 정적 호스팅이므로 이 이동은 HTTP 301이 아닙니다.
기존 Firebase 관리자 설정·인증정보를 사용하지 않습니다. 배시간은 기존 공개 안내를 GET으로 읽기만 합니다.
분석 이벤트는 브랜드 이름으로 구분되며 현재 외부 분석 서비스·쿠키·방문 카운터를 연결하지 않았습니다.
기존 고객 안내를 열면 해당 안내의 기존 방문 집계가 적용됩니다(운영자 승인).
새 서브도메인은 네이버 서치어드바이저에 별도로 소유확인·사이트맵 제출해야 합니다.

## 2026-09-23 카테고리 정리

- 주 메뉴: 홈 / 스쿠터 / 전기차 / 협력업체 / 우도 여행 / 배시간 / Q&A / 오시는길 / 예약 고객 안내.
- 각 차량 페이지에서 요금·이용조건·반납·취소·환불을 모두 확인합니다. 다른 페이지로 유도하는 반복 카드와 양옆 바로가기를 제거했습니다.
- Q&A는 `content/faq.json`에서 본문과 FAQPage 구조화 데이터를 함께 생성하며 `/faq/`에서만 운영합니다. 오시는길은 `/location/`입니다.
- 협력업체 쿠폰은 해당 매장 설명 바로 아래에서 펼칩니다. 지도 장소 선택도 같은 페이지의 설명을 바꿉니다.
- `/udo/`와 `/udo-ferry/`는 외부 자동 이동을 없앴고, 기존 검색 제외 정책은 유지합니다. 우도여행 브랜드의 검색 역할은 그대로 분리합니다.
- 메인 주행 장면은 원본의 1280:853 비율을 유지합니다. 어긋난 바퀴 복제·회전을 없애고 바람·노면 애니메이션을 사용합니다. 정지 버튼, 화면 밖 일시정지와 기기 동작 줄이기 설정을 존중합니다.
- 기존 예약 고객 안내는 그대로 삽입하며, 원본 coconara 저장소·Firebase 설정·다른 브랜드 저장소는 수정하지 않았습니다.
