# 팬레터 개인 프로젝트

react, react-router-dom, redux, styled-components, uuid 패키지

## 페이지별 컴포넌트 기능

- home
- - MemberCard 멤버별 선택할 수 있는 버튼
- - FanLetterForm 팬 레터 입력하는 폼
- - FanLetterList 멤버별 팬레터를 출력하는 리스트
- detail:id
- - FanLetterDetail id에 해당하는 팬 레터 출력
- - FanLetterForm 팬 레터 수정할 때 사용.

## 진행 순서

- [x] 1. 프로젝트 셋업
- [x] 2. props-drilling 브랜치 생성 및 이동
- [x] 3. Router 셋업 (react-router-dom을 이용하여 홈화면과 상세화면에 대한 라우터 설정)
- [x] 4. 전역 스타일링 적용 (reset.css box-sizing 적용)
- [x] 5. 홈 화면 UI, 배너 헤더 파트 UI 구현 (styled-components의 조건부 스타일링 적용)
- [x] 6. 홈 화면 UI, Dummy Data 를 이용한 리스트 UI 구현 (한 줄 까지 표현, 한 줄 이상 ...)
- [x] 7. 팬레터 입력창 작성하여 팬레터 등록 기능 구현 (닉네임, 내용, 팬레터 보낼 아티스트, 기본 아바타 이미지 적용, 유효성검사, 최대 글자수 제한)
- [x] 8. 홈화면의 팬레터 클릭 시 상세화면으로 이동 구현 (id값으로 이동)
- [x] 9. 상세화면 UI 구현 (팬레터 내용 전체를 볼 수 있는 UI, 수정 삭제 버튼)
- [x] 10. 팬레터 삭제 기능 구현 (확인받고 삭제처리, 홈화면으로 페이지 이동, 팬레터가 없으면 남겨진 팬레터 없다는 문구 표시)
- [x] 11. 팬레터 수정 기능 구현 (수정 가능한 textarea, 기존 내용 입력된 상태, 수정사항없으면 아무런 수정사항이 없다고 알림)
- [x] 12. context 브랜치 생성 및 이동
- [x] 13. props-drilling으로 불편하게 관리하던 state를 context api로 리팩터링
- [x] 14. redux로 브랜치 생성 및 이동
- [x] 15. context로 관리중이던 모든 것을 redux로 리팩터링
- [ ] 16. 15단계까지 모두 완료하셨다면 선택구현사항들에 도전해 보시면 되겠습니다!

## 선택 기능

- [ ] 홈 화면의 아바타 이미지와 버튼과 동일한 공용 컴포넌트 적용
- [ ] confirm, alert 대신 직접 구현한 모달 적용하기
- [ ] 만능 버튼 구현하기
- [x] 새로고침 UI 유지 로컬스토리지사용 (localstorage 브랜치에만)
- [ ] 검색 기능 구현 query string ?search
