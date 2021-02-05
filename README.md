React Native 날씨앱 개발

## 0203 ~ 0206

### 0. Introduction 
**요구사항**
NodeJs /NPM / Expo / Android Studio (for simulating)

* expo 설치
> npm install -g expo-cli

* Expo CLI Quickstart (추천)
> create-react-app과 같은것이다. (리액트 네이티브를 위한 설정이 모두 셋업되어있음)

* React Native CLI Quickstart
> Native files들을 직접 더 많이 컨트롤 하고 싶을 때 사용

* expo의 장점?
> 편리함/ 다양한 API 관리 / App build 지원 등등

* 설치 후 npm start 로 실행

* Live Reload 란?
> 작업을 저장하면 자동으로 리프레쉬 되고, 변경된 내용을 즉시 확인하게 해주는 것

* 모바일 앱 만드는 방법들
1. Full native: Swift or obj-c로 IOS 앱 만드는 것, Java or 코틀린 가지고 만드는 안드로이드 앱.
2. 앱 기반 웹뷰를 만드는 것: 간단한 앱을 만들때 사용(Cordova or PhoneGap을 이용하고 HTML,CSS를 넣어 만드는 개발방법)
> 반응형 웹사이트

* 리액트네이티브는 자바스크립트와 스마트폰의 코드 사이의 커뮤니케이션을 쉽게하기 위해 만들어진 것. 그러므로 인스타그램이나 데이팅앱 등 간단한 것에는 유용하게 쓰이지만, 3D 게임과 같은 부류는 최선의 선택은 아님

* 리액트 네이티브 규칙 몇가지
1. div 는 View component
2. span 은 Text component
3. CSS 는 StyleSheet에서 수정하지만 일반적 CSS 문법과는 다른 것이 많다.
```
ex : <Text style={styles.text}>Hello!!!</Text>
```
> stylesheet를 styles로 정의하고 Text 컴포넌트에 적용한 코드

### 1.LOGIC
* Layout 규칙들 몇가지
1. flexDirection : 디폴트 값은 Column(모바일을 기준으로 하기 때문) / row로 바꿔줄수도 있다.
2. flex : 부모 컨테이너를 기본적으로 flex : 1 로 설정해주고(화면 전체를 쓰겠다는 의미), 빨강, 노랑 이라는 자식뷰를 만들어 각각의 flex를 1로 설정하면 coloumn 기준으로 반반씩 차지하게 된다. (빨강 flex : 2 / 노랑 flex : 1 이면 빨강이 화면의 2/3를 차지하고 노랑이 1/3을 차지함)
3. paddingHorizontal/paddingVertical : CSS에서의 Padding 과 기능은 비슷하지만 리액트 네이티브에서만 존재하는것.
4. px를 사용할시 "px"로 써줘야하지만 굳이 px를 안써도 자동으로 변환해줌.

* Geolocation API : 지역에 대한 정보를 얻어오는 API (Location API는 좀더 광범위하게 정보를 얻어올수 있다 <- 이걸 사용)
1. expo install expo-location

2.위치정보를 가져오는 방법(**await 필수**)
```
Location.getCurrentPositionAsync(options)
```
> coords : { latitude, longtitude } 설정으로 경도 위도 값을 얻어온다.
3. 위치정보에 대해 사용자가 허용하는지의 여부설정
```
await Location.requestPermissionsAsync();
```
4. Catch(error) 문으로 에러문을 작성

* openweathermap.org 로 날씨 정보가져오기 (API key 정의해주고)
* URL 정의 (백틱 사용) : $(경도), $(위도) , $(API_KEY)

### 2. STYLES
* units=metric 추가 (온도 섭씨 전환)

* 아이콘 추가 -> expo/vector-icons 라이브러리 사용
> import { MaterialCommunityIcons } from "@expo/vector-icons";

* CSS 는 linear-gradient를 사용
> import { LinearGradient } from 'expo-linear-gradient';

* StatusBar 색상 변경은 React-native 에서 지원
> import { StatusBar } from "react-native";

* const weatherOptions 생성후 각각의 날씨 정보들을 배열로 저장
```
Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "Don't go outside, You gonna die by thunderstorm :)"
  },
 ```
 > Thunderstorm 예시

### Conclusions
<img src="https://user-images.githubusercontent.com/56250064/107066184-feeb2e80-6820-11eb-8cd9-c27933ad1b03.jpg"  width="300" height="600" >

<img src="https://user-images.githubusercontent.com/56250064/107066182-fdba0180-6820-11eb-9811-a73cfa58901e.jpg"  width="300" height="600" align="left">
<img src="https://user-images.githubusercontent.com/56250064/107066186-feeb2e80-6820-11eb-9576-4115e8bcb942.jpg"  width="300" height="600" align="left">
<img src="https://user-images.githubusercontent.com/56250064/107066188-ff83c500-6820-11eb-89b4-b4993793308d.jpg"  width="300" height="600" align="left">
