import "../components/Count.css";

function Count({ todos }) {
  const allTodo = () => todos.length;

  const doneTodo = () => todos.filter((todo) => todo.isDone).length;

  const ingTodo = () => todos.length - doneTodo();

  return (
    <ul className="count">
      <li>
        <p>전체</p>
        <h4>{allTodo()}</h4>
      </li>
      <li>
        <p>진행중</p>
        <h4>{ingTodo()}</h4>
      </li>
      <li>
        <p>완료</p>
        <h4>{doneTodo()}</h4>
      </li>
    </ul>
  );
}

export default Count;

// 전체가 3개 진행중 2 완료 1 완료가 하나 늘면 진행중이 -1
//
