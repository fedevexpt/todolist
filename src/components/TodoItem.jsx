import "./TodoItem.css";

function TodoItem({ id, content, date, isDone, onToggle, onDelete }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={!!isDone} onChange={() => onToggle(id)} />
      <div className={`content ${isDone ? "checked" : ""}`}>{content}</div>
      <div className="date">{date.toLocaleString()}</div>
      <button>수정</button>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
