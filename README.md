<div align="center">

<!-- logo -->
<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/loading-1.png" width="400" height="400"/>

### IEUM 🖍️

</div> 

## 📝 프로젝트 소개

IEUM은 독서 활동을 기록하고, <br />
원하는 도서를 검색 및 책에 대한 리뷰를 작성할 수 있는 <br />
도서리뷰 웹 애플리케이션입니다.
<br />
<br />
Next.js와 Firebase를 활용해 <br />
사용자 인증 및 데이터 저장 기능을 구현했으며, <br />
React와 SCSS로 사용자가 쉽게 탐색할 수 있도록 깔끔한 UI/UX를 설계했습니다.<br />

[배포사이트 링크](https://book-ieum.vercel.app/)  
[GitHub Repository](https://github.com/minhyun-k/Book-IEUM.git)
<br />

## 🗓 프로젝트 일정
**총 일정 2024.10.4 ~ 2024.10.30**
<br />
10.4 ~ 10.8 주제선정 및 기획
<br />
10.8 ~ 10.11 디자인 및 화면 구성
<br />
10.12 ~ 10.22 프로젝트 진행
<br />
10.23 ~ 10.27 점검 및 오류 수정
<br />
10.27 ~ 10.30 프로젝트 리뷰


<br />

## 💁‍♂️ 프로젝트 팀원
강민현(팀장, 디자인, 데이터), 윤경빈(디자인, 데이터), 이홍영(로그인)


<br />
## 🛠 화면 구성

|화면 명|
|:---:|
|로딩 화면|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/loading.gif" width="450"/>|
|처음 어플리케이션 실행 시 로딩화면 출력|
|메인 홈|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/Home.gif" width="450"/>|
|홈 화면은 서버요청을 통해 베스트셀러, 신간 등 카테고리에 맞는 데이터가 출력되어 사용자가 도서 목록을 확인할 수 있습니다.|
|도서목록|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/list.gif" width="450"/>|
|홈 화면에서 각 카테고리별 더보기 클릭시, 혹은 헤더 메뉴 클릭시 각 카테고리에 맞는 도서 목록이 페이지에 출력됩니다.|
|상세페이지|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/detail.gif" width="450"/>|
|홈, 도서목록에서 사용자가 관심있는 도서 컨텐츠를 클릭 시, 클릭한 도서의 상세정보가 포함된 페이지가 열립니다. 이 페이지에서는 도서의 상세내용, 북마크, 코멘트 작성이 가능하며, 베스트셀러의 경우 베스트 순위, 신간의 경우 신간도서 표시가 제공됩니다.|
|북마크 등록 및 코멘트 작성|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/detail2.gif" width="450"/>|
|북마크 클릭시 '읽는중', '읽고싶어요' 등록 가능, firebase를 통해 각 로그인한 사용자 개인 북마크 기능 활성화, 코멘트 작성 시 별점과 리뷰(댓글형식)가 표시됩니다.|
|마이페이지|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/mypage.gif" width="450"/>|
|로그인 시 firebase를 사용하여, 각 사용자가 사용한 북마크와 코멘트가 출력되어 사용자의 경험, 히스토리를 확인할 수 있습니다.|

<br />

## ⚙ 기술 스택

이 프로젝트는 다양한 최신 기술을 활용하여 구현되었습니다.

- **NEXT**: 프론트엔드 프레임워크, 컴포넌트 기반 UI를 구현
- **Zustand**: 애플리케이션 상태 관리
- **Axios**: API 통신을 위한 HTTP 클라이언트
- **SASS**: CSS 방식으로 컴포넌트 스타일링
- **Vercel**: 배포 플랫폼 (배포 사이트: [https://book-ieum.vercel.app/](https://book-ieum.vercel.app/))
- **GitHub**: 버전 관리 및 협업 도구

<br />

## :wrench: 주요 기능 및 특징

1. **서비스 접속 초기화면**: 접속 시 splash 화면이 나타난 뒤, 본 페이지가 로드됩니다.

2. **홈 화면**:
   - 홈 화면은 4가지 도서 리스트로 구성되어 있으며, 각 리스트는 알라딘 api 서버 요청을 통해 다른 데이터베이스 없이 직접 요청으로 불러와 각 목록에 적합한 데이터를 출력하도록 했으며, 각각의 리스트는 스와이퍼 기능을 제공합니다.
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

### 3. **홈 화면 각 리스트 별 데이터 요청이 서로 달라 무한 랜더링 발생**

문제: 카테고리별 리스트를 출력할 때, 컴포넌트를 이용하여 다른 서버요청 실행으로 인해 홈 화면의 서버요청이 반복되어 무한 랜더링이 발생하였습니다.

해결: 랜더링을 실행할 때, 서로 다른 전역 변수에 저장하는 방법을 사용하여 서버요청으로 인한 전역변수의 변화가 서로 다르게 하여 반복적인 서버요청을 하지 않도록 해결했습니다.

<br />

##  :file_folder: 폴더 구조
Book-IEUM/
<br />
├── 📂public/                          # 이미지, 폰트, 아이콘 등 정적 자원
<br />
│   ├── 📂icon
<br />
│   │   └── logo.png                 # 예시: 로고 이미지
<br />
│   └── ...
<br />
├── 📂src/                             # 소스 코드 디렉토리
<br />
│   ├── 📂components/                  # 재사용 가능한 컴포넌트들
<br />
│   │   ├── 📜Button.js               # 버튼 컴포넌트
<br />
│   │   ├── 📜Footer.js               # 푸터 컴포넌트
<br />
│   │   ├── 📜Header.js               # 헤더 컴포넌트
<br />
│   │   ├── 📜loadingScreen.js        # 로딩화면 컴포넌트
<br />
│   │   ├── 📜MockupComponent.js      # 어플 목업 컴포넌트
<br />
│   │   ├── 📜Modal.js                # 모달 컴포넌트
<br />
│   │   ├── 📜search.js               # 검색박스 컴포넌트
<br />
│   │   ├── 📂contents/                # 재사용 가능한 컴포넌트들(컨텐츠)
<br />
│   │   │  ├── 📜ContentCard.js               # 컨텐츠카드 컴포넌트
<br />
│   │   │  └── 📜ContentList.js               # 컨텐츠리스트 컴포넌트
<br />
│   ├── 📂lib/                         # firebase 관련
<br />
│   │   └── 📜firebase.js              # firebase
<br />
│   ├── 📂pages/                       # 각 화면 파일들
<br />
│   │   ├── 📂api/                # api 관련 파일(데이터 및 서버)
<br />
│   │   │  ├──  📂auth/                # 로그인 nextauth 관련
<br />
│   │   │  │  └── 📜[...nextauth].js               # nextauth(로그인api 관련)
<br />
│   │   │  ├── 📜aladin.js               # api 서버요청
<br />
│   │   │  ├── 📜hello.js             
<br />
│   │   │  └── 📄알라딘 api 저장.txt      # api 요청시 필요한 url 등의 정보             
<br />
│   │   ├── 📂fonts/                # 폰트 적용
<br />
│   │   │  ├── 📄GeistMonoVF.woff               
<br />
│   │   │  └── 📄GeistVF.woff               # 컨텐츠리스트 컴포넌트
<br />
│   │   ├── 📂page/                # 재사용 가능한 컴포넌트들(컨텐츠)
<br />
│   │   │  ├──  📂member/                # 로그인 관련 페이지
<br />
│   │   │  │  ├── 📜CreateAcount.js        # 회원가입
<br />
│   │   │  │  ├── 📜Finded.js              # 아이디찾기
<br />
│   │   │  │  ├── 📜Login.js               # 로그인
<br />
│   │   │  │  ├── 📜Membercorrection.js    # 회원수정
<br />
│   │   │  │  └── 📜Mypage.js              # 마이페이지
<br />
│   │   ├── 📜_app.js                      
<br />
│   │   ├── 📜_document.js                 
<br />
│   │   ├── 📜Book.js                      # 도서 목록 페이지
<br />
│   │   ├── 📜CommentList.js               # 코멘트 목록 페이지
<br />
│   │   ├── 📜Detail.js                    # 상세페이지
<br />
│   │   ├── 📜index.js                     # 화면 출력
<br />
│   │   ├── 📜Main.js                      # 메인 홈페이지
<br />
│   │   └── 📜SearchList.js               # 도서 검색 목록 페이지
<br />
│   ├── 📂store/                    # 상태관리(zustand)
<br />
│   │   └── 📜BookStore.js                   # zustand 사용 상태관리
<br />
│   ├── 📂styles/                      # 스타일 파일들 (CSS, SCSS, Styled Components 등)
<br />
│   │   ├── 📂css/                # css 파일
<br />
│   │   │  ├──  📂component/                # component 스타일 파일
<br />
│   │   │  │  ├──  📂content/                # 컨텐츠 스타일 파일
<br />
│   │   │  │  │  ├── 🖌contentCard.module.scss        # 컨텐츠카드 스타일
<br />
│   │   │  │  │  └── 🖌contentList.module.scss        # 컨텐츠리스트 스타일
<br />
│   │   │  │  ├── 🖌button.module.scss                # 버튼
<br />
│   │   │  │  ├── 🖌footer.module.scss                # 푸터
<br />
│   │   │  │  ├── 🖌header.module.scss                # 헤더
<br />
│   │   │  │  ├── 🖌MockupComponent.module.scss       # 목업
<br />
│   │   │  │  └── 🖌Search.module.scss                # 검색
<br />
│   │   │  ├──  📂page/                # page 스타일 파일
<br />
│   │   │  │  ├── 🖌book.module.scss                # 도서 목록 페이지
<br />
│   │   │  │  ├── 🖌comment.module.scss             # 코멘트페이지
<br />
│   │   │  │  ├── 🖌detail.module.scss              # 상세페이지
<br />
│   │   │  │  ├── 🖌main.module.scss                # 메인 홈페이지
<br />
│   │   │  │  ├── 🖌member.module.scss              # 로그인 관련 페이지(로그인, 회원가입, 회원수정, 마이페이지, 아이디찾기)
<br />
│   │   │  │  └── 🖌SearchList.module.scss          # 검색 목록 페이지
<br />
│   │   ├── 🖌globals.css          # 전역 스타일
<br />
│   │   └── 🖌Home.module.css                 # 테마 관련 설정 (색상, 폰트 등)
<br />
├── 📄.env                             # 민감한 정보나 환경 변수를 안전하게 관리
<br />
├── 📄.exlintrc.json                   # Git에서 무시할 파일/폴더 목록
<br />
├── 📄.gitignore                       # Git에서 무시할 파일/폴더 목록
<br />
├── 📄next.config.mjs                  # Next.js 프로젝트의 주요 설정을 정의하는 파일
<br />
├── 📄package.json                     # 프로젝트 의존성 및 설정
<br />
├── 📄package-lock.json                # 프로젝트의 빌드 및 실행 동작을 커스터마이즈
<br />
└── 📄README.md                        # 프로젝트 라이선스 (MIT 등)





