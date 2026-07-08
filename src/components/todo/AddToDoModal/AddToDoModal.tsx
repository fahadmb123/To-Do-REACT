import "./AddToDoModal.css";
import type {ModalProps} from "../../../types/modal"


function Modal({closeModal}:ModalProps) {

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
          <button className="cancel-btn" onClick={closeModal}>Cancel</button>
          <button className="save-btn" onClick={closeModal}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;