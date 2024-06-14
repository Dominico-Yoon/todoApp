// 헤더는 부모노드로 부터 상속받는 값이 없어 수정 없음.

import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [time, setTime] = useState("00:00:00");
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth() + 1;
  const days = date.getDate();

  const currentTime = () => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  const startTime = () => {
    setInterval(currentTime, 1000);
  };

  startTime();

  return (
    <div className="Header">
      <h2>할일 List 🗓️</h2>
      <h1>{`${years}년 ${months}월 ${days}일`}</h1>
    </div>
  );
};

export default Header;
