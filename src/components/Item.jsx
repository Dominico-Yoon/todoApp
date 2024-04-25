import { useContext, memo } from "react";
import "./Item.css";
import { TodoDispatchContext } from "../App";

const Item = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeBox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    if (isDone === false) {
      alert("아직 하지 완료하지 못하여 삭제 불가능합니다.");
      return;
    }

    alert("완료 하여 삭제합니다.");
    onDelete(id);
  };

  return (
    <div className="Items">
      <input onChange={onChangeBox} checked={isDone} type="checkbox" />
      <div className="Item">{content}</div>
      <div className="Date">{date}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// memo메서드를 사용하여 해당 아이템 컴포넌트만 리렌더링 하게 한다.
export default memo(Item);
