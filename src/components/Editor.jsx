import { useState } from "react";

function Editor({ onCreate }) {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = () => {
    if (input === "") {
      return;
    }
    onCreate(input);
    setInput("");
    alert(input);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="새로운 todo를 입력하세요"
        value={input}
        onChange={onChange}
      />
      <button onClick={onSubmit}>입력</button>
    </div>
  );
}

export default Editor;
