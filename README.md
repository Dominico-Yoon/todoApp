# 🗓️ To-Do App

<img width="553" alt="TodoList" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/c3d511aa-d4ce-462c-9846-de5eb257ff8f">

> 개인 미니 프로젝트로 진행한 To-Do App 입니다.
>
> 기본적인 CRUD 기능을 만들었습니다.
>
> 2024.06.14 업데이트
> JavaScript -> TypeScript로 마이그레이션 (고도화)
> 이전 Version Git - https://github.com/Dominico-Yoon/todoApp

### 목차

1. [업데이트 내용](#업데이트-내용)
   - [패키지 추가 설치](#1-Todo-List-조회)
   - [index.html 수정](#1-Todo-List-조회)
   - [main 수정](#1-Todo-List-조회)
   - [App 수정](#1-Todo-List-조회)
   - [Components 수정](#1-Todo-List-조회)
2. [주요 기능](#주요-기능)
   - [Todo List 조회](#1-Todo-List-조회)
   - [Todo List 검색](#2-Todo-List-검색)
   - [Todo 생성](#3-Todo-생성)
   - [Todo 완료 여부 변경](#4-Todo-완료-여부-변경)
   - [Todo List 삭제](#5-Todo-List-삭제)
   - [Todo 완료 여부 체크 후 삭제](#6-Todo-완료-여부-체크-후-삭제)
   - [오늘의 할일 개수 확인](#7-오늘의-할일-개수-확인)
3. [사용한 기술 스택 및 라이브러리](#사용한-기술-스택-및-라이브러리)
4. [프로젝트를 하며 느낀 점](#프로젝트를-하며-느낀-점)

## [업데이트 내용]

### 1. 패키지(라이브러리) 추가 설치

- [x] npm i @types/node @types/react @types/react-dom @types/jest로 타입스크립트에서 필요한 라이브러리를 추가로 설치 해준다.

### 2. index.html 수정

- [x] script 태그에 src="/src/main.jsx"를 src="/src/main.tsx"로 수정 해준다.

### 3. main 수정

- [x] main.jsx에서 main.tsx로 확장자명을 변경 해준다.

- [x] ReactDOM.createRoot(document.getElementById("root"))를 ReactDOM.createRoot(document.getElementById("root" as HTMLElement)로 수정하여 HTMLElement | null 타입에서 HTMLElement타입으로 단언 해준다.

### 4. App 수정

- [x] App.jsx에서 App.tsx로 확장자명을 변경 해준다.

1. reducer함수의 action 타입 생성해 준다.

2. src 디렉터리에 types.ts 파일을 생성하고 interface로 Todo 타입을 생성해 준다.

3. 위에서 생성한 타입들로 state, action 매개변수에 타입 선언해 준다.

4. Context API를 사용하는 곳에 State와 Dispatch에 맞는 제너럴타입을 선언해 준다.
   State - <Todo[] | null>
   Dispatch - <각 함수들 | null>

5. 각 함수의 매개변수에 타입을 선언해 준다.

### 5. Components 수정

- [x] 각 Components의 확장자명을 .jsx에서 .tsx로 변경 해준다.

1. Header Components

   1. 부모노드로 부터 상속받는 값이 없어 딱히 수정 할 필요 없음.

2. Creater Components

   1. App.tsx에서 만든 Context API로 Dispatch를 갖고 올 시, null이 될 수도 있으니 App.tsx에서 만든 custom hook을 사용하여 Dispatch를 불러온다.
   2. onKeyDown 함수가 실행 될 때 매개변수 e의 타입은 KeyboardEvent<HTMLInputElement>로 설정해 준다.
   3. onChangeContent 함수가 실행 될때 매개변수 e의 타입은 React.ChangeEvent<HTMLInputElement>로 설정해 준다.
   4. onClickSubmit 함수에서 focus() 메서드는 값이 null 타입으로 들어오게 되면 실행되지 않으므로 조건식을 추가해 준다.

3. List Components

   1. App.tsx에서 만든 Context API로 State값을 갖고 올 시, null이 될 수도 있으니 App.tsx에서 만든 custom hook을 사용하여 State를 불러온다.
   2. onChangeContent 함수가 실행 될때 매개변수 e의 타입은 React.ChangeEvent<HTMLInputElement>로 설정 해준다

4. Item Components
   1. 부모노드(List Components)에서 props로 todo의 값을 가져와야 하므로 interface로 타입을 설정해 주고 매개변수 props에 타입을 설정해 줘야하지만,
      types.ts에 만들어 놓은 Todo 타입이 있기 때문에 매개변수 props에 Todo타입을 선언해 준다.
   2. App.tsx에서 만든 Context API로 Dispatch를 갖고 올 시, null이 될 수도 있으니 App.tsx에서 만든 custom hook을 사용하여 Dispatch를 불러온다.

## [주요 기능]

### 1. Todo List 조회

- [x] MockData로 설정한 기본값을 먼저 불러와준다.
      <img width="540" alt="TodoListRetrieve" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/1198596a-f720-49a6-a9c2-4a859e9bb34b">

### 2. Todo List 검색

- [x] input에 값을 넣으면 toLowerCase()로 includes() 포함 확인 하여 검색해 줍니다.
      <img width="548" alt="TodoListSearch01" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/b0bf9be5-3681-43ad-b320-94070f0aeb54">
      <img width="537" alt="TodoListSearch02" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/7ab71cec-bafc-4d69-bf48-454a3201e9f4">

### 3. Todo 생성

- [x] input에 값을 넣어주고 button 클릭시 newTodos 객체 맨 앞에 추가 됩니다.
      <img width="553" alt="TodoListCreate01" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/dcc1a31b-22e6-47d6-934c-858586399303">
      <img width="538" alt="TodoListCreate02" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/0eb67442-76aa-4066-881e-118a914bc094">

### 4. Todo 완료 여부 변경

- [x] input에 checkbox에 체크 시 checkbox에 있는 id값이 newTodos의 id와 같은 값이라면 isDone 값을 !isDone으로 변경해줍니다.
      <img width="955" alt="TodoItemUpdate01" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/f5bca3e4-bb46-47a5-b3c8-31ea673352b1">
      <img width="909" alt="TodoItemUpdate02" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/2955e5d5-56fa-49c2-a987-6159934e9f0e">

### 5. Todo List 삭제

- [x] button 클릭시 해당 id값을 newTodos에서 filter()로 id값이 아닌 것만 뽑아줍니다.
      <img width="546" alt="TodoItemDelete01" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/cbe2eb0a-5813-44c0-b84e-1611f78d83cb">
      <img width="557" alt="TodoItemDelete02" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/259115ac-ff59-4fd3-8d62-e34cfe43dbb2">

### 6. Todo 완료 여부 체크 후 삭제

- [x] button 클릭시 해당 item의 isDone이 false이면 삭제되 지 않게끔 조건을 걸어주었습니다.
      <img width="743" alt="TodoItemDel" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/e2c4072e-7fa7-4d6f-a75d-da2bc676fd61">

### 7. 오늘의 할일 개수 확인

- [x] newTodos의 length는 오늘 해야 할 일 총 개수를 나타내고, \
       완료 한 일은 newTodos에서 filter()로 isDone이 true인 값만 필터링 후 length로 구해주고, \
       나머지는 총 개수 - 완료 한 일로 구해 줍니다.
      <img width="533" alt="TodoListAna01" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/c2943668-c77c-4b53-b921-87ad1ddc52fa">
      <img width="537" alt="TodoListAna02" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/a239b17c-6b2e-4119-b94d-cda73a24ae1b">

## [사용한 기술 스택 및 라이브러리]

<div align=center>

<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/88ed08ac-887b-4dd3-ab85-072eece1b6bc">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/61494a14-28eb-4377-af80-a3b403478874">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/627d3629-6afa-49ae-9817-13a5b8665018">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/4794607d-4147-4363-afd5-9df2f6e4f8b4">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/2e72cc60-8d35-4a43-80f2-f5700ba89823">

</div>

- 사용한 기술 스택 : HTML, CSS, JavaScript, TypeScript, React

## [프로젝트를 하며 느낀 점]
20240615 추가
TypeScript로 Migration을 처음 작업을 하게 되었을때는 너무 어렵게만 생각하여 지레 겁을 먹었습니다.
compilerOptions중 strict: true로 작업을 진행하여 오류가 많이 발생 할 수 있다고 생각을 했지만,
오류가 많지않아 빠르게 작업을 진행 할 수 있었습니다.
또 처음으로 만든 리액트 앱이 생각보다 이상없이 잘 만들어 졌다고도 생각이 듭니다.
아직은 TypeScript에 어려움을 갖고 있지만, 조금 더 발전 했다는 것을 느꼇습니다.

Front-End 프로젝트를 처음 진행 하여 다소 작은 어플리케이션이라도 시간이 많이 걸렸다.
React Hook들에 대해 조금더 깊이 공부를 해봐야 할거 같다.
