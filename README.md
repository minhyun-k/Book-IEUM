<div align="center">

<!-- logo -->
<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/loading-1.png" width="400" height="400"/>

### IEUM 🖍️

</div> 

## 📝 프로젝트 소개

IEUM은 독서 활동을 기록하고, 
원하는 도서를 검색 및 책에 대한 리뷰를 작성할 수 있는 
도서리뷰 웹 애플리케이션입니다.

Next.js와 Firebase를 활용해 
사용자 인증 및 데이터 저장 기능을 구현했으며, 
React와 SCSS로 사용자가 쉽게 탐색할 수 있도록 깔끔한 UI/UX를 설계했습니다.

[배포사이트 링크](https://book-ieum.vercel.app/)  
[GitHub Repository](https://github.com/minhyun-k/Book-IEUM.git)
<br />

## 💁‍♂️ 프로젝트 팀원
강민현, 윤경빈, 이홍영


<br />
### 화면 구성
|화면 명|
|:---:|
<video width="450" controls>
  <source src="https://raw.githubusercontent.com/minhyun-k/Book-IEUM/main/public/loading.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/loading.webm" width="450"/>|
|<video src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/loading.webm" width="450" height="450"/>|
|화면에 대한 설명을 입력합니다.|


|화면 명|
|:---:|
|<img src="https://user-images.githubusercontent.com/80824750/208456234-fb5fe434-aa65-4d7a-b955-89098d5bbe0b.gif" width="450"/>|
|화면에 대한 설명을 입력합니다.|

<br />

## ⚙ 기술 스택

이 프로젝트는 다양한 최신 기술을 활용하여 구현되었습니다.

- **React**: 프론트엔드 라이브러리로, 컴포넌트 기반 UI를 구현
- **Redux**: 애플리케이션 상태 관리
- **Axios**: API 통신을 위한 HTTP 클라이언트
- **Styled Components**: CSS-in-JS 방식으로 컴포넌트 스타일링
- **Vercel**: 배포 플랫폼 (배포 사이트: [https://book-ieum.vercel.app/](https://book-ieum.vercel.app/))
- **GitHub**: 버전 관리 및 협업 도구

<br />

##  :file_folder: 폴더 구조
Book-IEUM/
<br />
├── public/                          # 정적 파일들 (HTML, 이미지 등)
<br />
│   ├── index.html                   # HTML 템플릿 파일
<br />
│   └── ...
<br />
├── src/                             # 소스 코드 디렉토리
<br />
│   ├── assets/                      # 이미지, 폰트, 아이콘 등 정적 자원
<br />
│   │   └── logo.png                 # 예시: 로고 이미지
<br />
│   ├── components/                  # 재사용 가능한 컴포넌트들
<br />
│   │   ├── Button.js                # 버튼 컴포넌트
<br />
│   │   ├── BookCard.js              # 책 카드 컴포넌트
<br />
│   │   └── ...
<br />
│   ├── pages/                       # 페이지 컴포넌트들 (각각의 페이지 화면)
<br />
│   │   ├── Home.js                  # 홈 페이지 컴포넌트
<br />
│   │   ├── BookList.js              # 도서 목록 페이지
<br />
│   │   ├── BookDetail.js            # 도서 상세 페이지
<br />
│   │   └── ...
<br />
│   ├── redux/                       # Redux 관련 파일들
<br />
│   │   ├── store.js                 # Redux 스토어 설정
<br />
│   │   ├── actions.js               # Redux 액션들
<br />
│   │   └── reducers.js              # Redux 리듀서들
<br />
│   ├── services/                    # API 통신 파일들 (Axios 설정 등)
<br />
│   │   └── api.js                   # API 요청 함수들
<br />
│   ├── styles/                      # 스타일 파일들 (CSS, SCSS, Styled Components 등)
<br />
│   │   ├── globalStyles.js          # 전역 스타일
<br />
│   │   └── theme.js                 # 테마 관련 설정 (색상, 폰트 등)
<br />
│   ├── App.js                       # 애플리케이션의 루트 컴포넌트
<br />
│   ├── index.js                     # 애플리케이션의 엔트리 포인트
<br />
│   ├── App.css                      # App 관련 스타일
<br />
│   └── ...
<br />
├── .gitignore                       # Git에서 무시할 파일/폴더 목록
<br />
├── package.json                     # 프로젝트 의존성 및 설정
<br />
├── README.md                        # 프로젝트 설명 (리드미 파일)
<br />
└── LICENSE                          # 프로젝트 라이선스 (MIT 등)

<br />

## :wrench: 주요 기능 및 특징

1. **서비스 접속 초기화면**: 접속 시 splash 화면이 나타난 뒤, 본 페이지가 로드됩니다.

2. **홈 화면**:
   - 홈 화면은 4가지 도서 리스트로 구성되어 있으며, 각 리스트는 **스와이퍼** 기능을 제공합니다.
   - 베스트셀러 및 블로거 추천 도서 목록은 각 순위가 표시됩니다.
   - 신간 도서는 일정 시간이 지나면 자동으로 업데이트되어 새로운 책이 표시됩니다.
   - 편집자 추천 리스트는 **탭버튼**을 사용하여 카테고리별로 책을 추천합니다.
   - **Firebase**를 이용하여 저장된 코멘트 중 일부가 랜덤으로 출력됩니다.

3. **도서 목록 페이지**:
   - 화면 상단의 **탭버튼**이나 **'전체보기'** 버튼을 클릭하면 도서 목록 페이지로 이동합니다.
   - 각 도서 목록은 제목, 저자, 별점 정보와 함께 출력되며, 평점이 없는 경우 '평점 없음'이라는 표시가 나타납니다.

4. **도서 상세 페이지**:
   - 사용자가 도서 제목이나 이미지를 클릭하면 도서의 상세 정보를 확인할 수 있는 페이지로 이동합니다.
   - 상세페이지는 도서의 정보, 베스트셀러 및 신간 표시, 북마크 및 코멘트 기능을 제공합니다.
   - 신간 도서는 출판일 기준으로 3주 전부터 2주 후까지 '신간'으로 표시됩니다.
   - **Firebase**를 이용해 북마크 및 코멘트 기능을 구현하였으며, 비로그인 상태에서는 로그인 안내 메시지가 표시됩니다.

5. **검색 기능**:
   - 상단에 고정된 검색창을 통해 사용자가 원하는 책을 검색할 수 있습니다.
   - 검색어 입력 후, 검색 결과 페이지로 이동합니다.

6. **로그인 기능**:
   - 사용자는 **네이버**, **깃허브**, **구글 로그인** 및 **직접 회원가입**을 통해 로그인할 수 있습니다.
   - 로그인 시 **마이페이지**로 이동하여 북마크 및 코멘트 목록을 확인하고, 회원 정보를 수정할 수 있습니다.

<br />

## 🤔 기술적 이슈와 해결 과정

### 1. **홈 화면 편집자 추천 리스트 탭버튼 클릭 시 전체 페이지 재랜더링 발생**

문제: 탭 버튼을 클릭할 때마다 전체 페이지가 다시 랜더링되어 불필요한 서버 요청이 발생했습니다.

해결: 탭버튼을 사용하는 **편집자 추천 리스트**는 별도로 컴포넌트를 분리하여 해당 컴포넌트만 부분 렌더링되도록 최적화했습니다. 또한, 컴포넌트의 데이터 요청과 홈 화면의 데이터 요청이 맞물려 무한루프가 발생한 문제를 해결하기 위해, 로딩 화면을 추가하여 데이터가 로드되기 전까지 로딩을 표시하도록 처리했습니다.

### 2. **서비스 이용 중 홈 화면으로 돌아갈 때마다 로딩 splash 화면 반복 노출**

문제: 홈 화면으로 돌아갈 때마다 splash 화면이 반복적으로 나타났습니다.

해결: 홈 화면으로 돌아갈 때, 이미 필요한 데이터가 로드된 상태에서는 다시 로딩 화면이 표시되지 않도록 조건문을 추가했습니다. 이를 통해 불필요한 로딩 화면을 방지했습니다.

### 3. **검색 및 리스트 페이지에서 요청하는 데이터가 달라 상세페이지 오류 발생**

문제: 검색을 통해 요청하는 데이터와 리스트 페이지에서 요청하는 데이터가 달라, 상세페이지에서 오류가 발생했습니다.

해결: 검색 결과 페이지와 리스트 페이지에서 각각 다른 API 요청을 하도록 수정했습니다. **router.query** 값을 사용해 각 페이지의 요청을 조건별로 처리하고, 각 페이지에 맞는 데이터를 정확하게 반환하도록 수정하여 상세페이지 오류를 해결했습니다.





