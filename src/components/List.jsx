import TodoItem from "./TodoItem";

function List({ todos, onToggle, onDelete }) {
  const filterTodos = todos.filter((todo) => todo.isDone === true);
  return (
    <div>
      <h1>오늘의 todo....</h1>
      <input type="text" placeholder="검색하세요." />
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
