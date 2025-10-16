import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export function TodoFilters() {
  const { setFilter } = useContext(TodoContext);
  const [active, setActive] = useState("all");

  const handleFilter = (type) => {
    setFilter(type);
    setActive(type);
  };

  return (
    <div className="filters">
      <button
        className={active === "all" ? "active" : ""}
        onClick={() => handleFilter("all")}
      >
        Todas
      </button>
      <button
        className={active === "completed" ? "active" : ""}
        onClick={() => handleFilter("completed")}
      >
        Concluídas
      </button>
      <button
        className={active === "pending" ? "active" : ""}
        onClick={() => handleFilter("pending")}
      >
        Pendentes
      </button>
    </div>
  );
}
