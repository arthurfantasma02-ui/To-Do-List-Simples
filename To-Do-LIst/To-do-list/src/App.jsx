import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="app">
      <h1>Minhas Tarefas 📝</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}
