import "./ToDoSummary.css";

function ToDoSummary() {
  return (
    <div className="summary-card">
      <h2> Todo Summary</h2>

      <p>Total Tasks: 10</p>
      <p> Completed: 4</p>
      <p> Pending: 6</p>
    </div>
  );
}

export default ToDoSummary;