import { useTodoDispatch } from "../App";
import "./Creater.css";
import { useState, useRef, useContext, KeyboardEvent } from "react";

interface Props {}

const Creater = (props: Props) => {
  const [content, setContent] = useState("");
  // custom hook을 사용하여 옵셔널(?)을 사용하지 않게끔 context 불러오기
  const dispatch = useTodoDispatch();
  const contentRef = useRef<HTMLInputElement>(null);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onClickSubmit();
    }
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickSubmit = () => {
    if (content === "") {
      // contentRef.current 값이 null일수 있기 때문에 조건 추가
      if (contentRef.current) {
        contentRef.current.focus();
      }
      return;
    }
    dispatch.onCreate(content);
    setContent("");
  };

  return (
    <div className="Creater">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 할일을 입력하세요."
      />
      <button onClick={onClickSubmit}>추가</button>
    </div>
  );
};

export default Creater;
