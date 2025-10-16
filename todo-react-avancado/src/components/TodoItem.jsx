// src/components/TodoItem.jsx
import { memo, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoItem = memo(({ todo }) => {
  const { toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <li className="todo-item">
      <span
  onClick={() => toggleTodo(todo.id)}
  className={todo.completed ? "completed" : ""}
>
  {todo.text}
</span>

      <button onClick={() => removeTodo(todo.id)}>🗑️</button>
    </li>
  );
});
