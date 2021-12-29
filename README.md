# Gone-Chat APP

    - Chatting Service App

## Index

- #01 Init

  ```bash
  npx create-react-native-app <project-name> --use-npm

  npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
  ```

- #02 Basic Settings

  - React-Navigation

  ```bash
  npm install @react-navigation/native
  expo install react-native-screens react-native-safe-area-context
  npx pod-install
  npm install @react-navigation/native-stack
  npm install @react-navigation/bottom-tabs
  ```

  - styled-components

  ```bash
  npm install --save styled-components
  npm install @types/styled-components @types/styled-components-react-native
  ```

- #03 Context

  ```bash
  expo install @react-native-async-storage/async-storage
  npx pod-install
  ```

- #04 Auth Navigation

### Error: Cycle in dependencies between targets 'EXApplication' and 'ExpoModulesCore'; building could produce unreliable results. This usually can be resolved by moving the target's Headers build phase before Compile Sources.

- 이와 같은 에러가 나왔을 때 내가 해결한 방법은 Xcode > File > Workspace settings > Derived Data 폴더에 들어가서 이 프로젝트 날리고 다시 빌드하면 에러가 해결됐다.

- #05 Custom Google Fonts

  - 1. Google Fonts에서 원하는 폰트 다운받기
  - 2. 다운받은 폰트를 해당 프로젝트의 ios 폴더 내 Fonts 폴더를 생성하여 .ttf파일 넣기
  - 3. xcworkspace로 xcode열기
  - 4. 왼쪽 상단에 자신의 프로젝트명 오른쪽 마우스 클릭 > Add Files to 'project name'.. 클릭
  - 5. 나온 선택화면에서 추가한 Fonts폴더 선택 후 Create folder references 선택 후 Add
  - 6. 다시 왼쪽 상단에 자신의 프로젝트명 클릭하면 그 바로 오른쪽 TARGET에서 역시 자신의 프로젝트명 선택 후 상단 Info탭 클릭
  - 7. Fonts provided by application에 해당 폰트 추가 (Fonts/폰트명.ttf) 이렇게

  참고: https://dev-yakuza.posstree.com/ko/react-native/react-native-custom-font/

- #06 Login Screen 1

- #07 Login Screen 2, Signup Screen 1

- #08 Login API

- #09 KeyboardAvoidingView

- #10 Sign up API

- #11 Logged In Nav 1
