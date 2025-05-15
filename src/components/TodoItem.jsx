import "./TodoItem.css";
import { useState } from "react";

function TodoItem({
  id,
  time,
  content,
  date,
  isDone,
  onToggle,
  onDelete,
  onUpdate,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const handleSave = () => {
    if (editContent.trim() === "") return;
    onUpdate(id, editContent), setIsEdit(false);
  };

  const timeampm = (timestr) => {
    if (!timestr) return "";

    const [hours, minutes] = timestr.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    return date.toLocaleTimeString("en-us", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
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
        <div className={`contentFlex content ${isDone ? "checked" : ""}`}>
          <div className="content">{content}</div>{" "}
          <div className="time">{timeampm(time)}</div>
        </div>
      )}

      {isEdit ? (
        <button onClick={handleSave}>저장</button>
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
