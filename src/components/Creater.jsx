import { TodoDispatchContext } from "../App";
import "./Creater.css";
import { useState, useRef, useContext } from "react";

const Creater = () => {
  // Context를 통해 불러오
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef("");

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSubmit();
    }
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
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
