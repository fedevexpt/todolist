import "./index.css";
import "./App.css";
import List from "./components/List";
// import Header from "./components/Header";
import Editor from "./components/Editor";
import Count from "./components/Count";
import { useState, useRef } from "react";

const mokdata = [
  {
    id: 0,
    content: "할 일을 입력하세요.",
    isDone: false,
  },
];

function App() {
  const [todos, setTodos] = useState(mokdata);

  const idRef = useRef(1);

  const onCreate = (content, time) => {
    const newTodo = {
      time,
      id: idRef.current++,
      content: content,
      date: new Date(),
      isDone: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const onToggle = (id) => {
    const updateNewTodo = todos.map((todo) => {
      if (todo.id === id) {
        const updated = {
          ...todo,
          isDone: !todo.isDone,
        };
        console.log("✅ 토글된 항목:", updated);
        return updated;
      } else {
        return todo;
      }
    });
    setTodos(updateNewTodo);
  };

  const onDelete = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  const onUpdate = (id, newContent) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, content: newContent } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="todoList">
        {/* <Header /> */}

        <Editor onCreate={onCreate} />
        <Count todos={todos} />
        <List
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
}

export default App;
