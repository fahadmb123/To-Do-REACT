import "./ToDoSummary.css";
import { getSummary } from "../../../service/toDoService";
import useTodoStore from "../../../store/toDoStore";
import { getTransaction } from "../../../repository/ToDoRepository";

function ToDoSummary() {

  const todos = useTodoStore((state) => state.todos);
  const result = getSummary(todos);
  
  return (
    <div className="todo-summary">
      <h2>Todo Summary</h2>

      <div className="summary">
        <div className="summary-item">
          <span>Total Tasks</span>
          <strong>{result.totalTask}</strong>
        </div>

        <div className="summary-item">
          <span>Completed</span>
          <strong>{result.completedTask}</strong>
        </div>

        <div className="summary-item">
          <span>Pending</span>
          <strong>{result.pending}</strong>
        </div>

        <div className="summary-item">
          <span>Transaction</span>
          <strong>{getTransaction()}</strong>
        </div>
      </div>
    </div>
  );
}

export default ToDoSummary;