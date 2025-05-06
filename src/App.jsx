import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import Editor from "./components/Editor";
import { useState, useRef } from "react";

const mokdata = [
  {
    id: 1,
    content: "리액트공부하기",
    date: new Date(),
    isdone: true,
  },
  {
    id: 2,
    content: "리액트공부하기",
    date: new Date(),
    isdone: false,
  },
  {
    id: 3,
    content: "리액트공부하기",
    date: new Date(),
    isdone: false,
  },
];

function App() {
  const [todos, setTodos] = useState(mokdata);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      content: content,
      date: new Date(),
      isdone: false,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
