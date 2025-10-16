// src/App.jsx
import { useContext } from "react";
import { TodoContext, TodoProvider } from "./context/TodoContext";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { TodoFilters } from "./components/TodoFilters";
import "./App.css";


function TodoApp() {
  const { filteredTodos } = useContext(TodoContext);

  return (
    <div className="app">
      <h1>Todo List Avançado</h1>
      <TodoForm />
      <TodoFilters />
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}
