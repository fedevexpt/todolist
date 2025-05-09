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

  return (
    <div>
      <input type="time" value={time} onChange={onChangeTime} />
      <input
        ref={inputRef}
        type="text"
        placeholder="새로운 todo를 입력하세요"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>입력</button>
    </div>
  );
}

export default Editor;
