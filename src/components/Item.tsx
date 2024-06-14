import { useContext, memo } from "react";
import "./Item.css";
import { TodoDispatchContext, useTodoDispatch } from "../App";
import { Todo } from "../types";

const Item = (props: Todo) => {
  const dispatch = useTodoDispatch();

  const onChangeBox = () => {
    dispatch.onUpdate(props.id);
  };

  const onClickDelete = () => {
    if (props.isDone === false) {
      alert("아직 하지 완료하지 못하여 삭제 불가능합니다.");
      return;
    }

    alert("완료 하여 삭제합니다.");
    dispatch.onDelete(props.id);
  };

  return (
    <div className="Items">
      <input onChange={onChangeBox} checked={props.isDone} type="checkbox" />
      <div className="Item">{props.content}</div>
      <div className="Date">{props.date}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// memo메서드를 사용하여 해당 아이템 컴포넌트만 리렌더링 하게 한다.
export default memo(Item);
