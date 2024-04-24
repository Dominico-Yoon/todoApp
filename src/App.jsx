import "./App.css";
import Header from "./components/Header";
import Creater from "./components/Creater";
import List from "./components/List";
import { useState, useRef } from "react";

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

function App() {
  const [newTodos, setNewTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toLocaleDateString(),
    };
    setNewTodos([newTodo, ...newTodos]);
  };

  const onUpdate = (targetId) => {
    setNewTodos(
      newTodos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setNewTodos(newTodos.filter((todo) => targetId !== todo.id));
  };

  return (
    <div className="App">
      <Header />
      <Creater onCreate={onCreate} />
      <List newTodos={newTodos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
