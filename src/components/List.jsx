import "./List.css";
import Item from "./Item";
import { useState } from "react";

const List = ({ newTodos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return newTodos;
    }
    return newTodos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h3>💡 오늘의 할일</h3>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력해 주세요."
      />
      <div className="TodoItems">
        {filteredTodos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
