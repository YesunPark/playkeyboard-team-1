# 플레이키보드 프리온보딩 프론트 1팀

안녕하세요 :) 프론트 1팀입니다. 저희는 프론트엔드 5명으로 구성되어있습니다.
>첫번째 페이지 - 이기완님, 이혜림님\
두번째 페이지 - 박예선님, 김진영님, 김정연님\
두번째 페이지 키보드(추가 구현사항) - 김진영님

이렇게 역할을 분담해서 과제를 수행했습니다. 잘 부탁드립니다 :)

##  배포 링크

https://playkeyboard-front-team-1.netlify.app/

## 팀 노션
https://www.notion.so/1-b2d8f038c91c41aa9c2153b9c656c680


## 적용 기술 
+ Front-end : React.js styled component, hangul_js, React-Router-Dom

## 후기
+ 김진영 : [개인 블로그 게시물](https://velog.io/@jinyoung985/Pre-Onboarding-%ED%94%8C%EB%A0%88%EC%9D%B4%ED%82%A4%EB%B3%B4%EB%93%9C-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0)

## 개인 별 구현 기능

### [이기완] - 첫번째 페이지
- 구현한 기능 : 카테고리 페이지 테마부분 레이아웃 구현 및 스타일링
- 설명 : 
  - ES7부터 제공하는 async/await 키워드를 이용하여 api 데이터를 fetch 하였습니다. 기존 fetch에서 이용되는 then() 메서드가 길어지게 될시 코드의 가독성이 떨어진다는 문제점이 있기 때문에, 가독성 측면에서 좀 더 깔끔하게 보여지는 async/await 키워드를 택하였습니다. 
  - 각 테마 클릭시, react-router-dom에서 제공하는 useNavigate 훅을 이용하여, 세부 디테일을 볼수있는 페이지인 detail/:themeId로 넘어가게끔 구현하였습니다. 유저가 각 테마를 클릭할시 onClick 이벤트와 화살표함수를 이용하여 해당되는 테마 아이디 값을 useNavigate 훅에 담아 링크를 바꾸어주었습니다.
  - 스타일링의 경우 grid 레이아웃을 사용하여 카테고리 테마부분에 보여지는 전체적인 레이아웃을 잡았습니다. flex대신 grid를 택한 이유는 추후에 column이 추가되거나 레이아웃 전체 틀이 바뀔시 grid를 사용하는것이 유지보수 차원에서 더 좋다고 생각하여 택하였습니다. 
  
### [이혜림] - 첫번째 페이지 
- 구현한 기능 : 카테고리 페이지 nav 및 헤더 
- 설명 : 카테고리 리스트를 api에서 받아와서 nav를 구성하고 상단에 로고 부분을 추가하여 헤더를 구성했습니다. 모바일 환경에서 사용할 수 있도록 nav 부분을 스크롤 하여 원하는 값으로 이동할 수 있게 구성했습니다. 사용자 경험을 생각하여 헤더의 경우 position fixed로 상단에 고정될 수 있게 했습니다. 또한 nav의 경우 postion sticky로 일정 값에 도달했을 때 상단에 고정될 수 있게 구성했습니다. nav의 각각의 탭을 누르면 해당하는 테마의 데이터를 받아올 수 있게 했습니다.  

### [박예선] - 두번째 페이지
- 구현한 기능 : 두번째 페이지 메인이미지, 제목, 작가, 해시태그 부분 UI 구현, 뒤로가기 기능 구현, theme.js 설정
- 설명 : 
1.  두번째 페이지 - **뒤로가기 버튼** 클릭 시 해당하는 카테고리 탭의 테마리스트로 돌아가는 기능.\
: 처음에는 해당하는 카테고리 탭을 클릭 시 Category.js에만 있는 state값이 변경되는 코드였습니다. \
그렇게 하니 뒤로가기 버튼을 클릭 시 원래 보고있던 카테고리 탭의 테마리스트가 아니라  \
기본으로 보여주게 설정해놓은 LIVE탭의 테마리스트로 돌아가게 되었습니다. \
**state값을 Router.js에서 관리**함으로써 뒤로가기 버튼을 눌러도 state값은 유지되어\
**원래 보고있던 카테고리 탭의 테마리스트를 볼 수 있도록** 했습니다. 
https://github.com/YesunPark/pre-on-boarding-1st-task/blob/9ccd43114998f8983faefe030afc73baa45364fd/src/Router.js#L12-L19
<br/>

2. 두번째 페이지 - **해시태그의 길이**가 일정 길이 이상 넘어가게되면 밑으로 넘겨지는 스타일을 적용했습니다.\
: 사용자의 입장에서 해시태그의 **가독성을 높이기 위해** max-width를 설정했고 해시태그 길이가 초과되면\
그 아래쪽으로 나란히 구현되도록 ` flex-wrap: wrap; `을 사용했습니다. 
https://github.com/YesunPark/pre-on-boarding-1st-task/blob/9ccd43114998f8983faefe030afc73baa45364fd/src/pages/detail/DetailInfo.js#L101-L106
<br/>

3. 전체 - **theme.js**를 설정해 전역에서 공통적으로 사용되는 항목들을 변수로 지정했습니다. \
: 메인테마컬러, 공통으로 사용하는 글씨체 컬러, 미디어쿼리에 사용되는 값들을 theme.js로 설정했습니다. \
필요한 곳에서 `color: ${({ theme }) => theme.colors.grayText};` 이러한 방식으로 사용했습니다.
https://github.com/YesunPark/pre-on-boarding-1st-task/blob/9ccd43114998f8983faefe030afc73baa45364fd/src/styles/theme.js#L1-L11
       
### [김진영] - 두번째 페이지, 키보드(추가 구현 사항)
- 구현한 기능 : 키보드 체험하기, detail 페이지 이모티콘 및 텍스트 박스
- 설명 : 
  - hangul-js 라이브러리를 통해 한글 및 영어 키보드를 구현했습니다.<br/>
useState를 통해 inputValue라는 state를 관리하고 키보드 상단 input의 value를 inputValue state로 설정해주어 키 값을 입력할 때마다 상태값이 업데이트 되도록 구현했습니다.
  - detail 페이지에서 데이터를 받아와 isLiveTheme가 true인 경우에만 이모티콘과 텍스트 박스를 출력하도록 설정했습니다.
  - 자세한 내용은 [개인 블로그 게시물](https://velog.io/@jinyoung985/Pre-Onboarding-%ED%94%8C%EB%A0%88%EC%9D%B4%ED%82%A4%EB%B3%B4%EB%93%9C-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0)에 정리해놓았습니다.

### [김정연] - 두번째 페이지
- 구현한 기능 : 클릭시 이모티콘 카운트 증가, style 변화
- 설명 : 이모티콘 count 값이 클릭한것만 증가하는 기능을 구현하였습니다.<br/>
  - useState로 count배열 상태값을 관리하여 클릭한이모티콘 count만 1로 바꿔주고 다른 이모티콘 클릭시 배열이 모두 0으로 초기화되게한 다음 다시 클릭한 이모티콘 count만 1로 바뀌도록 구현하였습니다.
  - 이모티콘 클릭시 style 변화를 주었습니다. 

 

  
---

## Reference

- 이 프로젝트는 비영리목적으로 playkeyboard와의 기업협업 과제제출용으로 제작한 프로젝트입니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적 문제가 있을 수 있습니다.
