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

- 주 메뉴: 홈 / 스쿠터 / 전기차 / 협력업체 / 여행·이용 안내(우도 여행·배시간·Q&A·취소·환불) / 오시는길 / 예약 고객 안내.
- 각 차량 페이지에서 요금·이용조건·반납 기준을 확인하고, 취소·환불 규정은 별도 탭에서 확인합니다. 다른 페이지로 유도하는 반복 카드와 양옆 바로가기를 제거했습니다.
- Q&A는 `content/faq.json`에서 본문과 FAQPage 구조화 데이터를 함께 생성하며 `/faq/`에서만 운영합니다. 오시는길은 `/location/`입니다.
- 협력업체 쿠폰은 해당 매장 설명 바로 아래에서 펼칩니다. 지도 장소 선택도 같은 페이지의 설명을 바꿉니다.
- `/udo/`와 `/udo-ferry/`는 외부 자동 이동을 없앴고, 기존 검색 제외 정책은 유지합니다. 우도여행 브랜드의 검색 역할은 그대로 분리합니다.
- 메인 주행 장면은 원본의 1280:853 비율을 유지합니다. 어긋난 바퀴 복제·회전을 없애고 바람 애니메이션을 사용합니다. 정지 버튼, 화면 밖 일시정지와 기기 동작 줄이기 설정을 존중합니다.
- 기존 예약 고객 안내는 그대로 삽입하며, 원본 coconara 저장소·Firebase 설정·다른 브랜드 저장소는 수정하지 않았습니다.


## 2026-09-23 안내 간소화

- 예약 고객 안내(`/customer-guide/`)는 메뉴 아래의 남은 화면 전체에 원본 안내를 삽입합니다. 설명 사이드바·외부 열기 도구·하단 예약 배너를 제거했습니다. 원본 고객 안내 저장소는 수정하지 않았습니다.
- 취소·환불 규정은 `/refund/` 독립 탭으로 이동했습니다. 홈의 중복 이용조건 및 스쿠터·전기차·우도 여행의 지정된 반복 설명 구간을 제거했습니다. 차량별 조건은 스쿠터·전기차 탭에 유지합니다.
- 배시간은 2026-09-23 원본 안내의 공개 스크립트와 비교했습니다. 당일 공지가 없으면 월별 기본 시간표로 다음 30분 단위 출항과 남은 분을 계산하며, 기본 시간표임을 명시합니다. 30분 추가 출항 여부는 항구에서 결정합니다. 당일 결항·단축 공지를 우선하고, 잠시 통신이 끊겨도 받은 당일 공지를 유지하며 한국시간 자정에 만료합니다.
- 배시간 데이터는 기존 공개 endpoint에 GET 요청만 합니다. 관리자 인증·쓰기·방문자 집계 코드는 가져오지 않았습니다. 고객 안내 iframe의 원본 방문 집계는 사용자의 기존 허용 범위입니다.
- 주행 장면은 하나의 바다 배경을 부드럽게 이동하며, 반복 이미지 이음매와 별도로 붙인 도로 띠를 제거했습니다. 기존 모션 정지·움직임 줄이기 지원을 유지합니다.
- 검증: 정적 HTML 13개, 사이트맵 7개, 내부 참조 304개; 배시간·월 경계·결항·통신 실패 관련 43개 검사. PC/모바일 화면과 원본 안내 iframe은 브라우저에서 별도 확인합니다.


## 2026-09-23 접이식 안내 메뉴와 브랜드 서체

- ‘여행·이용 안내’의 기본 상태는 닫힘입니다. 우도 여행·배시간·Q&A·취소·환불 링크는 정적 HTML에 유지해 검색과 직접 접속이 가능합니다. 네이티브 details/summary를 사용하며, 바깥 클릭·Escape·포커스 이동 시 닫힙니다. 뒤로 돌아온 페이지에서도 기본 접힘 상태를 복원합니다.
- 1280px 이상, 높이 650px 이상 PC 화면 양옆에 네이버 예약과 고객 안내 바로가기를 배치합니다. 모바일·좁은 화면은 기존 상단 메뉴와 하단 예약 CTA를 사용합니다. 전체 화면 고객 안내에는 사이드 장식을 넣지 않습니다.
- 스쿠터·전기차 요금표 아래의 3단계 예약 설명은 삭제했습니다. 요금·이용시간·할인 조건·예약 버튼은 유지합니다.
- 로고는 사용자 제공 분홍색 굵은 기울임 글자 참고에 맞췄고, 스쿠터·바다 모티프의 SVG 심볼과 파비콘을 추가했습니다. 기존 캐릭터 자료를 양옆 장식에 재사용했습니다.
- 제목 서체: Black Han Sans. 원본 출처 https://github.com/google/fonts/tree/main/ofl/blackhansans . SIL OFL 1.1 사본을 `assets/fonts/OFL-BlackHanSans.txt`에 포함합니다. 원본 TTF를 전체 글리프 WOFF2(약 186KiB)로 변환해 자체 호스팅하며 외부 폰트 요청은 없습니다. 본문은 기존 시스템 서체를 유지합니다.


## 2026-09-23 검색 최적화

- `site.config.json`의 공개 소유확인 태그는 네이버·Google 검색 관리에 사용합니다. 비밀번호나 API 인증정보가 아닙니다.
- `seo.content.json`에서 관리하는 Q&A는 정적 HTML과 구조화 데이터에 함께 반영합니다. 준비중 브랜드에는 실제 운영 매장·판매 상품 정보를 만들지 않습니다.
- `python3 build.py` → `python3 scripts/check.py`로 검수합니다. `docs/`는 생성물이며 원본 콘텐츠를 수정한 뒤 다시 빌드해야 합니다.
- 배포 후 `python3 scripts/indexnow.py --submit`으로 이 프로젝트의 검색 허용 URL만 네이버에 알릴 수 있습니다. 공개 페이지가 로컬 빌드와 동일한지 먼저 검사하며 수집·상위노출을 보장하지 않습니다.
- Google Search Console은 각 사이트의 sitemap.xml을 제출합니다. 일반 웹페이지에 Google Indexing API를 사용하지 않습니다.
- 키워드 조사 기준표는 `SEO-KEYWORDS.md`입니다. 같은 의도의 예약·대여·가격·렌트 페이지를 복제하지 않습니다.
