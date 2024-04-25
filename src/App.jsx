import "./App.css";
import Header from "./components/Header";
import Creater from "./components/Creater";
import List from "./components/List";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "JavaScript 공부하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 1,
    isDone: false,
    content: "React 공부하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    isDone: false,
    content: "TypeScript 공부하기",
    date: new Date().toLocaleDateString(),
  },
];

// useReducer를 사용하여 로직들을 컴포넌트 외부로 옮김
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);

    default:
      return state;
  }
}

// Context를 사용하여 Prop으로 전달하지고 Context.Provider로 전달 (Props Drilling 예방)
// 1. 변하는 값은 StateContext로 전달
export const TodoStateContext = createContext();
// 2. 변하지 않는 함수는 DispatchContext로 전달
export const TodoDispatchContext = createContext();

function App() {
  // useReducer를 사용하여 로직들을 컴포넌트 외부로 옮김
  const [newTodos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback 사용하여 더이상 리렌더링 되지 않게 최적화
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().toLocaleDateString(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  // 변하지 않는 함수들은 Memo를 통하여 한번만 렌더링 되게 끔 최적화
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={newTodos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Creater />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
