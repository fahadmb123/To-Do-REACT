import "./ToDoSummary.css";

function ToDoSummary() {
  return (
    <div className="todo-summary">
      <h2>Todo Summary</h2>

      <div className="summary">
        <div className="summary-item">
          <span>Total Tasks</span>
          <strong>10</strong>
        </div>

        <div className="summary-item">
          <span>Completed</span>
          <strong>4</strong>
        </div>

        <div className="summary-item">
          <span>Pending</span>
          <strong>6</strong>
        </div>
      </div>
    </div>
  );
}

export default ToDoSummary;