import { useRecoilState } from "recoil";
import { taskListState } from "../atoms/taskListAtom";

export default function TaskItem({ task }) {
  const [tasks, setTasks] = useRecoilState(taskListState);

  const toggleComplete = () => {
    const updated = tasks.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const removeTask = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={toggleComplete}>
        {task.completed ? "Desmarcar" : "Concluir"}
      </button>
      <button onClick={removeTask}>Remover</button>
    </li>
  );
}
