import "./ToDoSummary.css";
import { getSummary } from "../../../service/toDoService";
import useTodoStore from "../../../store/toDoStore";






function ToDoSummary() {

  
  const todos = useTodoStore((state) => state.todos);


  //const transaction = useTodoStore((state) => state.transaction)
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
      </div>
    </div>
  );
}

export default ToDoSummary;