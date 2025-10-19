import { useRecoilState } from "recoil";
import { taskListState } from "../atoms/taskListAtom";
import { useState } from "react";

export default function TaskInput() {
  const [tasks, setTasks] = useRecoilState(taskListState);
  const [value, setValue] = useState("");

  const addTask = () => {
    if (!value.trim()) return;
    const newTask = {
      id: Date.now(),
      text: value,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTask}>Adicionar</button>
    </div>
  );
}
