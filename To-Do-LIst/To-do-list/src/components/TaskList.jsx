import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTasksSelector } from "../selectors/filteredTasksSelector";
import { filterState } from "../atoms/filterAtom";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useRecoilValue(filteredTasksSelector);
  const setFilter = useSetRecoilState(filterState);

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("completed")}>Concluídas</button>
        <button onClick={() => setFilter("pending")}>Pendentes</button>
      </div>
      <ul>
        {tasks.length > 0 ? (
          tasks.map(task => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>Nenhuma tarefa encontrada.</p>
        )}
      </ul>
    </div>
  );
}
