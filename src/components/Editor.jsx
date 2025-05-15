import "./Editor.css";
import { useState, useRef } from "react";

function Editor({ onCreate }) {
  const [input, setInput] = useState("");
  const [time, setTime] = useState("");
  const inputRef = useRef();
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = () => {
    if (input === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(input, time);
    setInput("");
    setTime("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
  };

  const today = new Date();

  const day = today
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase(); // WEDNESDAY
  const date = today.getDate(); // 22
  const month = today
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase(); // NOV

  const fullDate = `${day}, ${date} ${month}`;

  return (
    <div>
      <h1 className="fullDate">{fullDate}</h1>
      <div className="inputbox">
        <div className="timebox">
          <input
            className="inputtime"
            type="time"
            step="60"
            value={time}
            onChange={onChangeTime}
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="새로운 todo를 입력하세요"
            value={input}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>
        <button onClick={onSubmit}>입력</button>
      </div>
    </div>
  );
}

export default Editor;
