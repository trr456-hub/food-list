# 배포URL

https://trr456-hub.github.io/food-list/

# 사용API

http://openapi.foodsafetykorea.go.kr/api/sample/COOKRCP01/xml/1/5

# food-list (식단 랜덤 추출 웹 어플리케이션)

### 프로젝트 참여 인원: 1명

### 사용 기술 스택: JavaScript, React, CSS, Firebase (Authentication, Database)

### 프로젝트 개요

- 'food-list'는 식품안전나라 오픈API를 활용하여 사용자가 버튼을 클릭하여 식단을 랜덤으로 추출하고, 관리할 수 있는 웹 어플리케이션입니다.
- 사용자는 반찬, 일품, 후식, 밥, 국&찌개 중에서 선택하며, 선택된 메뉴는 이미지와 이름으로 표시됩니다.
- 이미지를 클릭하면 해당 메뉴의 영양 정보와 레시피를 확인할 수 있습니다. Firebase를 통해 구축된 데이터베이스를 사용하여 사용자는 저장된 페이지에서 메뉴를 관리하고 레시피를 확인할 수 있습니다.

# 구동화면

### 1. 로그인

- 로그인을 통해 사용자 구분
  <img src="https://github.com/trr456-hub/food-list/assets/108771927/f27b70a1-7ab3-46ec-9f79-b80a114341dc" width="100%">

### 2. 회원가입

- 이메일 회원가입 기능과 소셜로그인 구현
  <img src="https://github.com/trr456-hub/food-list/assets/108771927/d3faca9b-b557-40a9-8dd1-fefb331f5149" width="100%">

### 3. 메인페이지

- 반찬, 일품, 후식, 밥, 국&찌개 로 구성되있는 버튼
- 전체 기록하기 버튼
- 버튼들을 클릭하면 메뉴가 랜덤으로 추출 됩니다.
  <img src="https://github.com/trr456-hub/food-list/assets/108771927/3fa0a790-30a7-467d-9929-eee70f147546" width="100%">

### 4. 메인페이지(메뉴추출 후)

- 랜덤으로 추출한 메뉴
  <img src="https://github.com/trr456-hub/food-list/assets/108771927/f455f758-49c4-4db9-ab96-070663aea38f" width="100%">

### 5. 모달창

- 메뉴이미지를 클릭시 영양정보, 재료, 레시피가 출력되게 구현 했습니다.
  <img src="https://github.com/trr456-hub/food-list/assets/108771927/ff911f96-8a09-4230-b814-eedf4756c975" width="100%">

### 6. 마이페이지

- 마이페이지에 들어가면 기록했던 메뉴리스트가 날짜별로 출력
  <img src="https://github.com/trr456-hub/food-list/assets/108771927/71f9caab-6ac3-46e6-97be-bc6e5d7deae7" width="100%">

### 7. 저장된 메뉴

- 버튼을 클릭하여 메뉴에 조인할 수 있습니다.
  <img src="https://github.com/trr456-hub/food-list/assets/108771927/d6fe87e1-4205-4be4-bafe-573beb57e68f" width="100%">

### 8. 저장메뉴 모달

- 메인페이지와 같이 영양정보, 재료, 레시피를 확인할 수 있는 모달창을 구현
  <img src="https://github.com/trr456-hub/food-list/assets/108771927/5cbc43d8-a1b6-4fb9-a606-50fa9212bdf2" width="100%">
