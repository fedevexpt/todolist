import TodoItem from "./TodoItem";
import { useState } from "react";

function List({ todos, onToggle, onDelete, onUpdate }) {
  const filterTodos = todos.filter((todo) => todo.isDone === true);
  const [search, setSearch] = useState("");

  const getFilterSearch = () => {
    if (!search.trim()) return todos;

    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  return (
    <div>
      <h1>오늘의 todo....</h1>
      <input
        type="text"
        placeholder="검색하세요."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="todos_wrapper">
        {getFilterSearch().map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
