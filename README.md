# 🗓️ To-Do App

<img width="553" alt="TodoList" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/c3d511aa-d4ce-462c-9846-de5eb257ff8f"> 

> 개인 미니 프로젝트로 진행한 To-Do App 입니다.
> 
> 기본적인 CRUD 기능을 만들었습니다.

### 목차

1. [주요 기능](#주요-기능)
    + [Todo List 조회](#1-Todo-List-조회)
    + [Todo List 검색](#2-Todo-List-검색)
    + [Todo 생성](#3-Todo-생성)
    + [Todo 완료 여부 변경](#4-Todo-완료-여부-변경)
    + [Todo List 삭제](#5-Todo-List-삭제)
    + [Todo 완료 여부 체크 후 삭제](#6-Todo-완료-여부-체크-후-삭제)
    + [오늘의 할일 개수 확인](#7-오늘의-할일-개수-확인)
2. [사용한 기술 스택 및 라이브러리](#사용한-기술-스택-및-라이브러리)
3. [프로젝트를 하며 느낀 점](#프로젝트를-하며-느낀-점)

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
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/2f6fd621-3fb6-4cd3-b893-9e39b78d5db6">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/71f6407a-5bc8-4cd5-8eb4-e29c9b834765">
<img height="50" src="https://github.com/Dominico-Yoon/todoApp/assets/142984862/2e72cc60-8d35-4a43-80f2-f5700ba89823">

</div>

- 사용한 기술 스택 : HTML, CSS, JavaScript, React

## [프로젝트를 하며 느낀 점]
Front-End 프로젝트를 처음 진행 하여 다소 작은 어플리케이션이라도 시간이 많이 걸렸다.
React Hook들에 대해 조금더 깊이 공부를 해봐야 할거 같다.
