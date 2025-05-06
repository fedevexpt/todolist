import TodoItem from "./TodoItem";

function List({ todos }) {
  const filterTodos = todos.filter((todo) => todo.isdone === true);
  return (
    <div>
      <h1>오늘의 todo....</h1>
      <input type="text" placeholder="검색하세요." />
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}

export default List;
