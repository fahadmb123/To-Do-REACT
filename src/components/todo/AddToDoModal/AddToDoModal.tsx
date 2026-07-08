import "./AddToDoModal.css";

function Modal() {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Task</h2>

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

        <div className="modal-buttons">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;