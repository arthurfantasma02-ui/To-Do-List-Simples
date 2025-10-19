import { selector } from "recoil";
import { taskListState } from "../atoms/taskListAtom";
import { filterState } from "../atoms/filterAtom";

export const filteredTasksSelector = selector({
  key: "filteredTasksSelector",
  get: ({ get }) => {
    const filter = get(filterState);
    const tasks = get(taskListState);

    switch (filter) {
      case "completed":
        return tasks.filter(t => t.completed);
      case "pending":
        return tasks.filter(t => !t.completed);
      default:
        return tasks;
    }
  },
});
