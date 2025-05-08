import "./TodoItem.css";
import { useState } from "react";

function TodoItem({ id, content, date, isDone, onToggle, onDelete, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const hadleSave = () => {
    if (editContent.trim() === "") return;
    onUpdate(id, editContent), setIsEdit(false);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={!!isDone} onChange={() => onToggle(id)} />
      {isEdit ? (
        <>
          <input
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        </>
      ) : (
        <div className={`content ${isDone ? "checked" : ""}`}>{content}</div>
      )}
      <div className="date">{date.toLocaleString()}</div>
      {isEdit ? (
        <button onClick={hadleSave}>저장</button>
      ) : (
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          수정
        </button>
      )}

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
