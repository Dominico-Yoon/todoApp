import "./App.css";
import Header from "./components/Header";
import Creater from "./components/Creater";
import List from "./components/List";
import {
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
  useContext,
} from "react";
import { Todo } from "./types";

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

// reducer함수의 action 타입 생성
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        isDone: boolean;
        content: string;
        date: string;
      };
    }
  | { type: "UPDATE"; targetId: number }
  | { type: "DELETE"; targetId: number };

// state, action 매개변수에 타입 선언
// useReducer를 사용하여 로직들을 컴포넌트 외부로 옮김
function reducer(state: Todo[], action: Action) {
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
export const TodoStateContext = createContext<Todo[] | null>(null);
// 2. 변하지 않는 함수는 DispatchContext로 전달
export const TodoDispatchContext = createContext<{
  onCreate: (content: string) => void;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
} | null>(null);

// 3. custom hook을 사용하여 옵셔널(?)을 사용하지 않게끔 context 불러오기
export function useTodoState() {
  const state = useContext(TodoStateContext);

  if (!state) throw new Error("TodoState에 문제 발생!!!");
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);

  if (!dispatch) throw new Error("TodoDispatch에 문제 발생!!!");
  return dispatch;
}

function App() {
  // useReducer를 사용하여 로직들을 컴포넌트 외부로 옮김
  const [newTodos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback 사용하여 더이상 리렌더링 되지 않게 최적화
  const onCreate = useCallback((content: string) => {
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

  const onUpdate = useCallback((targetId: number) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId: number) => {
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
