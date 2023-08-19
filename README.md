# tistory_api

## 사이트 소개

티스토리 API 이용에 필요한 access\_token, catecory\_id등을 쉽게 발급할 수 있는 사이트입니다.

![tistoryapi_screenshot](https://github.com/larry1121/tistory_api/assets/78005200/555f318d-488d-4cd3-944e-f8d710e7c7ae)


### 사이트 링크:

[https://tistoryapi.netlify.app](https://tistoryapi.netlify.app)

### API 요청 페이지 사용방법:

Tistory 개발자센터 ([https://www.tistory.com/guide/api/manage/register](https://www.tistory.com/guide/api/manage/register)) 에 접속하여 앱 등록을 진행합니다. 이때 서비스 URL,CallBack 입력창에는 자신의 티스토리 주소를 입력합니다. 주소 입력 예시 : [https://블로그이름.tistory.com/](https://%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%9D%B4%EB%A6%84.tistory.com/)

1.  등록한 앱 화면의 App ID와 Secret Key을 복사하여 이 사이트의 "client\_id"와 "client\_secret" 입력창에 붙여넣습니다.
2.  이 사이트의 "redirect\_uri" 입력창에 Tistory 개발자센터에서 설정했던 자신의 티스토리 주소를 입력합니다.
3.  "인증 코드 url로 이동" 버튼을 눌러 Tistory 계정으로 로그인한 후, "허가하기"를 눌러 인증 코드(Authorization Code)를 발급받습니다.
4.  발급된 인증 코드는 "허가하기"를 눌러 이동한 티스토리 블로그의 주소창에서 다음과 같은 형식으로 확인할 수 있습니다. ([https://블로그이름.tistory.com/?code=여기가인증코드&state=anything](https://%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%9D%B4%EB%A6%84.tistory.com/?code=%EC%97%AC%EA%B8%B0%EA%B0%80%EC%9D%B8%EC%A6%9D%EC%BD%94%EB%93%9C&state=anything)) 발급된 인증 코드는 1시간 이내에만 사용가능하며, 재사용 할 수 없습니다.
5.  발급받은 인증 코드를 이 사이트의 "Authorization Code" 입력창에 입력합니다.
6.  "Access Token 요청" 버튼을 눌러 아래에 access\_token=여기가발급된토큰이 나타날 때까지 기다립니다. 만약 에러가 발생하면 인증코드를 발급하는 4.의 과정부터 다시 진행해야 합니다.
7.  "access\_token" 입력창에 발급받은 access\_token을 복사하여 붙여넣습니다.
8.  "blogName" 입력창에는 자신의 Tistory 블로그 이름을 입력합니다. 블로그 이름 예시 : [https://블로그이름.tistory.com/](https://%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%9D%B4%EB%A6%84.tistory.com/)
9.  "카테고리 ID 들고오기" 버튼을 눌러 각 카테고리 이름에 대응하는 카테고리 ID를 확인할 수 있습니다.
10.  access\_token과 카테고리 ID를 통해 티스토리의 글쓰기,수정하기등의 api를 이용할 수 있습니다.

※ 티스토리 api 문서 : [https://tistory.github.io/document-tistory-apis/](https://tistory.github.io/document-tistory-apis/)

### 개발 과정 보러가기

[티스토리 API요청 사이트 개발기 - CORS에러 해결](https://bugdict.tistory.com/entry/%ED%8B%B0%EC%8A%A4%ED%86%A0%EB%A6%AC-API%EC%9A%94%EC%B2%AD-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EA%B8%B0-CORS%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0)
