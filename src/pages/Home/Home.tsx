import "./home.css"
import Header from "../../components/todo/ToDoHeader/ToDoHeader"

function home() {
  return (
    <div className="container">
      <Header/>

      <div className="card">
        <div className="input-group">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            placeholder="Enter task"
          />
        </div>

        <div className="input-group">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
          />
        </div>

        <button>Add Task</button>
      </div>

      <div className="task-list">
        <div className="task">
          <div className="task-info">
            <h3>Learn React</h3>
            <p>📅 10 July 2026</p>
          </div>

          <div className="actions">
            <button className="complete">Complete</button>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>

        <div className="task completed">
          <div className="task-info">
            <h3>Practice TypeScript</h3>
            <p>📅 08 July 2026</p>
          </div>

          <div className="actions">
            <button className="complete">Completed</button>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default home