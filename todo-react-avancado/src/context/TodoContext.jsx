
import { createContext, useState, useEffect } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, removeTodo, setFilter, filteredTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
}
