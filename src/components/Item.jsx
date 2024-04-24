import "./Item.css";

const Item = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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

export default Item;
