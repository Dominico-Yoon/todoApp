import "./List.css";
import Item from "./Item";
import React, { useContext, useState } from "react";
import { TodoStateContext, useTodoState } from "../App";
import { Todo } from "../types";

const List = () => {
  // Context를 통해 불러오기
  // const newTodos = useContext(TodoStateContext);
  const newTodos = useTodoState();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return newTodos;
    }
    return newTodos.filter((todo: Todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // 해야할 일 추가
  const getAnalyizedTodos = () => {
    const totalTodos = newTodos.length;
    const doneTodos = newTodos.filter((todo) => todo.isDone).length;
    const notDoneTodos = totalTodos - doneTodos;

    return { totalTodos, doneTodos, notDoneTodos };
  };

  const { totalTodos, doneTodos, notDoneTodos } = getAnalyizedTodos();

  return (
    <div className="List">
      <h3>💡 오늘의 할일</h3>
      <div>⭐️ 오늘 해야 할 일 : {totalTodos}</div>
      <div>👌 완료 한 일 : {doneTodos}</div>
      <div>❌ 완료 못 한 일 : {notDoneTodos}</div>

      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력해 주세요."
      />
      <div className="TodoItems">
        {filteredTodos.map((todo) => {
          return <Item key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
