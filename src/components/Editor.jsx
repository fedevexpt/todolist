import { useState, useRef } from "react";

function Editor({ onCreate }) {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = () => {
    if (input === "") {
      inputRef.current.focus();
      return;
    }

    onCreate(input);
    setInput("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div>
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
