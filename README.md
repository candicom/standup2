# StandUP!

```
애자일 프랙티스 standup 할 때 아이스브레이킹에 사용되는 IT기술에 관련된 주제를 나눌 수 있는 아티클들을 공유하는 소셜미디어 프로젝트
```

## 사용자 스토리

1. 김개발은 아침 스탠드업 시간에 같이 이야기를 나눌 수 있는 주제를 위해 스탠드업이라는 웹 앱을 찾아간다. 이렇게 함으로써 사람들과 IT에 대한 주제로 커뮤니케이션을 할 수 있다.
2. 김개발이 사이트를 방문해서 자신이 어제 유심하게 읽은 글을 올릴 수 있다. 이렇게 하면 다른 사람들이 볼 수 있다.
 * 에디터 창은 하나만 있고 거기서 글을 작성하고 업로드 하면 글이 외부 클라우드 공간에 저장이 된다.
3. 김개발이 작성한 글이 목록으로 보여진다. 이렇게 함으로써 다른 사람들이 목록을 확인할 수 있다.
 * 목록글은 해당IT 주제의 대표 이미지와 제목, 간단 요약등이 들어 있는 카드의 리스트 형태로 나열이 되어야 한다.
4. 김개발은 google ID를 가지고 로그인을 할 수 있다. 이렇게 함으로써 내가 쓴 글만 따로 모아서 볼 수 있다.
5. 김개발은 그룹 별로 스탠드업을 만들 수 있고 각 그룹별고 글을 올릴 수 있다


## 설명

<img src="./doc_img/001.jpg" width=640/>

글과 링크를 입력하면 카드를 만들어서 Firebase에 저장합니다.

라는 해피 패스(MVP)를 가지고 소셜미디어를 만들 수 있는 프로젝트.

Embedly, Firebase, Github 페이지를 가지고 꽤나 당분가 무료로 운영할 수 있는 북마크 소셜 미디어를
만들어 봅시다.

### 7 days of Practice
Day 0 이외에는 각 브랜치에 진행사항에 대한 설명이 있습니다.

* [Day 0. Git 설정 & README 작성](https://techstory.shma.so/%EC%84%9C%EB%B2%84%EB%A6%AC%EC%8A%A4-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%86%8C%EC%85%9C%EB%AF%B8%EB%94%94%EC%96%B4-%EA%B0%9C%EB%B0%9C%EA%B8%B0-0%ED%8E%B8-63084e103f77#.h1ogt1t7c)
* Day 1. user story 1 - create-react-app

  https://github.com/ehrudxo/standup/tree/day1

* Day 2. user story 2 - logo, favicon, editor

  https://github.com/ehrudxo/standup/tree/day2

* Day 3. user story 2 - firebase, jest setting

  https://github.com/ehrudxo/standup/tree/day3

* Day 4. user story 2 - firebase dao

  https://github.com/ehrudxo/standup/tree/day4

* Day 5. user story 3 - card, list, embed.ly, axios

  https://github.com/ehrudxo/standup/tree/day5

* Day 6. user story 4 - authentication, redux & router

  https://github.com/ehrudxo/standup/tree/day6

* Day 7. user story 4 - Group
  
  https://github.com/ehrudxo/standup/tree/day7

### 설치
```
$git checkout day1
```
1~6 번갈아 가며

### 실행
```
$npm install
$npm start
```

## API
API는 계획없는 자체 프로젝트 입니다. 추후 발생할 여지는 있음.

## production

제품을 빌드하려면
```
npm run build
```

제품을 디플로이 하려면
```
npm run deploy
```
를 통해 작업할 수 있습니다.

### 라이센스

MIT





# Day2

Day1에서 Hello World 와도 같은 프로그램을 빌드까지 했다고 하면 Day2에서는 실제 페이지를 만들기 위한 기본 작업들로 시작해서 User Story2번의 기초 작업을 해 보도록 하겠습니다.

일단 처음 만들어진 폴더 구조는 다음과 같습니다.

![serveless_folder_day2.jpg](./doc_img/serveless_folder_day2.jpg)

이후 진행에 폴더를 찾는데 참조하시기 바랍니다.

## 로고, 파비콘(favicon), 헤더

처음 실행한 예제에서 이쁘기는 하지만 무지하게 큰 움직이는 로고를 만나보셨을 겁니다. 그리고 헤더가 엄청나게 큰 영역을 차지하고 있다는 것, 파비콘도 react 이미지라는 사실을 알 수 있죠.

이런 것들을 변경하는 팁을 약간 언급하고 넘어가겠습니다.

### 로고
개발자에게 디자인은 또 다른 어려움일거라 생각합니다.
그래서
[쿨텍스트](http://ko.cooltext.com/)
같은 텍스트를 로고로 변환해 볼까 합니다.

Stand Up으로 주고 헤더 색깔을 녹색( #02B875 )으로 지정할 예정이기 때문에 비슷하게 맞춰서 다운 받아 둡니다.

![stand_up_logo](./doc_img/stand_up_logo.png)

### favicon
favicon은 브라우저에서 타이틀 텍스트 옆에 있는 작은 아이콘입니다. 즐겨찾기에도 표시가 되는 아이콘인데, 이 것도 만들어주는 사이트가 있습니다.
[favicon-generator](http://www.favicon-generator.org/) 같은 사이트는 그런 역할을 해 주는 군요.
재밌는 것은 이 사이트은 파비콘이 없다는 사실입니다. 저는 제 캐리커쳐를 올려서 favicon을 만들었습니다.


### 헤더
헤더의 색과 사이즈를 변경할 수 있습니다.

src 폴더 아래의 App.css 파일의 CSS 파일을 다음과 같이 고치고
```CSS
.App-logo {
  height: 45px;/* 이미지 사이즈 줄이고*/
}
.App-header {
  background-color: #02B875;/* 타이틀 바 색감을 좀 바꾸고*/
  height: 50px;/* 전체 사이즈를 줄였습니다.*/
  padding: 5px;
  color: white;
}
```

이미지 사이즈를 줄이고, 타이틀 바 색감을 좀 바꾸고, 전체 사이즈를 줄인 결과에 로고 이미지와  favicon 을 바꾸도록 App.js를 바꿔보도록 하겠습니다.

```JavaScript
import React, { Component } from 'react';
import logo from './img/stand_up_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          이제 여기서 부터 프로젝트는 시작입니다. 로고는 일단은 그냥 둡시다.
        </p>
      </div>
    );
  }
}
export default App;
```
favicon은 public folder밑에 파일을 대체만 해 주면 됩니다.

지금부터는 모바일 화면 기준으로 보기 위해 개발자 도구의 모바일 보기 기능을 활용하겠습니다.

![dev_mobile](./doc_img/chrome_dev_mobile.jpg)

그럼 다음과 같이 보여야 정상입니다.

![day2_001](./doc_img/serverless_day2_01.jpg)

파비콘도 정상이네요

![day2_002](./doc_img/serverless_day2_02.jpg)


## User Story 2

정의된 User Story는 다음과 같습니다.
```
 김개발이 사이트를 방문해서 자신이 어제 유심하게 읽은 글을 올릴 수 있다. 이렇게 하면 다른 사람들이 볼 수 있다.
  * 에디터 창은 하나만 있고 거기서 글을 작성하고 업로드 하면 글이 외부 클라우드 공간에 저장이 된다.
```

유심하게 읽은 글을 올릴 수 있다. 부분을 참조해서 요건을 정의해 봅시다

### 요건 정의

"무엇을 올린 것인가"를 고려해 볼 때 소셜미디어들의 화면을 보도록 하겠습니다.

![card](./doc_img/serverless_day2_03.jpg)

위의 이미지에서 기본적인 요건을 정의해 보면
```
작성자 (writer)
작성일 (createdAt)
내용 (contents)
링크
    - 링크 이미지
    - 링크 제목
    - 링크 설명
    - 링크 주소
```
등을 기본으로 가지고 있습니다.

## 에디터 작성

그렇다면 Editor에 위의 내용들을 입력해서 업로드하기 직전까지의 작업을 지금부터 해 볼 것입니다. 어디에 어떻게 올릴 것인지는 나중에 고민하기로 하고 가장 쉬운 에디터 부터 만들어 보겠습니다.

![serverless_day2_04](./doc_img/serverless_day2_04.jpg)
와 같은 형태의 에디터를 만들 때 필요한 부분은 사용자 프로파일과 타이틀('무엇을 공유할까요') 부분과 입력부 , 버튼 순등이 있을 거 같습니다.

##### 사용자 프로파일 만들기

지금은 사용자의 세션을 생각하지 말고 Anonymous모드로 먼저 만들어 보도록 하겠습니다.

Profile.js, Profile.css 파일을 아래와 같이 만들어 보겠습니다.
```JavaScript
//profile.js
import React  from 'react';
import './Profile.css';
import Anonymous from './img/anonymous.png';

function Profile(isAnonymous){
  if(isAnonymous){ //익명일 경우
    return(
        <div className="anonymous">
          <div className="today_title">
            무엇을 공유할까요?
          </div>
          <div className="anonymous_name">
          겐지
          </div>
          <div className="anonymous_img_wrap">
            <img src={Anonymous} alt="profiles" className="anonymous_img"/>
          </div>
        </div>
    )
  }else{//익명이 아닐 경우는 일단은 빈 div
    return <div/>;
  }
}
export default Profile;
```

```CSS
/*Profile.css*/
.anonymous{
  text-align: left;
  background-color: white;
  border-bottom: 1px solid #dddfe2;
  width :100%;
  height: 50px;
}
.anonymous_img_wrap{
  text-align: right;
  border-radius: 50%;
  display: inline;
  float: right;
}
.anonymous_img{
  border-radius: 50%;
  height: 35px;
  padding: 5px;
}
.anonymous_name{
  padding-right: 10px;
  float: right;
  margin-top: 17px;
}
.today_title{
  float: left;
  margin-top: 17px;
  padding-left: 10px;
}
```

익명일 경우에 겐지는 일단 Username으로 정하겠습니다.
일반 function 함수로 컴포넌트를 만들었고 props 로 isAnonymous 값을 전달 받는다는 사실을 알 수 있습니다.

##### 입력부와 버튼 만들기

이제는 입력부를 살펴 볼까요?

전통적으로 웹 에디터의 입력부 작성하는 방법은

```html
<form target="[some url]">
  <textarea name="[text_area_name]"/>
</form>
```
이지만 몇가지 이유에서 div 태그를 이용하도록 하겠습니다. (form 에 넣을 경우는 브라우저 이벤트가 우리가 넣는 이벤트에 우선하기 때문에 엔터를 칠 경우 submit이 되고, Single Page Applicaion의 경우 URL 이 옮겨지는 등의 제어를 위해 들어가야 하는 스크립트들이 많아지는 것등에 대한 코드가 많아지는 일들이 있습니다.)

div 의 경우는 content-editable 속성을 주면 편집이 가능합니다.
placeholder 까지 더한코드를 살펴보겠습니다. (placeholder란 HTML 입력 폼에서 사용자가 입력하기 전까지 화면에 표시되는 문자열을 이야기 합니다)
```html
<div class="innerEdit"
        contentEditable="true"
        placeholder="글쓰기..."></div>
```
하지만 div는 그냥 placeholder가 작동하지 않습니다. 그래서 innerEdit이라는 CSS클래스르 다음과 같이 작업을 해 줘야 합니다

```CSS
[contenteditable=true]:empty:before{
  content: attr(placeholder);
  color: #aaa;
  display: block; /* For Firefox */
}
```
이제 아까 작성한 Profile.js 를 결합하고 눌렀을 때 동작하는 코드를 만들어 보도록 하겠습니다.(콘솔만 먼저 찍어보도록 하겠습니다.)

Editor.js 및 Editor.css 파일을 아래와 같이 작성해 보겠습니다.

```JavaScript
import React, { Component } from 'react';
import './Editor.css';//Editor.css 파일 임포트
import Profile from './Profile';//Profile 파일 임포트

class Editor extends Component {
  render() {
    return (
      <div className="wrapEditor">
        <Profile isAnonymous={this.props.isAnonymous}/>
        <!-- isAnonymous 값을 props로 받는다.-->
        <div className="textEditor">
          <div className="innerEdit"
            contentEditable="true"
            placeholder="글쓰기..."></div>
        </div>
        <div className="actionBar">
          <button className="upload" onClick={this.props.handleSubmit}>
          <!--버튼 이벤트를 props 값으로 받는다 -->
          <span>스탠드업!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Editor;
```

```CSS
/*placeholder*/
[contenteditable=true]:empty:before{
  content: attr(placeholder);
  color: #aaa;
  display: block; /* For Firefox */
}
.wrapEditor{
  padding : 0px;
  border: 1px solid #dddfe2;
  margin: 10px;
  border-radius: 0 0 3px 3px;
  background-color: #f6f7f9;
}

.textEditor{
  width:100%;
  min-height: 100px;
  background-color: white;
  border-bottom: 1px solid #dddfe2;
}
.textEditor .innerEdit{
  text-align: left;
  color: #1d2129;
  padding:20px;
  min-height: 90px;
}
.actionBar{
  min-height: 40px;
}
.upload{
  width:100px;
  height: 30px;
  margin: 5px;
  float:right;
  color: white;
  background-color: #02B875;
  border-radius: 3px 3px 3px 3px;
  border: 0px;
}
```

이제 Editor.js 파일을 App.js 파일에 컴포넌트로 완성을 해야 입력 폼이 완성이 된다고 볼 수 있습니다.
(소스에서 이미 확인하셨겠지만 props로 들어오는 값들이 있습니다.)

App.js 파일은 다음과 같이 수정하겠습니다.
```JavaScript
import React, { Component } from 'react';
import logo from './img/stand_up_logo.png';
import './App.css';
import Editor from './Editor'

class App extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //버튼을 눌렀을 때 Action. 지금은 일단 콘솔 값을 확인만 함
  handleSubmit(e){
    console.log(this,e);
  }
  //익명 사용자 여부
  isAnonymous(){
    return true;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Editor {...this}/><!-- App의 프로퍼티를 Editor의 props로 전달 -->
      </div>
    );
  }
}

export default App;
```

변경된 소스를 잘 보셨으면 아시겠지만 Editor에 부모가 가진 메쏘드들을 전달하는 패턴을 쓸때 열거형 ```...```
을 사용했습니다. 자주 쓸 경우는 불필요한 리소스들까지도 연결 될 수 있으니 잘 확인해서 사용하시기 바랍니다

이렇게까지 작업을 하면 다음과 같이 페이지가 뜨게 되고 콘솔 값을 확인해 볼 수 있습니다.
![serverless_day2_05](./doc_img/serverless_day2_05.jpg)

다음은 콘솔 값이 아니라 간단한 리스트를 페이지에 찍어보고 Embed.ly를 가지고 카드를 만들어 보도록 하겠습니다.






# Day3

## User Story 2

```
 김개발이 사이트를 방문해서 자신이 어제 유심하게 읽은 글을 올릴 수 있다. 이렇게 하면 다른 사람들이 볼 수 있다.
  * 에디터 창은 하나만 있고 거기서 글을 작성하고 업로드 하면 글이 외부 클라우드 공간에 저장이 된다.
```

User Story2 에 맞춰 에디터를 작성해 보았습니다. 이제는 User Story의 약간 디테일한 부분을 살펴보고
그 부분에 대한 것들이 어떻게 더 풀어져 나가는지 살펴 보도록 하겠습니다.

```
에디터 창은 하나만 있고 거기서 글을 작성하고 업로드 하면 글이 외부 클라우드 공간에 저장이 된다.
```

*왜 에디터 창은 하나만 있고* 라는 표현을 썼을까요? 대부분의 소셜미디어들은 즉각적으로 남기고 싶은 말들을 남기
고 업로드를 누르면 알아서 필요한 정보들을 이쁘게 만들어서 내어 줍니다. 그것과 유사하게 우리도 카드라는 형
태를 만들어 볼 것인데, 일단 뒷쪽에 표현된 *업로드 하면 글이 외부 클라우드 공간에 저장이 된다.* 라는 데에
조금 더 관심을 기울여 만들어 보도록 하겠습니다.

### Firebase

Firebase를 제가 처음 본 것은 Angular를 한참 공부하던 시절에 Todo App 기본 예제가 Firebase로 되
어 있었습니다. 꽤 괜찮구나 하고 생각했는데 어느새 구글이 인수, 재작년 부터는 Google I/O의 주력 상품이
되어 있더군요.

일단 사이트를 방문해 볼까요?

[Firebase 홈페이지](https://firebase.google.com/)

![Firebase 홈페이지](./doc_img/Serverless_firebase01.png)

IBM의 cloudant, mongolab 같은 일종의 DBAAS(Database Aa A Service)라고 보시면 되는데 제공되
는 혜택이나 서비스들이 워낙 막강해서 개발하면서 고민해야 하는 많은 부분들을 줄여줄 수 있습니다.

가장 큰 장점이라고 하는 부분들(자랑하고 있는 부분)은 분석과 개발 툴입니다. 확실히 대시보드는 깔끔하고 개발
할때 언제나 필요했던 요소들을 sdk 로 제공해 주는데 대표적인 예로는 클라우드 메세징, 인증, 실시간 데이타베
이스, 저장소, 호스팅, 원격구성, Test Lab, 오류 보고 입니다.

이 중에 우리가 사용할 녀석은 아무래도 인증과 실시간 데이타베이스 이 두가지 입니다. 서버리스 아키텍처를 지향
하니까요~

<iframe width="560" height="315" src="https://www.youtube.com/embed/xAsvwy1-oxE" frameborder="0" allowfullscreen></iframe>

구글 I/O의 처음부터 앱 만들기를 보시면 상당히 도움이 되실거 같구요. 하지만 이와 별개로 저도 처음부터 시작해
보도록 하겠습니다.

#### 가입

가입은 Google ID가 있으면 가능합니다. 오른쪽 상단의 로그인 버튼을 누르고 로그인을 한뒤 로그인 버튼 옆에
있는 콘솔로 이동 버튼을 누릅니다.

![Go Console](./doc_img/Serverless_firebase02.png)

그럼 Console의 대문에 들어가게 되는데

![Go Console](./doc_img/Serverless_firebase03.png)

거기서 새 프로젝트 만들기를 눌러서 새 프로젝트를 만들 수 있습니다.

#### 프로젝트 만들기

다음과 같은 팝업창이 뜬 것을 확인할 수 있을 겁니다.

![Go Console](./doc_img/Serverless_firebase04.png)

프로젝트 이름을 StandUp, 국가/지역을 대한민국으로 설정하고 프로젝트 만들기 버튼을 클릭합니다.
그러고나면 몇초 후에 다음과 같은 아름다운 대시보드 화면을 볼 수 있습니다.

![Go Console](./doc_img/Serverless_firebase05.png)

네! 이제 끝났습니다~ 개발에 필요한 부분이 나올 때에 Firebase 의 기능은 조금 더 설명하기로 하고 가장 중
요한 한가지만 하고 작업을 진행하도록 하겠습니다.

*웹 앱에 Firebase 추가* 버튼을 클릭하면 다음과 같은 창이 뜨는데 거기에 나온 config 값을 사용합니다.

![Go Console](./doc_img/Serverless_firebase06.png)

## 환경 설정
일단 이런 config 파일들을 사용할 js 파일을 한번 만들어 보도록 하겠습니다.

config.js 파일을 다음과 같이 만들어 줍니다.

```
var config = {
 apiKey: process.env.REACT_APP_FIREBASE_KEY,
 databaseURL: process.env.REACT_APP_DB_URL,
 storageBucket: process.env.REACT_APP_STRG_BKT,
 messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
 embedlyKey : process.env.REACT_APP_EMBEDLY_KEY
}
export default config;
```
여기서 두가지를 설명하고 가야할 것 같습니다. 첫번째는 process.env.으로 시작하는 값들입니다. create-react-app
설명을 찾아보시면 node에서 process.env에 들어가는 값을 관리하는 것을 이용해서 process.env.REACT_APP_
로 시작하게 되는 값들은 환경변수로 사용할 수 있습니다.

그렇다면 당연히 여러분이 같이 만드신 프로젝트 루트 디렉토리에 .env 파일을 만들고
```properties
apiKey = "AIzaSyCt6rkIrXNKr9xV0l-7Ei_2m3vY6RlxdJ0"
authDomain =  "standup-4125e.firebaseapp.com"
databaseURL= "https://standup-4125e.firebaseio.com"
storageBucket= "standup-4125e.appspot.com"
messagingSenderId= "605830974241"
```
와 같이 값을 만드시면 사용할 수 있습니다.

물론 API key 값들은 어느 정도 일정 시간이 지나면 제가 바꿀 것이기는 합니다. 값은 참조하시라고 남겨두었
습니다.

이렇게 설정하고 나면 잘 가지고 오는지를 확인해 봐야겠지요?
App.js 같은 곳에 import 와 console 로그를 출력하는 소스를 집어 넣고 확인해 보도록 하겠습니다.

```Javascript
import config from './config'
console.log(config.apiKey);
```
![Go Console](./doc_img/Serverless_firebase07.jpg)

훌륭하게 출력이 되는 군요. 주의할 점 두가지는 create-react-app 의 react-scripts 버전이 0.5.0
이상이어야 하며 .env 에 등록한 변수는 꼭 node 서버를 재기동 시켜주셔야 인식 한다는 것입니다.

## HTML 편집기 작성
이제 기본적으로 HTML 편집기 에 들어갈 몇가지 유저스토리를 추가해서 작성해 보도록 하겠습니다.
```
 김개발이 사이트를 방문해서 자신이 어제 유심하게 읽은 글을 올릴 수 있다. 이렇게 하면 다른 사람들이 볼 수 있다.
  * 에디터 창은 하나만 있고 거기서 글을 작성하고 업로드 하면 글이 외부 클라우드 공간에 저장이 된다.
  * 아무런 내용도 김개발이 입력하지 않으면 업로드하지 않는다.( 버튼이 눌러지지 않는다. )
```

유저 스토리에서 *에디터 창은 하나만* 있지만 개발을 하면서 데이타를 저렇게 저장할 수는 없을테니 어떻게 구
조화 할지 고민을 일단 한번 해 보도록 합시다. 소셜미디어데 들어가는 데이타를 다시한번 생각해 보면 아래와
같은 형태로 구조화 되어 있지 않을까 확인할 수 있습니다.

```
글 내용
작성자
URL
  - 링크 타이틀
  - 링크 요약
  - 링크 이미지
```

글 내용은 사용자가 작성한 내용을 그대로 넣으면 되고, 작성자는 일단 Anonymous(겐지)로 지정하면 되는데
URL의 아래 내용은 어떻게 할까요? 관련 내용은 다음번에 조금더 기술하도록 하고 오늘은 일단 URL만 글 내용
에서 분리하는 작업을 해 보겠습니다.

Editor.js 파일의 innerEdit 클래스에 이벤트를 한번 추가해 보도록 하겠습니다.
```html
<div className="innerEdit"
            contentEditable="true"
            placeholder="글쓰기..."
            onPaste={this.onPaste}
            onKeyUp={this.editorChange}></div>
```
onKeyUp 이벤트는 URL을 입력하고 엔터나 스페이스를 쳤을 때 패턴 매칭을 통해 URL을 뽑아내고 onPaste
이벤트는 복사 붙여넣기 할때의 이벤트를 잡아내는 역할을 합니다.
```JavaScript
onPaste(event){
  event.clipboardData.items[0].getAsString(text=>{
    if(this.detectURL(text)){
      this.setState({embedlyUrl:text,content:this.state.content}});
    }
  })
}
editorChange(event){
  let checkText = this.detectURL(event.currentTarget.textContent);
  if(!this.state.embedlyUrl&&
      (event.keyCode===32||event.keyCode===13)&&
      checkText){
    this.setState({embedlyUrl:checkText,content:event.currentTarget.textContent});
  }else{
    this.setState({content:event.currentTarget.textContent});
  }
}
```
onPaste와 editorChange는 모두 event 에서 값을 받지만 text 값을 얻어내는 방법이 조금씩 다릅니다.
onPaste는 클립보드의 아이템에서 값을 getAsString이라는 함수를 통해 얻어내는데 콜백함수의 매개 변수로
화살함수를 사용했습니다.
(여러번 ES2015 문법에 대해서 설명을 드렸지만 화살함수는 this를 의도적으로 지정할 수 있고 실제 함수를 풀
어 쓰면 다음과 같은 형태의 함수로 바꿀 수 있습니다.)
```JavaScript
onPaste(event){
  var that = this;
  event.clipboardData.items[0].getAsString(function(text){  
      if(that.detectURL(text)){
        that.setState({embedlyUrl:text});
      }
  })
}
```
그리고 onPaste와 editorChange 모두 편집기의 텍스트 값에 들어가는 URL을 받아서 state 값에 저장을
하는 역할을 하고 있습니다. 하지만 content에 들어가는 값을 얻어내는 과정은 두가지가 조금 다릅니다.
먼저 editorChange 함수는 엔터와 스페이스바를 입력했을때
```
event.keyCode===32||event.keyCode===13
```
편집기의 값을 확인하는 한편 onPaste는 event의 클립보드에서 텍스트를 잡아내는 거라 데이타를 완성하는
부분이 다릅니다.

지금까지의 Editor.js 소스는 다음과 같습니다.

```JavaScript
class Editor extends Component {
  /*사용되는 메쏘드들을 모두 this 로 사용할 수 있도록 바인딩 해 준다.*/
  constructor(props){
    super(props);
    this.onPaste = this.onPaste.bind(this);
    this.editorChange = this.editorChange.bind(this);
    this.getCard = this.getCard.bind(this);
    this.hasValue = this.hasValue.bind(this);
    //embedlyUrl과 content로 분리해 준다. 사용자 추가 전
    this.state ={
      embedlyUrl : undefined,
      content : undefined
    }
  }
  // 복사 붙여넣기에 사용되는 이벤트를 다뤄준다.
  onPaste(event){
    //클립보드 아이템의 첫번째 배열에서 text 를 받는다.
    event.clipboardData.items[0].getAsString(text=>{
      //원래는 text가 String 형태인지 확인해 봐야하지만 getAsString이라 에러보다는 비정상 작동
      //이 이루어질 수 있다.
      // detectURL 이라는 dummy function 이 필요하다.
      if(detectURL(text)){
        //content 의 state는 이미 붙여진 상태 이후기 때문에 state를 그대로 가져와도 됨
        this.setState({embedlyUrl:text});
      }
    })
  }
  editorChange(event){
    // detectURL 이라는 dummy function 이 필요하다.
    let checkText = detectURL(event.currentTarget.textContent);
    if(!this.state.embedlyUrl&&
        (event.keyCode===32||event.keyCode===13)&&
        checkText){
      this.setState({embedlyUrl:checkText,content:event.currentTarget.textContent});
    }else{
      this.setState({content:event.currentTarget.textContent});
    }
  }
  //일단은 Dummy 함수가 필요하다.
  detectURL(text){
    return undefined;
  }
  render() {
    return (
      <div className="wrapEditor">
        <Profile isAnonymous={this.props.isAnonymous}/>
        <div className="textEditor">
          <div className="innerEdit"
            contentEditable="true"
            placeholder="글쓰기..."
            onPaste={this.onPaste}
            onKeyUp={this.editorChange}></div>
        </div>
        <div className="actionBar">
          <button className="upload"
            onClick={this.props.submit}><span>스탠드업!</span></button>
        </div>
      </div>
    );
  }
}
```
하지만 공통적으로 어떤 URL을 찾아내는 작업의 경우는 detectURL이라는 공통함수를 만들어야 되겠군요. 지금
은 dummy 함수 입니다.
아직까지는 이런 공통적인 함수나 로직 없이 진행해서 테스트코드에 대한 언급을 하지 않았지만 이번에는 언급을
하고 시작하고자 합니다.
#### 테스트 코드
create-react-app 은 기본적으로 jest를 내장하고 있습니다. 그래서 jest를 이용하는 방법과 똑같이 작성
하시면 됩니다.

  * __tests__ 폴더아래에 있는 .js 파일
  * .test.js로 끝나는 파일
  * .spec.js로 끝나는 파일

들은 기본적으로 테스트 파일로 인식하는데,
```
$npm test
```
를 실행시키면 진행해 볼 수 있습니다.
> npm test를 실행시키면 기본적으로 실행을 하고 대기 모드로 들어가고 언제나 Watch Usage를 뱉습니다.
> a 는 모든 테스트를 실행시켜주고, p는 정규식에 매치가 되는 filter로 테스트 케이스를 돌릴 수 있고
> q는 감지(watch)모드를 종료 시킵니다. 감지모드일 경우는 파일이 변하면 알아서 테스트 케이스를 변경합니다.

먼저 App.js 가 잘 로딩이 되는지에 대해 src 폴더 아래 App.test.js 라는 파일을 만들어 보겠습니다.
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```
실행 결과는 다음과 같이 표현 됩니다.
```bash
> standup@0.1.0 test /Users/SongGangho/dev/standup
> react-scripts test --env=jsdom
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.


Watch Usage
 › Press a to run all tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```
저의 경우는 파일을 만들고 마지막 커밋을 하고파일에 변화가 없는 경우라 이렇게 표시가 되는군요.

기본적으로 커밋이 안된 내용에 대해서만 감지하고 있다가 반영을 하는 훌륭한 메커니즘을 가지고 있습니다.

하지만 파일을 약간 수정하고 나면 그걸 바로 실행시켜 줍니다. 아래와 같이 실행이 됩니다.
```bash
PASS  src/App.test.js
 ✓ renders without crashing (22ms)

Test Summary
› Ran all tests related to changed files.
› 1 test passed (1 total in 1 test suite, run time 1.327s)

Watch Usage
› Press a to run all tests.
› Press o to only run tests related to changed files.
› Press p to filter by a filename regex pattern.
› Press q to quit watch mode.
› Press Enter to trigger a test run.
```
iTerm 같은데서는 PASS가 녹색으로 표시 되어 있습니다.

#### detectURL

이제 컴포넌트가 잘 로딩되는지에 대한 테스트는 마쳤으니 한번 detectURL에 대한 테스트 코드를 작성해 보도
록 하겠습니다.

일단 src 폴더 아래에 __tests__ 폴더를 만들고, 우리가 테스트할 Editor.js파일과 똑같은 이름의 Editor.js
파일을 아래와 같이 만듭니다.

이 때 첫번째 원칙은 에러가 나는 코드를 만드는 것이죠. 이미
```
return undefined;
```
를 통해 코드를 만들어 놓았습니다. 이제는 테스트 코드를 아래와 같이 만들어 보겠습니다.

```JavaScript
//Editor.js
import Editor from '../Editor';
let ed = new Editor;
it('detect URL ', () => {
  expect(ed.detectURL("my www.devpools.kr ")).toEqual("www.devpools.kr");
});
```
어떤 text값이 들어 오더라도 URL을 반환을 해 주는데 여러개가 있을지라도 하나의 URL을  반환을 받는
테스트 코드를 짜 보았습니다.

이렇게 실행을 시키면
```bash
PASS  src/App.test.js
FAIL  src/__tests__/Editor.js
 ● detect URL

   expect(received).toEqual(expected)

   Expected value to equal:
     "www.devpools.kr"
   Received:
     "undefined"

   Difference:

   Comparing two different types of values:
     Expected: array
     Received: undefined

     at Object.<anonymous> (src/__tests__/Editor.js:4:44)

Test Summary
› Ran all tests.
› 1 test failed, 1 test passed (2 total in 2 test suites, run time 0.125s)

Watch Usage
› Press o to only run tests related to changed files.
› Press p to filter by a filename regex pattern.
› Press q to quit watch mode.
› Press Enter to trigger a test run.
```
와 같이 나오고 PASS 는 녹색 FAIL은 빨강색으로 분리가 됩니다.

해석을 하면 [www.clien.net] 을 기대했는데, undefined가 왔다. 라고 하는 군요.

그럼 일단 패스만 시켜보기 위해 다음과 같이 detectURL을 변경해 보겠습니다.

```JavaScript
detectURL(text){
    return "www.devpools.kr";
}
```
이렇게 할 경우는 당연히
```bash
PASS  src/App.test.js
PASS  src/__tests__/Editor.js
Test Summary
› Ran all tests related to changed files.
› 2 tests passed (2 total in 2 test suites, run time 0.096s)
```
모두 통과하게 됩니다.

자, 하지만 이렇게 해서는 모든 경우를 통과할 수는 없을 겁니다. 이런 텍스트를 잘 다루기 위해 많이 사용되는
방법이 정규식인데요. 아래의 test 케이스를 모두 통과하는 정규식을 한번 짜 볼까합니다.
```JavaScript
it('detect URL 1', () => {
  expect(ed.detectURL("my www.devpools.kr ")).toEqual("www.devpools.kr");
});
it('detect URL 2', () => {
  expect(ed.detectURL("http://www.devpools.kr 는 www.github.com 의 내용이 전부 궁금하다")).toEqual("http://www.devpools.kr");
});
it('detect URL 3', () => {
  expect(ed.detectURL("www.github.com 에 관해서는 http://www.devpools.kr 이 전문가다")).toEqual("http://www.devpools.kr");
});
```
1번은 그냥 하나를 확인하는 내용이고 2번과 3번은 텍스트 내의 URL 들을 모두 확인해 봐야 합니다. 하지만
URL의 경우는 http 로 시작하는 경우가 있고, 그냥 .net .com 같은 접미어로 끝나는 여러가지 경우가 있
습니다. 이 모든 경우를 다 커버할 수 있는 내용의 정규식보다는 간단하게 http(혹은 https) 로 시작하는 패
턴과 www 로 시작하는 패턴을 파악해서 배열로 반환하도록 해보겠습니다. 둘다 존재한다면 http 까지 전체 있
는 URL을 먼저 반환하면 더 좋겠죠.
```JavaScript
detectURL(text){
  var urls = text.match(/(https?:\/\/[^\s]+)/g)||text.match(/(www.[^\s]+)/g);
  if(urls.length>0) return urls[0];
  else return undefined;
}
```
혹시 관련해서 좋은 정규식 패턴을 아시는 분이 계시면 답변 주시면 소스를 변경하겠습니다. 혹은 PU는 더 두팔
벌려 환영하겠습니다.

위와 같은 소스를 반영을 했더니 npm test는 모두 녹색 PASS를 반환합니다.

```bash
PASS  src/App.test.js
PASS  src/__tests__/Editor.js
Test Summary
› Ran all tests.
› 4 tests passed (4 total in 2 test suites, run time 0.106s)

Watch Usage
› Press o to only run tests related to changed files.
› Press p to filter by a filename regex pattern.
› Press q to quit watch mode.
› Press Enter to trigger a test run.
```

#### 폼 제출하기 전에 고려할 사항
이제 클라우드 서비스에 반영할 준비는 거의 끝나가는데요. 기본적으로 편집기에 있는 값을 던지기 전의 준비사항
만 더 살펴 볼까요. 일단 편집기에 값이 있는지 없는지에 대한 확인을 해 봐야 할 거 같습니다.

편집기의 값이 존재하고 string 값이 들어왔을 때에만 제출하는 코드를 짜야할 것이라고 판단할 때 테스트 코드
는 다음과 같이 정의를 하면
```JavaScript
it('hasValue 1',()=>{
  expect(ed.hasValue(1)).toEqual(false);
});
it('hasValue 2',()=>{
  expect(ed.hasValue(new Date)).toEqual(false);
});
it('hasValue 3',()=>{
  expect(ed.hasValue("1")).toEqual(true);
});
it('hasValue 4',()=>{
  expect(ed.hasValue()).toEqual(false);
});
it('hasValue 5',()=>{
  expect(ed.hasValue({})).toEqual(false);
});
it('hasValue 6',()=>{
  expect(ed.hasValue([]])).toEqual(false);
});
```

실행 코드는 다음과 같습니다.
```JavaScript
hasValue(value){
  if((value && (typeof value) === "string"))
    return (!value)?false:(value.trim()===""?false:true);
  else return false;
}
```

결과는 당연히
```bash
PASS  src/App.test.js
PASS  src/__tests__/Editor.js
Test Summary
› Ran all tests related to changed files.
› 8 tests passed (8 total in 2 test suites, run time 0.092s)
```
와 같이 나옵니다


이제 다음번에는 firebase 를 이용한 입력과 조회를 해 봐야겠습니다.

지금까지의 Editor.js 소스는 다음과 같습니다.

```JavaScript
import React, { Component } from 'react';
import './Editor.css';
import Profile from './Profile';

class Editor extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPaste = this.onPaste.bind(this);
    this.editorChange = this.editorChange.bind(this);
    this.getCard = this.getCard.bind(this);
    this.hasValue = this.hasValue.bind(this);
    this.detectURL = this.detectURL.bind(this);
    this.state ={
      embedlyUrl : undefined,
      content : undefined
    }
  }
  onPaste(event){
    event.clipboardData.items[0].getAsString(text=>{
      if(this.detectURL(text)){
        this.setState({embedlyUrl:text});
      }
    })
  }
  editorChange(event){
    let checkText = this.detectURL(event.currentTarget.textContent);
    if(!this.state.embedlyUrl&&
        (event.keyCode===32||event.keyCode===13)&&
        checkText){
      this.setState({embedlyUrl:checkText,content:event.currentTarget.textContent});
    }else{
      this.setState({content:event.currentTarget.textContent});
    }
  }
  getCard(embedlyUrl){
    if(embedlyUrl){
      return(
        <div>{embedlyUrl}</div>
      );
    }else{
      return(<div/>);
    }
  }
  hasValue(value){
    if((value && (typeof value) === "string"))
      return (!value)?false:(value.trim()===""?false:true);
    else return false;
  }
  handleSubmit(event){
    this.props.submit();
  }
  detectURL(text){
    var urls = text.match(/(https?:\/\/[^\s]+)/g)||text.match(/(www.[^\s]+)/g);
    if(urls.length>0) return urls[0];
    else return undefined;
  }
  render() {
    return (
      <div className="wrapEditor">
        <Profile isAnonymous={this.props.isAnonymous}/>
        <div className="textEditor">
          <div className="innerEdit"
            contentEditable="true"
            placeholder="글쓰기..."
            onPaste={this.onPaste}
            onKeyUp={this.editorChange}></div>
          {this.getCard(this.state.embedlyUrl)}
        </div>
        <div className="actionBar">
          <button className="upload"
            disabled={!this.hasValue(this.state.content)}
            onClick={this.handleSubmit}><span>스탠드업!</span></button>
        </div>
      </div>
    );
  }
}
export default Editor;
```

설명하지 않은 함수 중에 getCard라는 함수가 있습니다. 이 함수는 나중에 편집기에 카드가 들어가는 모습을 보
기 위해 URL이 들어갈 수 있도록 간단하게 설계해 두었습니다. Embed.ly 관련 내용이 들어갈때 가장 많은 설
명이 들어갈 컴포넌트가 될 것입니다.





# Day4

## User Story 2

```
 김개발이 사이트를 방문해서 자신이 어제 유심하게 읽은 글을 올릴 수 있다. 이렇게 하면 다른 사람들이 볼 수 있다.
  * 에디터 창은 하나만 있고 거기서 글을 작성하고 업로드 하면 글이 외부 클라우드 공간에 저장이 된다.
```
계속 하겠습니다.

### Firebase DAO(Data Access Object) 만들기
JavaScript라서 DAO패턴을 좋아하지는 않지만 굳이 이해를 돕기 위해 DAO라는 이름을 명명하고 작업을 하겠
습니다. 인터페이스를 만들고  Implementation 소스를 만드는 작업까지는 굳이 하지 않겠습니다.

#### 테스트 코드를 짜 보자.
일단 Mocking을 할 데이터를 만들어야 하겠죠.

__tests__ 폴더 밑에 CloudDao.js 를 만듭니다.

```JavaScript
//CloudDao.js 파일
var article = {
  user : "Genji",
  content : "겐지가 함께한다.",
  urls:[{
    url : "https://namu.wiki/w/%EA%B2%90%EC%A7%80(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
    title:"겐지(오버워치)",
    description : "블리자드 엔터테인먼트 사의 FPS 게임 오버워치의 영웅.기계가 되어버린 몸을 받아들여 내면의 평화를 찾은 강력한 사이보그 닌자.",
    imageUrl : "https://image-proxy.namuwikiusercontent.com/r/https%3A%2F%2Fd1u1mce87gyfbn.cloudfront.net%2Fmedia%2Fartwork%2Fgenji-concept.jpg",
    imgWidth: 640,
    imgHeight : 480,
    thumbnailUrl : "https://image-proxy.namuwikiusercontent.com/r/http%3A%2F%2Fi66.tinypic.com%2F10mpje9.jpg" ,
    thumbnailWidth : 80,
    thumbnailHeight :80
  }]
}
```
Mocking을 위한 데이터를 만들어 보겠습니다. 이 데이터가 잘 입력이 되고 수정이 되고 삭제가 되면서 리스트
를 확인하는 작업을 해 보겠습니다.

firebase를 사용하기 위해서 모듈을 설치합니다. 이미 설치된 모듈이 아니기 때문에 다음의 명령어를 사용합니다.

```
$npm install firebase --save
```
#### DAO 만들길
자 이제 Dao를 어떻게 만들면 좋을까요?

먼저 Dao에는 입력, 수정, 삭제, 조회(insert, update, delete, list)는 기본적으로 들어갈 것이고,
한건 검색을 위한  getArticle이 필요할 것입니다. 일단 입력에 관한 유저 스토리 이지만 Dao는 한꺼번에
작성할 수 있는 것은 먼저 작성해 보도록 하겠습니다.

사용자 스토리의 기본 중 하나는 확인할 수 있어야 한다인데, 입력이 되면 조회를 할 수 있어야 하기 때문입니다.

> *여기서 잠깐*
> 사용자 스토리는 INVEST를 기반으로 하는데
> Independent : 독립적이어야 한다
> Negotiable : 조절 가능해야 한다
> Valuable : 사용자에게 가치가 있어야 한다.
> Estimatable : 측정가능해야 한다
> Small : 작아야 한다
> Testable : 테스트 가능해야 한다.
> 우리가 정해 놓은 사용자 스토리를 위에 맞춰 변경하는 작업도 중간 중간 이루어 질 것입니다.

일단 입력을 위한 테스트 코드를 아래와 같이 작성해 보겠습니다.

```JavaScript
it('upload article',function(){
  let inserted = dao.insert( article );
  // 입력이 되었는지 key 값을 가지고 검색해서 확인
  dao.getArticle(key).on('value',(snapShot)=>{
    //키 값이 같은지 테스트 케이스 작성
    expect(snapShot.key).toEqual(key);
  });
  return inserted;
});
```
값을 입력하고 key로 검색을 해서 같은 값을 가지고 있는지 확인해 보는 코드를 넣었습니다.

자, 그러면 여기 기본적으로 DAO 에 insert 와 getArticle 함수를 작성해 보겠습니다.

src 폴더 밑에 FirebaseDao.js 파일을 만듭니다.

```JavaScript
import firebase from 'firebase';
/*
*  initializeFirebaseApp
*/

export default class FirebaseDao {
  constructor(config){
    //firebase remote 서버 정보 셋팅
    firebase.initializeApp(config);
  }
  insert(postData){
    return firebase.database().ref().child('posts').push(postData);
  }
  getArticle(key){
    return firebase.database().ref('/posts/' + key);
  }
}
```

자, 이제 npm test를 실행하면 되는데, 다음의 셋팅을 하지 않으면 데이터 값이 로딩이 되지 않을 것입니다.
firebase는 인증 시스템을 갖고 있는데, 일단 그림과 같이 anonymous가 입력할 수 있도록 해 두고 이후
인증관련 모듈을 같이 붙인 후에 셋팅을 바꿔보도록 하겠습니다.

![Serverless_firebase08](./doc_img/Serverless_firebase08.jpg)

[그림 1]

StandUp-> Database -> 규칙 메뉴를 따라가면 될 듯 합니다.

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

자 이제 npm test 를 실행하고 나면
![Serverless_firebase09](./doc_img/Serverless_firebase09.jpg)

[그림2]

아래와 같은 결과와 함께 외부 firebase 에 저장이 됩니다.

firebase 웹 콘솔에서 확인해 봐야겠죠?

![Serverless_firebase10](./doc_img/Serverless_firebase10.jpg)

[그림3]

그림과 같이 firebase 웹 콘솔에서 Database 의 데이터 탭에서 방금 올린 데이터를 확인할 수 있습니다.

이렇게만 데이터를 쌓아도 되지만 개인화 서비스를 위해 username 기반으로 데이터를 쌓이도록 변경해 보겠습니다.

이런 경우는 key값을 먼저 만들고 같은 key를 가지는 posts와 user-post 데이터 베이스를 만들어야 하는
관계로 update 함수를 작성하도록 하겠습니다. 아직 user 정보를 어떻게 가지고 올지 결정하지 않았으므로
똑같이 genji 폴더에만 작성하도록 하겠습니다.

해당 관련된 테스트 코드는 다음과 같습니다.
```JavaScript
it('upload article and edit and delete',function(){
  //공통 키값
  let key = dao.newKey();
  //입력
  var updated = dao.update( key, article1 );
  dao.getArticle(key).on('value',(snapShot)=>{
    //같은 값이 들어 갔는지 확인
    expect(snapShot.key).toEqual(key);
    //수정
    dao.update(key, article2);
    //삭제. 데이터의 확인을 위해서는 주석 처리.
    dao.remove(key);
  });
  return updated;
});
```
먼저 key 값을 공통으로 만들고, key 값을 기준으로 입력, 수정, 삭제할 수 있습니다.

FirebaseDao 전체 소스는 다음과 같습니다.
```JavaScript
import firebase from 'firebase';
/*
*  initializeFirebaseApp
*/

export default class FirebaseDao {
  constructor(config){
    firebase.initializeApp(config);
  }
  //더 이상 입력에 사용하지 않습니다.
  insert(postData){
    return firebase.database().ref().child('posts').push(postData);
  }
  // 수정
  update(key,postData){
    var updates = {};
    updates['/posts/' + key] = postData;
    updates['/user-posts/genji/' + key] = postData;
    return firebase.database().ref().update(updates);
  }
  // 삭제, delete는 예약어 이므로 remove를 사용
  remove(key){
    firebase.database().ref('/posts/').child(key).remove();
    return firebase.database().ref('/user-posts/genji/').child(key).remove();
  }
  //database에 걸린 이벤트를 종료
  off(){
    return firebase.database().ref().off();
  }
  //새로 빈 데이터를 만들고 key값만 return
  newKey(){
    return firebase.database().ref().child('posts').push().key;
  }
  //한개의 글을 얻어 온다.
  getArticle(key){
    return firebase.database().ref('/posts/' + key);
  }
}
```

자 이제 테스트 코드 하나로 입력-> 수정 -> 삭제를 하는 코드베이스가 완성되었습니다.

### 사용자 스토리2 입력하기

```
업로드 하면 글이 외부 클라우드 공간에 저장이 된다.
```
부분을 위한 테스트 코드와 DAO를 완성했으니 프레젠테이션 레이어와 결합해 보도록 하겠습니다.

지금 에디터에서 글을 쓰고 스탠드업! 버튼을 누를 경우에

![Serverless_firebase11](./doc_img/Serverless_firebase11.jpg)

[그림4]

이루어지는 이벤트는 다음과 같습니다.
```html
<button className="upload"
            disabled={!this.hasValue(this.state.content)}
            onClick={this.handleSubmit}><span>스탠드업!</span></button>
```
이 handleSubmit을 어떻게 작성하면 좋을까요? onClick 이벤트가 호출이 되는 시점부터는 데이터의 영역인데
데이터의 흐름은 한군데서 파악하는 것이 개발을 용이하게 합니다. 게다가 우리는 firebase 처럼 우리가 직접
컨트롤하지 않는 데이터의 흐름을 가지고 있기 때문에 내부의 데이터의 흐름은 App.js 같은 애플리케이션 진입
점으로 위임하는 편이 현명합니다.

그럼 이 "데이터"의 기본 단위가 될 Article 을 우리는 미리 정의했었습니다. 처음에 Mocking을 위한 데이타
라고 한 부분의 article을 반환하는 임시 파일을 만들겠습니다. 이렇게 하는 이유는 테스트의 완결성을 위해서
입니다.

Article.js 라는 파일을 src 폴더 아래에 만들고 테스트 코드는 아래와 같이 작성합니다.
```JavaScript
import Article from '../Article';
var article1 = Article();
it('Object assign', function(){
  var article2 = Object.assign({},article1);
  article2.user = "Genji";
  article2.content = "다음";
  article2.urls[0].url = "http://www.daum.net";
  //article1의 값이 잘 전달되었는지 확인.
  expect(article1.urls[0].imgWidth).toEqual(article2.urls[0].imgWidth);
})
```

왜 이런 작업을 했을까요? 간단히 말씀 드리면 4일차 작업에는 url로 카드를 만들 때 외부에서 URL에 해당하는
메타정보(title, description, thumbnail image)등의 작업을 하지 않기 때문입니다. 그래서 일단은
더미 작업을 하고 이 부분을 카드를 가져오는 방법으로 전환하는 과정을 5일차에 진행하려고 하기 때문입니다.

그런 과정중에 Article의 URL 이외의 부분은 자동으로 채우게 하도록 Mocking 데이타를 활용해서 보도록 하는
것입니다.

자 이제 다시 에디터로 돌아가겠습니다.

![Serverless_firebase12](./doc_img/Serverless_firebase12.jpg)

[그림5]

Editor 안의 state는 보시다시피 embedlyUrl, content 두가지를 설정해 두었습니다.
이 embedlyUrl을 App.js에게 값을 전달해 이후 list 컴포넌트를 만드는 사용자 스토리까지 전달되기 전까지
가 지금의 해결 과제입니다.

[그림 5] 에 묘사가 되어 있듯이 Editor.js 의 handleSubmit은 props 속성으로 App.js와 연결되어
있습니다. handleSubmit event는 App.js의 submit 을 가리키게 되어 있는 것이죠.

그래서 submit 은 Article을 변수로 받아서 firebase 에 저장하는 역할을 하면 됩니다.

App.js의 submit을 아래와 같이 변경해 줍니다.
```JavaScript
import FirebaseDao from './FirebaseDao'
import config from './config'
(중략)
class App extends Component {
  //중략
  constructor(){
    super();
    this.dao = new FirebaseDao(config);
    this.submit = this.submit.bind(this);
  }
  submit(article){
    if(article){
      let key = this.dao.newKey();
      let updated = this.dao.update( key, article );
      return updated;
    }
  }
  //후략
}
```

Editor.js 파일은 아까 언급한 Article.js 를 이용해 handleSubmit을 아래와 같이 작업해 줍니다.
```JavaScript
handleSubmit(event){
  let article = Object.assign({}, Article());
  article.user = "Genji";
  article.content = this.state.content;
  article.urls[0].url = this.state.embedlyUrl;
  this.props.submit(article);
}
```

![Serverless_firebase13](./doc_img/Serverless_firebase13.jpg)

그림과 같이 작성을 하고 업로드를 하면
![Serverless_firebase14](./doc_img/Serverless_firebase14.jpg)

훌륭하게 값이 들어간 것을 확인할 수 있습니다.

이제 입력한 목록만 간단하게 보여지는 것을 보고는 마무리 하겠습니다.

FirebaseDao에 list에 관련된 함수를 추가해 봅시다.

일단 테스트 코드를 아래와 같이 작성해 봅니다
```JavaScript
//__tests__/CloudDao.js
it('list article', function(){
  dao.list(25).once('value',(dataSnapshots)=>{
    dataSnapshots.forEach((dataSnapshot)=>{
      keys.push(dataSnapshot.key);
      var article = dataSnapshot.val();
      expect(article.user).toEqual("Genji");
    })
  });
})
```

DAO 에서 25개까지의 결과만 가지고 와서 데이타의 값을 비교하는 형태이고 콜백함수는 firebase 문서에서 참
조해서 작성했습니다.

```JavaScript
//src/FirebaseDao.js
list(pagesize){
  return firebase.database().ref('/posts/')
          .orderByKey().limitToLast(pagesize);
}
```
위와 같이 작성하면 npm test를 통해 값이 훌륭하게 가져와 있는지 확인할 수 있습니다.

이제 App.js 파일을 고쳐 보겠습니다.

React 컴포넌트의 생명주기에서 mounting 과정은 [그림6] 과 같습니다.

![mounting](./doc_img/mounting.jpg)

[그림6]

componentWillMount 메쏘드를 이용해 데이타 이벤트를 등록합니다.

가지고 온 article들은 상태(state)값에 등록하기 위해 생성자 함수에 먼저 상태값을 등록해 둡니다.

```JavaScript
this.state = {
  articles:[]
}
```

ComponentWillMount와 componentWillUnmount 값을 정의합니다.
```JavaScript
componentWillMount() {
  //데이터 조회 이벤트를 등록합니다.
  this.dao.list(25).on('value',(dataSnapshots)=>{
    var items = [];
    dataSnapshots.forEach(function(dataSnapshot){
      //..중략.. 테스트코드와 같게 작성합니다.
    })
    if(items && items.length>0){
      // state값에 셋팅
      this.setState({
        articles: items.reverse()
      });
    }
  });
}
componentWillUnmount(){
  //이벤트 삭제
  this.dao.off();
}
```

render 메쏘드에도 약간의 변화가 있습니다.
기존의 Editor 에 스프레스 함수를 설명하게 넘긴 수많은 속성(props)은 애플리케이션의 견고성을 위해 필요한
값만 넘기고 firebase에 저장된 목록을 가져오는 작업을 해 보겠습니다.

HTML 에서 목록을 의미하는 태그는 UL, OL입니다. 그 태그를 이용해서 render내의 jsx 는 아래와 같이 작업
해 줍니다

```JavaScript
<Editor submit={this.submit} isAnonymous={this.isAnonymous}/>
<ul>
{this.getArticles()}
</ul>
```

getArticles 메쏘드는 Article의 상태를 가져오는 함수입니다.

```JavaScript
getArticles(){
  let lis = [];
  for(let i=0;i<this.state.articles.length;i++){
    lis.push(<li key={this.state.articles[i].key}>{this.state.articles[i].content}</li>);
  }
  return lis;
}
```
이렇게 작성하고 나면 목록이 다음 [그림7]과 같이 완성됩니다.

![Serverless_firebase15](./doc_img/Serverless_firebase15.jpg)

[그림7]

다음 번에는 이제 목록과 입력에 사용할 카드를 만들고 URL값을 어떻게 제대로 입력하는지 알아보도록 하겠습니다.

.




# Day5

## 사용자 스토리3

```
3. 김개발이 작성한 글이 목록으로 보여진다. 이렇게 함으로써 다른 사람들이 목록을 확인할 수 있다.
```

계속 하겠습니다.
이번에는 글 목록과 편집기를 풍성하게 해 줄 Card를 작성하도록 하겠습니다.
시작하기 전에
```bash
$git checkout day4
```
를 통해 day4 branch 부터 시작하는 것을 잊으면 안되겠지요.

## Card 만들기

사이트 링크가 편집기에 작성이 되면 어떻게 보여질 것인지에 대한 정의가 이번에는 내려져야 할 것입니다.

![Serverless_firebase16](./doc_img/Serverless_firebase16.jpg)
[그림1]

그림1에서 보여지는 것과 같이 썸네일 이미지는 그 이미지의 url과 width와 height가 있어야 제대로 화면에 보여질 수 있을 것이고, 제목(title)과 설명(description) 그리고 사이트의 링크가 포함되어져 있어야 할 것입니다.

이렇게 카드를 만들고 나면 이 카드는 목록 작업에도 똑같이 이루어질 수 있을 것입니다.

그러면 일단, Article로 만들어 놓은 Mock 데이타를 바탕으로 진행을 해 보도록 하겠습니다.

먼저 카드를 한번 만들어 볼까요?

src 폴더 아래 Card.js라는 파일을 만들고 아래와 같이 작성해 줍니다.

```JavaScript
import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render(){
    let cardInfo = this.props.cardInfo;
    if(cardInfo){
      return(
        <a className="card" href={cardInfo.url} target="_blank">
          <div className="card_image" >
            <img src={cardInfo.thumbnail_url} alt={cardInfo.title} className="width100 card_img"/>
          </div>
          <div className="borderTop">
          <div className="card_text">
            <p className="card_title">{cardInfo.title}</p>
            <p className="card_desc">{cardInfo.description}</p>
            <p className="card_provider">{cardInfo.provider_url}</p>
          </div>
          </div>
        </a>
      )
    }else{
      return null;
    }
  }
}
```
똑같이  Card.css를 다음과 같이 만들어 줍니다.
```CSS
.card{
  color: #222;
  text-decoration: none;
  position: relative;
  border: 1px solid rgba(79, 73, 75, 0.28);
  display: block;
  overflow: hidden;
  margin: 12px 12px 12px 12px;
  min-height: 83px;
  font-size: 10px;
}
.card_image{
  overflow: hidden;
  left: 0;
  top: 0;
  max-height: 180px;
}
.width100{
  width: 100%;
  height:auto;
  background-size: 100% 100%;
}
.card_img{
  height: 100%;
  transform: translateX(-50%);
  position: relative;
  left: 50%;
  border-bottom: 1px solid rgba(79, 73, 75, 0.28);
}
.card_text{
  margin-left: 5px;
  min-height: 80px;
  padding: 5px;
  box-sizing: border-box
}
.card_title{
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card_desc{
  margin: 5px 0 0;
  font-size: 11px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 여러 줄 자르기 추가 스타일 */
  white-space: normal;
  line-height: 1;
  height: 3em;
}
.card_provider {
  margin: 5px 0 0;
  font-size: 10px
}
.borderTop{
  border-top: 1px solid rgba(79, 73, 75, 0.28);
}

```
이렇게 까지 적용하고 나면 카드를 위한 적용사항은 모두 진행 되었다고 볼 수 있습니다.
한번 Mock 데이타를 가지고 확인해 볼까요? Test 를 눈으로 해 보기 위해서 이번에는 App.js를 변경해 보겠습니다.

그 전에 Article 은 다음과 같이 변경해서 불확실성을 좀 줄이도록 하겠습니다. urls를 배열로 받은 부분은
cardInfo라는 단일 객체로 변경하겠습니다.
```JavaScript
export default function getArticle(
  user = "Genji",
  content = "겐지가 함께한다.",
  url = "https://namu.wiki/w/%EA%B2%90%EC%A7%80(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  title="겐지(오버워치)",
  description = "블리자드 엔터테인먼트 사의 FPS 게임 오버워치의 영웅.기계가 되어버린 몸을 받아들여 내면의 평화를 찾은 강력한 사이보그 닌자.",
  thumbnail_url = "https://image-proxy.namuwikiusercontent.com/r/http%3A%2F%2Fi66.tinypic.com%2F10mpje9.jpg" ,
  thumbnail_width = 80,
  thumbnail_height =80,
  provider_name = "namu wiki"
){
  return {
    user : user,
    content : content,
    cardInfo:{
      url : url,
      title:title,
      description : description,
      thumbnail_url : thumbnail_url,
      thumbnail_width : thumbnail_width,
      thumbnail_height :thumbnail_height,
      provider_name : provider_name
    }
  }
}
```
이후 App.js파일은 다음과 같이 변경합니다.
```JavaScript
import Card from './Card'
import getArticle from './Article'

class App extends Component {
  constructor(){
    //...중략..
    this.cardInfo = getArticle().cardInfo;
  }
  //...중략..
  render() {
    //...중략...
      <Card cardInfo = {this.cardInfo}/>
  }
}
```
이렇게 확인해 보면 다음과 같은 화면을 확인할 수 있습니다.

![그림2](./doc_img/Serverless_firebase16.jpg)

하지만 일단 Card를 확인했으면 App.js 파일은 되돌리고, Article.js파일은 __tests__ 파일 폴더 아래
로 내립니다.

이럴때 사용하기 좋은 툴이 git 인데 App.js 파일 이외의 파일들은 커밋하고 reset 해 버리면 원래 파일로
원상복귀 됩니다.

```bash
$standup>mv Article.js ./__tests__/Article.js
$standup>git add Card.js Card.css ./__tests__/Article.js
$standup>git commit -m "Card added and Article moved"
$standup>git reset --hard
```

이렇게 Article.js파일을 테스트 파일로 빼 버리는 거는 Mock으로써 이제 그 역할을 다 했기 때문이고, 실제
돌아가는 수행에 필요한 역할을 다 했기 때문입니다. 이제 이 Card에 들어갈 데이타를 얻어올 방법을 찾아볼까요?

### Embed.ly

Embed.ly 서비스는 oEmbed open format을 토대로 만들어진 contents 삽입(embed) 서비스 입니다.
예를들어 youtube 같은 provier의 경우

```
http://www.youtube.com/oembed?url=http%3A//youtube.com/watch%3Fv%3DM3r2XDceM6A&format=json
```
의 형태로 질의를 보내면
```json
{
	"version": "1.0",
	"type": "video",
	"provider_name": "YouTube",
	"provider_url": "http://youtube.com/",
	"width": 425,
	"height": 344,
	"title": "Amazing Nintendo Facts",
	"author_name": "ZackScott",
	"author_url": "http://www.youtube.com/user/ZackScott",
	"html":
		"<object width=\"425\" height=\"344\">
			<param name=\"movie\" value=\"http://www.youtube.com/v/M3r2XDceM6A&fs=1\"></param>
			<param name=\"allowFullScreen\" value=\"true\"></param>
			<param name=\"allowscriptaccess\" value=\"always\"></param>
			<embed src=\"http://www.youtube.com/v/M3r2XDceM6A&fs=1\"
				type=\"application/x-shockwave-flash\" width=\"425\" height=\"344\"
				allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed>
		</object>",
}
```
의 형태로 답변을 주게 되어 있습니다.

이렇게 oEmbed API 포맷을 통해 다른 사이트의 컨텐츠를 쉽게 블로그나 게시판에 삽입(embed)할 수 있는 것
이죠.

하지만, 우리가 하려고 하는 것은 각각의 사이트에서 사이트의 타이틀과 description, 이미지들을 뽑아 내는
일들을 해야합니다. 보통 오픈 소스들을 찾아서 개발을 하려고 보면 Facebook에서 사용중인 og meta 태그들
을 많이 사용하고 있습니다. 페이스 북이 카드로 인식하게 하려면 og 태그를 써야하는 셈이 된 것인거죠.
게다가 og 태그를 아직 쓰지 않은 작은 사이트들은 이런 부분에 대한 지원이 없어서 카드에 이미지는 안나오는
경우를 종종 보곤 합니다.

이런 여타 사이트들을 돌아 다니면서 해 줘야 하는 작업들. 예를 들어 og 태그가 없을 때 어떻게 처리할 지,
이미지가 없을때 어떻게 처리할지 등등, 그리고 결론적으로 내가 원하는 JSON 으로 받고 싶은 데이타 처리 작업
등의 일들을 oEmbed 포맷 API로 제공을 해 주는 사이트가 이 Embed.ly 입니다.

우리는 여기에서 우리가 Card를 만들 때 드는 정보를 얻어낼 것입니다.

![Serverless_firebase18](./doc_img/Serverless_firebase18.jpg)
[그림 3]

이 API를 얻는 다는 것은 API key를 우선 얻는다는 것이겠죠?

회원가입이 꽤나 재밌는데 일단 개발자인지를 확인하는 문제를 제출합니다. 너무 쉬워서 하품이 날 지경이니 긴장
은 안하셔도 됩니다.

가입을 하고 나면 처음은 프로젝트를 만들게 됩니다. standup 으로 만들어 보겠습니다.
![Serverless_firebase20](./doc_img/Serverless_firebase20.jpg)
[그림4]

그리고 팀 멤버를 초대하는 화면은 skip하셔도 됩니다. 이후 email 확인을 하고 나면 서비스를 이용할 수 있는데
Manage API key를 통해 발급받을 수 있습니다.


회원 가입을 하고 로그인 하면 다음과 같이 카드나 iframe 소스를 얻는 실습을 해볼 수도 있습니다.

![Serverless_firebase19](./doc_img/Serverless_firebase19.png)
[그림5]

하지만 우리에게 필요한 것은 API로 JSON을 얻는 것이겠죠?

얻은 API key는 .env 파일에 저장하고 config.js파일을 통해 가져 오는데
```JavaScript
var firebase_config = {
 apiKey: process.env.REACT_APP_FIREBASE_KEY,
 authDomain: process.env.REACT_APP_AUTH_DOMAIN,
 databaseURL: process.env.REACT_APP_DB_URL,
 storageBucket: process.env.REACT_APP_STRG_BKT,
 messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID
}
export var embedlyKey = process.env.REACT_APP_EMBEDLY_KEY;
export default firebase_config;
```
와 같이 저장하면 됩니다.

API가 잘 작동하는지 확인해 보기 위해 call을 직접해 보도록 하겠습니다.
```
https://api.embedly.com/1/oembed?url=https:%2F%2Fgithub.com%2Fmzabriskie%2Faxios&key=
```
key 부분만 여러분이 얻은 키로 채워 주시면 다음과 같은 결과를 얻어올 수 있습니다.

```json
{  
   "provider_url":"https://github.com",
   "description":"axios - Promise based HTTP client for the browser and node.js",
   "title":"mzabriskie/axios",
   "thumbnail_width":400,
   "url":"https://github.com/mzabriskie/axios",
   "thumbnail_url":"https://avatars2.githubusercontent.com/u/199035?v=3&s=400",
   "version":"1.0",
   "provider_name":"GitHub",
   "type":"link",
   "thumbnail_height":400
}
```

이제 URL을 호출해 직접 API를 통해 카드를 만들어 보도록 하겠습니다.

### axios.js
request 를 만들 클라이언트 모듈로 무엇을 쓸까하는 고민은 많은 개발자들이 늘 겪는 고민일 거라고 생각합
니다. 안드로이드의 경우는 retrofit 을 많이 쓰는 거 같은데 프론트엔드에서 많이 쓰는 거는 어떤게 있을까
요? 가장 유명하고 잘 알려져 있는 예로는 jquery가 있습니다. $.get으로 대표되는 놀라운 간편성 및 DOM
과 직접 연계 및 다양한 옵션이라는 강력한 무기를 가지고 있죠.

하지만, React 및 Node.js 환경에서는 이걸 쓰기에는 조금 꺼려집니다. 첫번째는 강점인 DOM 과의 궁합인
데요. 이것이 왜 약점이 되는가 하면 React는 Virtual DOM을 이용해 웹 컴포넌트를 사용한다는 점에서 콜
백 처리 및 DOM 의 중복 처리 여부의 단점이 있고 Node환경에서는 굳이 사용하지 않아도 될 DOM컴포넌트의
의존성 때문에 JSDOM이라는 무거운 모듈을 같이 로딩해야 한다는 어려움이 있습니다.

그래서 superagent 를 포함한 가벼운 request용 프레임워크들이 최신 대세가 되었는데요. 제가 이번에 얘기
하고 싶은 모듈은 axios.js입니다.

https://github.com/mzabriskie/axios

![Serverless_firebase20](./doc_img/Serverless_firebase20.jpg)

[그림6]

이 axios.js 의 강점은 뭐니뭐니 해도 Promise 기반의 HTTP 클라이언트라는데에 있습니다.

기존의 모듈들은 주로 jquery가 해 주던 내용에서 HTTP 클라이언트 부분만 유사하게 (혹은 호환되게) 코드를
작성했지만 이 axios가 리턴해 주는 형태는 ES2015의 Promise 객체이기 때문에 현재의 자바 스크립트가 가
야할 길에서 가장 맞는 선택지라고 보여지고 게다가 Jest 테스트의 경우는 리턴값을 undefined 와 Promise
로만 받기 때문에 테스트 코드를 짤 때에도 적합합니다.

그래서 아래와 같은 코드가 가능해 집니다.

```JavaScript
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

#### 여기서 잠깐. Promise란?
> Promise 패턴은 JavaScript에서 콜백을 다루는 패턴 중에 하나입니다.
> 보통 콜백을 매개 변수로 다뤄서 함수의 매개변수로 보내는 코드
  ```JavaScript
  function callback(){
    console.log("this is callback function");
  }
  function http(){
    request.get("http://www.devpools.kr",callback)
  }
  ```
> 의 형태를 띄거나 이걸 익명함수로 바꾸면
  ```JavaScript
  function http(){
    request.get("http://www.devpools.kr",()=>{
    console.log("this is callback function");
  })
  }
  ```
> 의 모습을 띄게 됩니다.
> 하지만 이런 콜백을 여러번 호출하게 되면
> ![callback_hell](./doc_img/callback_hell.jpg)
> 이른바 콜백 지옥에 떨어지게 됩니다. 가독성도 무척이나 떨어지게 되는 셈입니다.
> 이런 일들에서 구원코자 여러 방법들이 동원 되었지만 ES2015에서 정립된 표준은 Promises 입니다.
> Promise는 위의 함수가 아래와 같이 변화하는 것입니다.
```JavaScript
  function http(){
    request.get("http://www.devpools.kr")
            .then(()=>{console.log("this is Promise!")})
            .catch((error)=>{console.log(error)})
  }
```

성공을 했을 때 then으로 빠지고, 실패를 하면 catch에 들어가는 패턴.
어디선가 보지 않았나요? 내 우리는 이미 Firebase DAO를 작성할 때에 이 패턴을 확인했습니다.

이 Axios를 이용해서 EmbedlyDao를 만들어 보겠습니다.
먼저 Test코드를 작성해 볼까요?

```JavaScript
it('Get Embedly Info From Embedly', () => {
  getEmbedly("http://www.naver.com").then((response)=>{
    expect(response.data.url).toEqual("http://www.naver.com");
  }).catch((error)=>{
    console.log(error);
  });
});
```
getEmbedly 하고 url을 넘기면 resposnse 가 오는데 response 로 오는 값의 data 에서 거꾸로 url
을 가져오면 똑같아 지면 되도록 테스트 코드를 짭니다.

이후 실제 코드는 아래와 같이 만들고

```JavaScript
import request from 'axios';
import {embedlyKey} from './config';
export default function getEmbedly(url){
  return request.get('https://api.embedly.com/1/oembed',{
    params: {
      url : url,
      key : embedlyKey
    }
  });
}
```

embedlyKey는 config 파일에 다음과 같이 추가해 줍니다.

```JavaScript
export var embedlyKey = process.env.REACT_APP_EMBEDLY_KEY;
```

이후 test 를 통해 확인해 보면 값이 true로 떨어지는 것을 확인할 수 있습니다.

## 구슬이 서말이니까 꿰어만 봅시다
이제 Card를 만들 수 있는 준비는 끝났고, 지난 글에서 Firebase에서 글의 목록을 가져오는 걸 했으니
지금은 Editor와 리스트를 다시 살펴 봐야겠죠?

일단 편집기(Editor.js)를 어떻게 바꿔야 할까요?

Article.js는 더 이상 import 할 필요는 없습니다. 편집기에 복사 붙여 넣기를 했을때, 그리고 어떤 텍스
트를 쳤을 때 detect URL을 해서 setting 해 주는 시점에  Embedly 서비스를 갖다 와야 합니다.

그래서 이런 일들을 한꺼번에 하는 getForcedState라는 함수를 다음과 같이 작성해 보도록 하겠습니다.
```JavaScript
getForcedState(embedlyUrl,content){
  return new Promise(resolve=>{
    if(embedlyUrl){
      getEmbedly(embedlyUrl).then((response)=>{
        let cardInfo = Object.assign({},response.data);
        resolve({
          embedlyUrl : embedlyUrl,
          content : content,
          cardInfo : cardInfo
        });
      }).catch((error)=>{
        resolve({
          embedlyUrl : undefined,
          content : undefined,
          cardInfo : undefined
        });
      });
    }else{
      resolve({
        content : content
      });
    }
  })
}
```
getEmbedly는 Promise 패턴을 통해 호출을 해서 데이터가 있을때 없을 때는 구분해서 상태(state) 전이를
담당하게 만듭니다.(물론 onPaste와 editorChange가 getForcedState를 호출하도록 변경하는 것도 필요
합니다. )

이렇게 한 뒤에 JSX문법이 들어가는 쪽의 getCard 함수를 Card 컴포넌트로 바꿔주고 상태 전이를 감지할 수
있도록 리액트 속성(props) 값을 연결해 줘야 하겠죠.

편집기 (Editor.js) 전체 소스는 다음과 같습니다.
```JavaScript
import React, { Component } from 'react'
import './Editor.css'
import Profile from './Profile'
import Card from './Card'
import getEmbedly from './EmbedlyDao'

class Editor extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPaste = this.onPaste.bind(this);
    this.editorChange = this.editorChange.bind(this);
    this.hasValue = this.hasValue.bind(this);
    this.detectURL = this.detectURL.bind(this);
    this.getArticle = this.getArticle.bind(this);
    this.getForcedState  = this.getForcedState.bind(this);
    //state 에 embedlyUrl, content, cardInfo를 가지도록 변경합니다
    this.state={
      embedlyUrl : undefined,
      content : undefined,
      cardInfo : undefined
    };
  }
  //embedly 서비스를 통해 카드에 들어갈 값을 가져 옵니다.
  getForcedState(embedlyUrl,content){
    return new Promise(resolve=>{
      if(embedlyUrl){
        getEmbedly(embedlyUrl).then((response)=>{
          let cardInfo = Object.assign({},response.data);
          resolve({
            embedlyUrl : embedlyUrl,
            content : content,
            cardInfo : cardInfo
          });
        }).catch((error)=>{
          resolve({
            embedlyUrl : undefined,
            content : undefined,
            cardInfo : undefined
          });
        });
      }else{
        resolve({
          content : content
        });
      }
    })
  }
  //getForcedState를 이용하도록 변경
  onPaste(event){
    event.clipboardData.items[0].getAsString(text=>{
      let checkText = this.detectURL(text);
      if(checkText){
        this.getForcedState(checkText).then((obj)=>{
          this.setState(obj);
        });
      }
    })
  }
  //getForcedState를 이용하도록 변경
  editorChange(event){
    let checkText = this.detectURL(event.currentTarget.textContent);
    if(!this.state.embedlyUrl&&
        (event.keyCode===32||event.keyCode===13)&&
        checkText){
      this.getForcedState(checkText,event.currentTarget.textContent)
          .then((obj)=>{
            this.setState(obj);
          });
    }else{
      this.getForcedState(undefined,event.currentTarget.textContent)
          .then((obj)=>{
            this.setState(obj);
          });
    }
  }
  //아직 User를 가져 오는 부분은 바뀌지 않았음으로..
  getArticle(){
    let article = {};
    article.user = "Genji";
    article.content = this.state.content;
    if(this.state.embedlyUrl){
      article.cardInfo = this.state.cardInfo;
    }
    return article;
  }

  hasValue(value){
    if((value && (typeof value) === "string"))
      return (!value)?false:(value.trim()===""?false:true);
    else return false;
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.submit(this.getArticle());
    this.setState({
      embedlyUrl : undefined,
      content : undefined,
      cardInfo : undefined
    });
  }
  detectURL(text){
    var urls = text.match(/(https?:\/\/[^\s]+)/g)||text.match(/(www.[^\s]+)/g);
    if(urls && urls.length>0) return urls[0];
    else return undefined;
  }
  //<Card cardInfo={this.state.cardInfo}/>를 통해 값을 셋팅
  render() {
    return (
      <div className="wrapEditor">
        <Profile isAnonymous={this.props.isAnonymous}/>
        <div className="textEditor">
          <div className="innerEdit"
            contentEditable="true"
            placeholder="글쓰기..."
            onPaste={this.onPaste}
            onKeyUp={this.editorChange}
            dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            <Card cardInfo={this.state.cardInfo}/>
        </div>
        <div className="actionBar">
          <button className="upload"
            disabled={!this.hasValue(this.state.content)}
            onClick={this.handleSubmit}><span>스탠드업!</span></button>
        </div>
      </div>
    );
  }
}
export default Editor;

```
이렇게 까지 하고 한번 확인해 보도록 하겠습니다.

![Serverless_embedly01](./doc_img/Serverless_embedly01.jpg)

[그림7]

편집기에서 카드는 훌륭하게 가지고 오게 됩니다. 이제 저장을 눌러 한번 데이터를 확인해 보면

![Serverless_embedly02](./doc_img/Serverless_embedly02.jpg)
[그림8]

그림 8 처럼 데이타는 잘 들어갔습니다.

이제 리스팅 함수를 만들어야겠죠?

App.js  파일로 getArticles를 통해 ul, li 로만 나열했던 부분은 과감하게 삭제를 하시고 CardList
컴포넌트를 만들어 보겠습니다.

먼저 App.js 파일의

```JavaScript
<ul>
  {this.getArticles()}
</ul>
```
부분을
```JavaScript
<CardList articles={this.state.articles}/>
```
로 변경하겠습니다. 물론 CardList 컨포넌트가 지금은 없으니 바로 에러가 뜨는 것이 정상입니다.

```JavaScript
import React, { Component } from 'react';
import Card from './Card'
import './CardList.css'

export default class CardList extends Component {
  createCard(item,index){
    return(<li className="list_row" key={item.key}>
              <pre className="common_margin grey_text">{item.content}</pre>
              {
                (item.cardInfo)?<Card cardInfo={item.cardInfo}/>:""
              }
            </li>);
  }
  render() {
    return <ul>{ this.props.articles.map(this.createCard) }</ul>;
  }
}
```
li로 넘어가는 거는 똑같은데 루프를 돌면서 Card 컴포넌트를 대입하는 형태로 변경이 됩니다.

![Serverless_embedly03](./doc_img/Serverless_embedly03.jpg)

[그림9]

그림9 같은 훌륭한 결과를 보여줍니다.

이제 거의 다 한 거 같은데 뭔가 맘에 들지 않는 부분이 보입니다. 어떤 부분인가요? 네 그렇습니다. 로그인
을 할 수 있으면 좋을 거 같습니다. 다음번에는 로그인, 사용자만의 데이타 보기등을 만들기 위해 라우터와
redux를 적용하는 작업을 해 보도록 하겠습니다.





# Day6

## 사용자 스토리4

```
1. 김개발은 아침 스탠드업 시간에 같이 이야기를 나눌 수 있는 주제를 위해 스탠드업이라는 웹 앱을 찾아간다. 이렇게 함으로써 사람들과 IT에 대한 주제로 커뮤니케이션을 할 수 있다.

2. 김개발이 사이트를 방문해서 자신이 어제 유심하게 읽은 글을 올릴 수 있다. 이렇게 하면 다른 사람들이 볼 수 있다.
  * 에디터 창에 인터넷 링크를 입력하면 자동적으로 페이지 카드가 만들어 진다. 이 때 페이지 링크는 oEmbed를 써서 동작하는데 웹 표준을 준수하고 자연스러워야 한다.
  * 에디터 창은 하나만 있고 거기서 글을 작성하고 업로드 하면 글이 외부 클라우드 공간에 저장이 된다.  

3. 김개발이 작성한 글이 목록으로 보여진다. 이렇게 함으로써 다른 사람들이 목록을 확인할 수 있다.
4. 김개발은 google ID를 가지고 로그인을 할 수 있다. 이렇게 함으로써 내가 쓴 글만 따로 모아서 볼 수 있다.
```

벌써 6일차까지 왔습니다. 조금만 더 힘내면 됩니다. 이제 사용자 스토리의 대부분은 완료한 것 같은데 하나를
더 추가해 보도록 하겠습니다.

```
김개발은 google ID를 가지고 로그인을 할 수 있다. 이렇게 함으로써 내가 쓴 글만 따로 모아서 볼 수 있다.
```

"로그인을 하는데 구글 ID로 해야한다" 라는 미션이 우리에게 주어졌습니다. 일단 사용자 스토리의 뒷쪽은 무시
하고 로그인에 집중해 보도록 하겠습니다.

<img src ="./doc_img/Serverless_auth01.jpg" width=640>
[그림1]

그림 1과 같이 로그인을 하고 나면 프로필 페이지가 바뀌는 역할을 만들어 보도록 하겠습니다.

그러기 위해서는 일단 중요한 결정이 필요합니다. 저 중간에 보이는 로그인 페이지를 어떻게 구성할 것인가.

이 "어떻게"에는 이른바 페이지 구성에 대한 논의가 필요한데, 최근에는 SPA(Single Page Application)
을 쓰게 됩니다. 모바일 환경에서는 페이지 이동중의 리소스파일(JS,CSS,이미지 파일들)의 로딩을 줄이는 기술
들이 많이 선호되는데 Ajax를 이용한 SPA구성이 점점 필수가 되어가고 있습니다.

그러면 React 에서 이 SPA를 하기 위해서는 여러가지 방법이 있겠지만 이렇게 장기적으로는 페이지가 늘어날 것
을 생각하면 React-Router 를 가장 먼저 생각해 볼 수 있습니다.

## React-Router

기존의 페이지를 설계하는 혹은 분기(routing)하는 방법은 주로 서버단에서 이루어졌습니다. Node.js 에서
많이 사용하는 Exrpess.js를 생각해 보더라도 url에 매핑되는 request와 그에 대응하는 response를
컨트롤러에서 만들어 주었다고 하면 지금 얘기하는 React-Router의 경우는 클라이언트 단에서 이런 일련의
일들이 이뤄지게 됩니다.

그것도 그럴께 URL에 따라 페이지가 바뀌는데 페이지가 바뀌는 것이 SPA 환경에서는 JavaScript 로직안에
다 들어가 있습니다.

```
$npm install react-router --save
```
작업을 통해 설치가 가능합니다.

깃헙페이지 주소는 다음과 같습니다.

https://github.com/ReactTraining/react-router

관련된 내용은 잘 숙지하시면 도움이 될텐데 저희가 만들고 있는 쪽에서는 다음과 같이 이용해 보도록 하겠습니다.

먼저 src 폴더 아래의 index.js파일을 열어보겠습니다. 사실은 여기가 진입점이지만 그동안은 App.js 파일이
컴포넌트들의 진입점인 듯 코드를 짜왔습니다. 모두 이때를 위한 복선이었다는 사실!

아래와 같은 형태로 한번 코드를 작성해 보도록 하겠습니다.
```JavaScript
import { Router, Route, IndexRoute } from 'react-router'

ReactDOM.render(
  <Provider>
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={CardList}/>
        <Route path="/login" component={Login}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
```

뭔가가 많이 달라진 느낌이 드시나요?

그동안 App.js 파일 안에 있던 CardList가 밖으로 뺴져 나와 있고 분기중의 한 옵션으로 빠져 있다는 사실
을 보게 됩니다. 이러면 이쯤에서 어떻게 articles 값을 속성으로 넘기지? state 에 대한 관리는 어떻게 하
지 하는 의구심을 가지고 바라보시는 분도 있을 듯 합니다.

관련해서 어떻게 해결할 지는 조금 더 뒤에서 살펴 보기로 하고

```
http://<your-domain-url>/
```
링크를 따라가면 CardList 컴포넌트가 호출이 되겠구나
```
http://<your-domain-url>/Login
```
링크를 따라가면 Login 컴포넌트가 호출이 되겠구나 하는 생각을 하실 수 있다고 알 수 있을 거 같습니다.

먼저 NotFound는 이 외의 URL을 외부 사용자가 임의로 치고 들어올 때를 대비해서 만들어 두었으니 다음과 같이
만들어 둡니다.

```JavaScript
export default class NotFound extends Component {
  reder(){
    return(
      <div>Not Found!</div>
    )
  }
}
```

그러고 나서 Login 페이지를 만들어 봐야죠.

## Firebase UI Auth

로그인 페이지를 어떻게 만들고 데이터를 어떻게 입력하고 인증은 어떻게 할지 생각하셨던 분이 많으셨을 거라고
생각이 듭니다.

하지만 걱정은 안하셔도 될 거 같습니다. Firebase 는 fire base web 모듈을 제공해 줍니다.
개발자를 무척이나 편하게 해 주는 거죠. src 폴더아래 Login.js 를 다음과 같이 작성만 하면 됩니다
```JavaScript
/*global firebaseui,firebase*/
import React,{Component} from 'react'
import FirebaseDao from './FirebaseDao'
import config from './config'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props){
    super(props);
    this.ui = (new FirebaseDao(config)).getUI();
  }
  componentDidMount() {
    var uiConfig = {
      'signInSuccessUrl' : window.location.origin,
      'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    };
    this.ui.start('#firebaseui-auth', uiConfig);
  }
  componentWillUnmount() {
    this.ui.reset();
  }
  render() {
    return (
      <div id="firebaseui-auth"></div>
    );
  }
};
function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
    filter: ownProps.location.query.filter
  };
}
export default connect(mapStateToProps)(Login);
```
이렇게 하고 나면 될 거라고 했는데 뭔가 의구심이 드는 사람이 있을 겁니다.
모듈 인스톨도 안하고 지나갈 수 있냐! 라는 것입니다.
아마도 주의 깊게 보신 분들이 있으실 거 같은데 페이지 제일 위에

```
/*global firebaseui,firebase*/
```

이라고 적어둔 부분이 있습니다. 네, firebaseui 의 경우는 아직 npm 모듈을 지원하지 않아서 이렇게 전역
변수로 지정을 해두고 public 폴더 아래에서 바로 firebase, firebaseui를 가져오도록 바꿔줘야 합니다.

```html
<script src="https://www.gstatic.com/firebasejs/3.6.1/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/ui/live/1.0/firebase-ui-auth.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/live/1.0/firebase-ui-auth.css" />
```

그렇게 하고 나면 그림 2와 같은 로그인 화면을 볼 수 있습니다.

<img src ="./doc_img/Serverless_auth02.jpg">
[그림2]

단, 그동안 사용했던 Firebase 참조는 주석처리를 찾아가서 해주시는 수고는 필요합니다.

``` JavaScript
//import firebase from 'firebase'
```
> 이 모듈을 작성하는 동안 깃헙 이슈에 npm을 만들어 달라는 개발자들의 아우성이 빗발쳤는데
> 드디어 npm이 지원됩니다. 다음 브랜치에서는 다시 import 하도록 바꿔서 보내겠습니다.
> 하지만 우리는 아쉬울게 없는게 외부 import하는 모듈은 어떻게 처리할 지를 배웠지 않습니까?

자 이제 로그인 페이지를 만들었는데 이게 다라고 생각하시는 분은 설마 없겠죠? 로그인 페이지가 만들어 지면
어디를 가장 먼저 바꿔야 될까요?

맞습니다. 개인 프로필 페이지를 바꾸는 작업을 해 보도록 하겠습니다.


### Profile 페이지

아직까지 Profile 페이지를 보면 사용자 인증이 적용되어 있지 않아 겐지로 나오게 되어 있는 걸 볼 수 있었습니다.
하지만, 이제는 로그인 인증에 대응하는 페이지로 바꿔 보도록 하겠습니다.

이전 페이지가 일반 함수로 만든 컴포넌트로써 isAnonymous를 속성(props) 인자로 받게 처리가 되어 있었습니다.
```JavaScript
function Profile(isAnonymous){
  //익명일 경우와 아닐 경우를 나눠서 render 해 주는 형식
  if(isAnonymous){
    return(
      ...중략...겐지 그림
    )
  }else{

  }
}
```
하지만 이 부분을 변경해 보도록 하겠습니다.
변경하기 전에 생각해 볼 것이 이제는 로그 아웃과 로그인을 처리하는 기능이 들어가야 한다는 것을 다들 인지하고
있을 겁니다. 그렇다면 로그인하기 전에는 로그인을 할 수 있는 버튼이 있어야 하고 로그인 하고 나서는 로그아웃
을 할 수 있는 버튼이 있어야 하는데 대부분의 소셜 미디어 서비스는 프로파일 이미지 쪽에 로그인 및 로그 아웃
처리가 되어 있음을 알 수 있습니다. 그렇다면 팝오버(PopOver) 를 하는 컴포넌트가 필요하겠구나 하는 생각을 하고 다음
내용을 읽어보셔야 합니다.

<img src ="./doc_img/Serverless_auth03.jpg">
[그림3]

그럼 [그림 3] 같은 팝오버(PopOver)는 어떻게 처리하면 좋을까요?

가장 간단한 방법은 HTML div 태그의 CSS 스타일의 disply 값을 변경하는 방법이 있습니다. 보통 jQuery를
썼다고 하면 $.CSS({display:"none"}) 같은 방법을 썼을 겁니다. 하지만 React에서 이런 처리는 훨씬
간단합니다. 상태(state) 에 따라 보여줄지 안 보여줄지만 결정해 주면 됩니다. 물론 전자가 더 훌륭한 방법
이라고 생각하시는 분도 있을 수 있지만 이런 형태의 코드에 익숙해 지는 것도 Virtural DOM을 이해하는 관
점에서는 생각해 볼 만한 방법이기도 합니다.

그렇다면 이 팝업은 어떻게 실행을 하면 좋을까요?
Profile.js 소스를 다음과 같이 바꿔 봅시다.

```JavaScript
//React 컴포넌트를 상속받아 생성
class Profile extends Component{
  //생성자에서 상태(state)에 들어갈 값이 이제 isAnonymous 가 아님
  //user와 isPop 으로 구분을 한다.user 의 경우는
  //사용자 객체를 저장하고, isPop은 토글로 튀어 나왔다 사라졌다를 결정하게 해 준다.
  constructor(props){
    super(props);
    this.state={
      user : undefined,
      isPop: false
    }
  }
  /*
  * 컴포넌트가 페이지에 마운트 될 때에 firebase 리스너를 걸어 준다.
  * 사용자가 존재하는 경우에는 상태를 가지고 있는다.
  * 존재하지 않는 경우는 사용자의 상태(state)전이가 undefined가 된다.
  */
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({user:user});
      }else{
        this.setState({user:undefined});
      }
    });
  }
  /*
  * pop상태를 토글한다.
  */
  popProfile(){
    this.setState({isPop:!this.state.isPop})
  }
  /*
  * 기존 프로파일 에서 PopCard 부분이 추가가 된 것을 확인할 수 있다.
  * 나머지는 firebase의 user 속성으로 대부분 변경된 것을 확인할 수 있다.
  * user 객체가 존재하지 않으면 로그인 버튼이 활성화 된다.
  */
  render(){
    let user = this.state.user;
    if(user){
      return(
          <span>
            <div className="profile_name">
              <a href="#" onClick={()=>this.popProfile()}>{user.displayName}</a>
            </div>
            <div className="profile_img_wrap">
              <img src={user.photoURL} alt="profiles" className="profile_img"/>
            </div>
            <PopCard isPop={this.state.isPop}/>
          </span>
      )
    }else{
      return (<div className="profile_name"><Link to="/login">로그인</Link></div>)
    }
  }
}
```
코드를 자세히 읽어 보셨다면 PopCard라는 컴포넌트가 새로 생겼다는 것과 로그인할 때에 Firebase를 사용한
다는 것을 알 수 있습니다. 네, Firebase ui web 컴포넌트로 로그인을 하면 콜백으로 사용자(user)객체를
반환하는데, 예전에 작성했을 때와 비교해 봤을때 속성이 photoURL 등으로 변경이 된 것을 확인할 수 있습니다.

자세하게 설명을 좀 하자면 컴포넌트가 업데이트 될 때에 firebase 에 이벤트를 걸어서 사용자가 로그인이 되면
이 컴포넌트의 사용자(user) 상태(state)가 변경이 되게 해 줍니다. 이렇게 하면 사용자의 로그인 로그아웃에
따라 Profile 컴포넌트는 자동으로 화면을 바꿔주게 되는 것입니다.

이제 그려면 PopCard 즉 팝오버(PopOver) 되었을 때에, 보일 화면을 그려 봅시다.
로그인 버튼을 누를 때만 튀어나오면 되므로, 일단 로그아웃 버튼만 하나 삽입해 보도록 하겠습니다.

```JavaScript
/*global firebase*/
import React ,{Component} from 'react';
import './PopCard.css';

class PopCard extends Component{
  /*
  * Firebase 로그아웃 처리를 한다.
  */
  logout(){
    firebase.auth().signOut();
  }
  render(){
    if(this.props.isPop){
      return(
        <div className="card_pop">
          <div>
            <a href="#" onClick={()=>this.logout()}>로그아웃</a>
          </div>
        </div>);
    }else{
      return <div/>
    }
  }
}
export default PopCard
```

<img src ="./doc_img/Serverless_auth04.jpg">
[그림4]

이렇게만 작성하고 나면 그림 4와 같은 화면을 볼 수 있습니다.

자 여기까지 하고 나면 로그인 및 로그아웃을 처리할 수 있습니다.

## Redux 를 사용해 보자

```
이렇게 함으로써 내가 쓴 글만 따로 모아서 볼 수 있다.
```
자, 이제 이건 어떻게 처리하면 좋을까요?

redux를 사용하면 이런 부분을 조금 더 구조적으로 처리할 수 있습니다.
CardList 가 이전에 내가 관리하던 App.js컴포넌트가 아니라 index.js로 이동했던 부분을 아까 언급했습니다.
그 대목에서 그러면 글 목록은 어떻게 가지고 오게 되는 걸까 하는 생각들 많이 하셨을 거라고 생각됩니다.

<img src ="./doc_img/Serverless_auth05.jpg">
[그림5]

그림 5 와 같은 형태의 redux아키텍처를 생각해 볼 수 있습니다.

```
Store : 글을 가지고 와서
Reducer : 내가 쓴 글만 따로 모아서
Action : 볼 수 있다.
```

Redux는 이미 여러군데서 다루었을 것이라고 생각이 되어서 깊게 들어가지는 않겠습니다만, 모르는 개발자들을
위해서 소스는 최대한 간단하게 만들고 day7때에 효율적으로 혹은 최근의 트렌드 대로 Refactoring 해 보도록
하겠습니다.

일단 무엇부터 설계해야 될까요? Store를 어떻게 가져 올것인지, 그와 관련된 설정들을 살펴 보도록 하겠습니다.

일단 src 폴더 아래에 다음의 store폴더를 만들고 global.js라는 파일을 만들어 보도록 하겠습니다.

```JavaScript
//global.js
//redux 에서 createStore, combineReducers, applyMiddleware 등의 함수들을 가져 옵니다.
import { createStore, combineReducers, applyMiddleware } from 'redux'
//Router 와 결합하기 위해 react-router-redux,react-router 등의 모듈을 가져 옵니다
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
//middleware가 필요합니다. 이 경우는 redux-thunk라는 미들웨어는 비동기 콜백을 redux에서 처리하기
// 위해서 사용되었습니다.
import thunk from 'redux-thunk';
// reducer들을 조합해 줍니다. 기본적으로 routerReducer는 router 에서 사용되는 상태들을 가지고 옵니다.
// 우리가 관리할 reducer는 아래에 추가 됩니다
const reducer = combineReducers({
  // ...articleReducers,
  routing: routerReducer
})
//DevTools의 Jsx
//스토어를 만드는데,reducer 와 middleware를 변수로 받아서 처리합니다.
export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
//결국 store 객체를 browserHistory와 엮어서 만들어 줍니다.
export const history = syncHistoryWithStore(browserHistory, store)
```
src/store/global.js 파일은 기본적으로 store라는 global(전역) state를 관리하는 역할을 하게 됩니다.

react-router-redux는 react-router에서 사용되는 값들을 redux를 이용해서 관리하기 위해서 필요합니다.
특별히 이 소스에서는 browserHistory를 redux store에서 관리합니다.
store와 history를 export 명령어를 통해서 외부에서 가져다 쓸 수 있도록 한 부분을 눈여겨 보시기 바랍니다.

이제 index.js 파일의 라우팅 소스를 다음과 같이 고칠 차례입니다.

```JavaScript
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      ...중략...
    </Router>
  </Provider>,
  document.getElementById('root')
);
```
Provider의 store를 지정한 부분과 Router의 history를 지정해 하위 컴포넌트들에서 사용가능하도록 지정해 두었습니다.

store를 지정했으니 앞으로 남은 건 리듀서(Reducer)와 Action을 정의하는 것이겠죠?

먼저 Reducer를 정의해 보겠습니다.

src/reducers 폴더를 만들고 Article.js 파일을 만듭니다.

```JavaScript
/*global firebaseui,firebase*/
import {USER,GROUP} from '../constants'
//state 와 action을 매개변수(parameter) 로 받는다
export default function getArticles(state,action){
  //액션의 유형(type) 에 따라 어떻게 state를 만들 것인지를 결정합니다.
  if(action.type === USER){ // 사용자별 유형이 들어왔을 경우
    let articles_of_mine = [];
    let cUser = firebase.auth().currentUser;
    //state의 article에서 현재 사용자의 문서(Article)을 뽑아 낸다.
    state.articles.forEach(function(article){
      if( article.user.uid && cUser && (article.user.uid ===  cUser.uid)){
        articles_of_mine.push(article);
      }
    });
    return Object.assign({},state,{articles:articles_of_mine});
  }
  return Object.assign({},state,action);
}
```
getArticles 함수는 전역 상태(state) 변수에서 값을 가지고 와서 특정한 조건에 따른 값을 뽑아내는(Reducer)
역할을 하고 있습니다. 즉 어떤 유형의 액션(Action)이냐에 따라 리듀서의 역할이 달라지도록 분기가 되어 있습니다.

많아질 경우는 Switch문이나 Object로 배열시켜도 될 듯 합니다.

firebase 에 등록된 사용자를 기준으로 사용자가 등록한 문서를 볼 수 있도록 한 reducer 를 만들었다면,
이번에는 이 reducer를 사용하게 될 action을 정의해 보도록 하겠습니다.

src/actions 폴더를 만들고 Article 파일을 만듭니다.

```JavaScript
import { USER, GROUP,ALL } from '../constants'
export function userArticles() {
  return {
    type: USER
  }
}
```
네, 일단 Action은 User타입만 반환하는 함수를 만들었습니다.

그럼 이 Action 이 어떻게 호출 될지만 먼저 살펴 보도록 하겠습니다.

만들어둔 PopCard를 고쳐 보도록 하겠습니다.

```JavaScript
/*global firebase*/
import React ,{Component} from 'react';
import './PopCard.css';
//Action 을 불러옵니다.
import {userArticles,loadArticles} from './actions/Article'
//redux에서 connect 함수를 불러옵니다.
import {connect} from 'react-redux';

class PopCard extends Component{
  logout(){
    firebase.auth().signOut();
  }
  //Article Action 에서 가져온 userArticles, loadArticles를 dispatch명령어를 통해
  //호출합니다.
  render(){
    const {dispatch} = this.props;
    if(this.props.isPop){
      return(
        <div className="card_pop">
          <div className="card_pop_arrow"/>
          <div>
          <a href="#" onClick={()=>dispatch(userArticles())}>내 글만 보기</a>
          </div>
          <div>
          <a href="#" onClick={()=>dispatch(loadArticles())}>전체 글 보기</a>
          </div>
          <div>
            <a href="#" onClick={()=>this.logout()}>로그아웃</a>
          </div>
        </div>);
    }else{
      return <div/>
    }
  }
}
// redux에 connect 함수를 통해 클래스를 연결 시켜줍니다.
export default connect()(PopCard)
```

redux에 관해 많은 것을 할애하지는 못하니 간단하게 설명만 드리면 PopCard 클래스를 connect 함수를 통해
연결해서 클래스 내부에 dispatch를 통해 Action을 호출할 수 있는 연결 고리를 만들어 둡니다.

이후 onClick을 이벤트가 일어나는 경우 Action이 실행이 되는데 해당 리듀서를 찾아 state가 변경된 데로
이 클래스는 렌더링을 하게 됩니다.

## 전체 데이타를 가져오는 인터페이스 변경

이제는 전체 데이타를 가져오는 부분이 전역 상태(global state)와 밀접하게 얽혀 있어야 redux를 통해 값
을 가져올 수 있겠구나. 리듀셔(reducer)를 설계할 수 있겠구나 하는 생각이 들었을 것입니다.

이전 App.js의 firebase 데이터 호출하던 부분을 모두 action 으로 옮기는 일을 해 보겠습니다.

src/App.js는 다음과 같이 줄여줍니다.
```JavaScript
import React, { Component } from 'react';
import logo from './doc_img/stand_up_logo.png';
import './App.css';
import Editor from './Editor'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {updateArticle} from './actions/Article'

/*
* App Component
*/
class App extends Component {
  //생성자에서 submit 말고는 삭제가 되었습니다.
  constructor(){
    super();
    this.submit = this.submit.bind(this);
  }
  //submit도  action을 통해 redux 패턴을 따르도록 변경했습니다.
  submit(article){
    if(article){
      const {dispatch} = this.props;
      dispatch(updateArticle(article));
      //data 업데이트를 하고 나면 화면은 다시 렌더링 해야 합니다.
      this.forceUpdate();
    }
  }
  //Router 때문에 {this.props.chlidren} 을 통해 라우터에 설정된 페이지들이 삽입되게 되어 있습니다.
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <Editor submit={this.submit}/>
        {this.props.children}
      </div>
    );
  }
}
export default connect()(App);
```

대신 src/actions/Articles.js 의 액션들은 아래와 같은 소스를 추가해 줍니다.
```JavaScript
// 기존 포스트들을 가지고 오는 콜백
export function getArticles(articles){
  var items = [];
  articles.forEach(function(article){
    var item = article.val();
    item['key'] = article.key;
    items.push(item);
  })
  if(items && items.length>0){
    return{
      type : ALL,
      articles : items.reverse()
    }
  }
}
//firebase에서 데이터를 가지고 와서 목록을 보여줍니다.
export function loadArticles() {
  return (dispatch) => {
    dao.list(25,(articles)=>dispatch(getArticles(articles)));
  };
}
//포스트를 업데이트 합니다.
export function updateArticle(postData){
  return (dispatch) => {
    dao.update(dao.newKey(),postData);
  };
}
```

이렇게 만들어 주고 나면
<img src="./doc_img/Serverless_auth06.jpg">

[그림6]

그림6과 같이 나만의 포스트를 확인할 수 있게 됩니다.

이제 마지막 하루가 남았는데 하루 안에 하고 싶은 것을 다 할 수 있을지는 모르겠지만 일단은 group 을 만들어
보고 embedl.ly로 구현한 카드를 AWS 람다로 구현해 보는 등의 작업을 해 보도록 하겠습니다.






# Day7

## 사용자 스토리5

1. 김개발은 아침 스탠드업 시간에 같이 이야기를 나눌 수 있는 주제를 위해 스탠드업이라는 웹 앱을 찾아간다. 이렇게 함으로써 사람들과 IT에 대한 주제로 커뮤니케이션을 할 수 있다.
2. 김개발이 사이트를 방문해서 자신이 어제 유심하게 읽은 글을 올릴 수 있다. 이렇게 하면 다른 사람들이 볼 수 있다.
 * 에디터 창에 인터넷 링크를 입력하면 자동적으로 페이지 카드가 만들어 진다. 이 때 페이지 링크는 oEmbed를 써서 동작하는데 웹 표준을 준수하고 자연스러워야 한다.
 * 에디터 창은 하나만 있고 거기서 글을 작성하고 업로드 하면 글이 외부 클라우드 공간에 저장이 된다.
3. 김개발이 작성한 글이 목록으로 보여진다. 이렇게 함으로써 다른 사람들이 목록을 확인할 수 있다.
4. 김개발은 google ID를 가지고 로그인을 할 수 있다. 이렇게 함으로써 내가 쓴 글만 따로 모아서 볼 수 있다.
5. 김개발은 그룹 별로 스탠드업을 만들 수 있고 각 그룹별고 글을 올릴 수 있다

그룹 기능을 넣고 나서는 내가 이럴려고 계속한다 했나 자괴감 들어.라는 순간이 몇번이나 왔는지 모르겠습니다. 이유는 몇가지가 있는데 첫번째는 처음 설계를 몇번이나 바꿔야 하는 것이며 , 두 번째는 테스트 코드가 어느 순간 동작하지 않는 것이었습니다. 설계를 바꾸는 것은 개발의 숙명이라 받아들일 수 있었는데 테스트 코드는 어느 순간 놓치고 나니 TDD를 진행하지 못한 부분이 있어 많이 부끄러워 지더군요.

본론으로 들어가서 이번 글에는 유저스토리를 하나 더 추가해 보았습니다. ”김개발은 그룹을 만들 수 있고 각 그룹별고 글을 올릴 수 있다.” 이 내용을 토대로 어떻게 들어갔는지 한번 살펴 보도록 하겠습니다.

## 0. 고칩니다.

이전에 firebase-ui 때문에 외부에 소스를 뺀 적이 있죠? 시간은 어느덧 두달이 지났으니 당연히 npm으로 등록이 되었습니다. 나프다 발표하는 당일에 추가가 되기는 했었습니다.

```
$npm install firebase firebaseui --save
```
## 1. 시작하기 전에

<img src="./doc_img/Serverless_group01.jpg" width="640" height="480">
그림 1과 같은 역할을 하는 UI를 먼저 만들어 보려고 합니다. 기본 UI 기능은 그룹을 선택해야 할 수 있어야 하고 그룹을 만들 수 있어야 합니다. 그래서 선택을 할 수 있는 회전목마(Carousel) UI가 필요하고 그룹을 만들 수 있는 UI도 필요해서 새 그룹이라는 버튼을 달아 두었습니다.

## 2. 그룹 만들기
그룹을 만들기 위해서는 당연히 기존의 firebase 에 저장된 스키마에 대한 조정이 필요하겠죠?

<img src="./doc_img/Serverless_group01-01.jpg" width="640" height="480">

기존의 posts라는 스키마에는 모든 글이 저장되고 이 내용을 읽어와서 작업을 했었는데, 이제는 group 별로 조정할 일들이 생겼습니다.

<img src="./doc_img/Serverless_group01-02.jpg" width="322" height="304">

groups는 그룹을 만들면 생성될 수 있는 엔트리가 될 것이고 group-posts에 각 그룹 별로 아티클이 들어갈 수 있도록 작업을 할 것입니다. 먼저 그룹을 생성하고 리스트 하는 작업을 해 보겠습니다. 생성을 하려면 다음과 같은 UI를 통해 그룹간 이동을 할 수 있습니다.

<img src="./doc_img/Serverless_group02.jpg" width="640" height="480">

일단 이 일련의 작업들을 하는 세가지 버튼을 만들어 보겠습니다. 먼저 그룹 페이지에 처음 들어오게 되면 그룹에 해당하는 이미지가 보여지고 그룹 작업을 선택하면(1) 새 그룹을 만들 수 있어야 하며(3), 다른 그룹을 선택할 수도(4) 있어야 합니다. 글 쓰기 버튼을 선택하면(2) 글 쓰기를 할 수 있는 에디터가 나와서 글이 작성되어야 하며 여러가지 모든 상황에서 원래 그룹으로 원상복귀(5)할 수 도 있어야 합니다.

어떤 작업을 먼저 하면 좋을까요? React 개발에 있어서는 state를 어떻게 관리할 것인가 를 첫번째 질문으로 가져가야 할 것입니다. 외부에서 URL 기반으로 타이핑해서 들어올 때 처음 형태를 어떻게 가져야 할지를기준으로 설계를 해 보겠습니다.

1. 기존의 edit를 하던 부분을 URL로 처리했던 부분은 그렇게 중요하지 않을 것입니다.
2. 내부에서 “선택" 버튼을 누를 경우는 URL이 변경되어야 합니다.
3. “글쓰기” 를 작성하면 URL은 변경되지 않지만 버튼의 state는 변경되어야 합니다.

<img src="./doc_img/Serverless_group03.jpg" width="640" height="480">

먼저 세가지 버튼에 대해서 상태를 유지하고 그 값에 따라 아래 Action Bar를 선택하도록 해 보겠습니다.

<img src="./doc_img/Serverless_group04.jpg" width="125" height="38">

```JavaScript
class Buttons extends Component {
  selectButton(args){
    const {dispatch} = this.props;
    dispatch(selectButton(args));
  }
  renderActionBar(selected){
    switch (selected){
      case 'groups':
        return <GroupList/>
      case 'edit' :
        return <Editor/>
      default :
        return null
    }
  }
  render() {
    const {logoUrl,groupName,selectedButton,defaultStyle,groupStyle,editStyle} = this.props;
    return (
      <div>
      <div className="buttons">
        <Profile/>
        <a onClick={()=>this.selectButton('edit')}><i className="fa fa-pencil-square fa-lg" style={editStyle}></i></a>
        <a onClick={()=>this.selectButton('groups')}><i className="fa fa-handshake-o fa-lg" style={groupStyle}></i></a>
        <a onClick={()=>this.selectButton()}><i className="fa fa-window-minimize fa-lg" style={defaultStyle}></i></a>
      </div>
      {this.renderActionBar(selectedButton)}
      {groupName && !selectedButton&&
        <div style={{width:'100%',height:150,position:'relative'}}>
          <img src={logoUrl} alt={groupName} style={{width:'100%',height:150}}/>
          <div className="style_title" style={{width:"100%"}}>{groupName}</div>
        </div>
      }
      </div>
    )
  }
}
let mapStateToProps = (state, ownProps ) => {
  return {...state.default,...ownProps}
}
export default connect(mapStateToProps)(Buttons);
```

버튼을 클릭하면 selectedButton 즉 선택한 버튼을 확인하게 되고 그에 따라서 CSS 값을 변경해 주는 작업을 하는 컴포넌트입니다. 이걸 가능하게 하기 위해서 actions, reducers 폴더 밑에 각각 Button.js파일을 만들었습니다.

```JavaScript
//ActionBar를 그려준다. 안드로이드의 액션바와는 다르다. 액션바와는...
{this.renderActionBar(selectedButton)}
//그룹이 존재하고 버튼선택이 된 경우
{groupName && !selectedButton&&
  <div style={{width:'100%',height:150,position:'relative'}}>
    <img src={logoUrl} alt={groupName} style={{width:'100%',height:150}}/>
    <div className="style_title" style={{width:"100%"}}>{groupName}</div>
  </div>
}
```

renderActionBar는 ActionBar 가 선택된 버튼에 따라서 다르게 그려지도록 했고 어떤 버튼도 선택되지 않을 경우에는 그룹의 로고 URL을 보여주도록합니다.

```JavaScript
import {BUTTON} from '../constants'

const GREY = '#AAA';
const PINK = '#FD478A';
const WHITE = 'white';

export function selectButton( button ){
  return {
    type : BUTTON,
    selectedButton : button,
    defaultStyle: _selectStyle(button).style_d,
    groupStyle: _selectStyle(button).style_g,
    editStyle: _selectStyle(button).style_e
  }
}
function _selectStyle(button){
  switch(button){
    case 'groups':
      return {
        style_d: {color: GREY},
        style_g: {color: PINK},
        style_e: {color: GREY}
      }
    case 'edit' :
      return {
        style_d: {color: GREY},
        style_g: {color: GREY},
        style_e: {color: PINK}
      }
    default:
      return {
        style_d: {color: WHITE},
        style_g: {color: GREY},
        style_e: {color: GREY}
      }
  }
};

export default function getButtons(state,action){
  return {...state,...action};
}
```


### 2.1. 그룹 만들기
자, 그럼 그룹은 어떻게 만들까요?

<img src="./doc_img/Serverless_group05.jpg" width="262" height="151">

그룹명이 존재하는지 (1)중복 확인을 한 후에 (2)드래그앤 드롭을 통한 파일 업로드, (3)그룹생성 의 순서대로 이루어집니다.

이중 1,3번의 Group의 Real Time DB에 대한 DAO는 여기서 다루지 않겠습니다. (소스에서 확인하세요.) 드래그앤 드롭해서 파일 업로드 하는 부분만 확인을 하면 Firebase의 FileUpload에 대한 인터페이스와 Dropzone UI 에 대한 이야기로 나눠서 볼 수 있을 거 같습니다.

#### Firebase FileUpload

src 폴더 아래 FileUtil.js를 만들었습니다.

```JavaScript
import firebase from 'firebase'

export default function fileupload(files,size, callback){
  if(size && files.length!==size){
    if(size===1)alert("file은 하나만 업로드 가능합니다");
    else alert("지정된 파일 갯수랑 같지 않습니다.")
    return;
  }
  var storageRef = firebase.storage().ref();
  files.forEach(function(file){
    //확장자
    let ext = file.name.split('.').pop();
    let metadata = {};
    if( ext === 'jpg' ) metadata.contentType = 'image/jpeg';
    if( ext === 'png' ) metadata.contentType = 'image/png';
    if( ext === 'gif' ) metadata.contentType = 'image/gif';

    // 이미지와 메타데이타를
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

    // 상태변화를 감지하고 에러가 나거나 완료가 되면 콜백함수를 호출한다
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // '상태변화'감지
      function(snapshot) {
        // 프로그레스 계산. 전체 보내는 양을
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // '정지'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // '업로드 중'
            console.log('Upload is running');
            break;
          default :
            //
        }
      }, function(error) {
        switch (error.code) {
          case 'storage/unauthorized':
            console.log("unauthorized user");
            break;
          case 'storage/canceled':
            console.log("user cancel!");
            break;
          case 'storage/unknown':
            console.log("unexpected error")
            break;
          default:
            //do nothing
        }
      }, function() {
        // 다운로드 URL 전송.
      }, function()
        callback(uploadTask.snapshot.downloadURL);
      });
  })

}

```

주목 하셔야 할 부분은 다음의 storageRef 입니다.

```JavaScript
//storageRef 정의
var storageRef = firebase.storage().ref();
// 업로드
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
// 이벤트 정의
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,... (중략)
```

그럼 이 부분을 호출한 부분을 살펴 볼까요?

### Dropzone

src 파일 밑에 GroupAdd.js 라는 파일을 만들었습니다. 이 파일에서 중요하게 눈여겨 보실 부분은 react-dropzone이라는 라이브러리를 이용했다는 점이고 그 부분은 소스의 처음 import 부분에 포함이 되어 있습니다.

```JavaScript
<Dropzone onDrop={(acceptedFiles, rejectedFiles)=>this.onDrop} accept="image/*" className="drop-file padding-top">
  <div>파일을 드래그앤 드롭 하거나 클릭해서 선택하세요</div>
</Dropzone>
```

Dropzone 에서 onDrop이라는 이벤트를 만들었고 이 이벤트는 기본적으로 허용된 파일과 거절된 파일을 인자로 받아서 처리해 줍니다.

```JavaScript
onDrop (acceptedFiles, rejectedFiles) {
...
  if(acceptedFiles && acceptedFiles.length>0){
    ...
    imageUpload(acceptedFiles, 1, (downloadUrl)=>{
      this.setState({
        groupImage:downloadUrl,
        isSpin: false
      });
    });
  }else{
...
  }
}
```

## 3. 조회하기

이렇게 그룹을 만들고 났으면 URL 별로 그룹이 조회가 되도록 내용을 추가해 줍니다. 스키마에 대해서는 서두에 밝혔으니 소스코드 레벨로만 간단하게 설명하겠습니다. (FirebaseDAO에 대해서는 이미 수차례 설명했으니 소스코드도 최대한 짧게 가겠습니다.)

reducer는 생략하고 action만 살펴보고 넘어가겠습니다.

```JavaScript
export function groupSelect(groupName){
  return (dispatch) => {
    dao.getGroup(groupName).once('value', (snapshot) => {
      if(snapshot.val()) {
        let logoUrl = snapshot.val().logoUrl;
        dispatch(getGroup(groupName, logoUrl));
        dispatch(selectButton());
      }
    })
  }
}
export function getGroup(groupName, logoUrl){
  return (dispatch) => {
    dao.listGroupArticle(groupName).then((articles)=>dispatch(getArticle(articles,groupName,logoUrl)));
  }
}
```

소스코드 처럼 group을 가지고 와서 로고 및 데이타를 가져온 뒤에 버튼을 선택하는 액션을 다시한번 연결하고는 끝이 납니다. 라우터 소스는 그에 따라 아래와 같이 간단해 졌습니다.

```JavaScript
<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>
      <Route path="groups/:groupName" />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
</Provider>
```
이렇게 그룹의 개념을 집어 넣어서 전체 내용을 다시한번 리마인드 하면서 전체에 대한 시리즈는 끝을 낼까 합니다.

지금까지는 실행에 대한 내용이었고 이후는 서버리스 아키텍처에 대한 고찰에 관한 이야기 + 리팩토링에 대한 이야기를 해 볼까 합니다.

그 동안 어려운 내용 같이 따라오신다고 고생하셨습니다.

소스코드는 아래 링크를 참고하시면 됩니다.

https://github.com/ehrudxo/standup/tree/day7











