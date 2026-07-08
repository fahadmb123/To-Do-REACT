import "./AddToDoModal.css";
import type {ModalProps} from "../../../types/modal"
import { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToDo } from "../../../service/toDoService";



function Modal({closeModal}:ModalProps) {

  const [title,setTtle] = useState("")
  const [deadline,setDeadline] = useState("")
  
  function handleClick() {
    
    const result = addToDo(title,deadline);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    
    closeModal();
  }

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
            value={title}
            onChange={(e)=>{setTtle(e.target.value)}}
          />
        </div>

        <div className="input-group">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e)=>{setDeadline(e.target.value)}}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={closeModal}>Cancel</button>
          <button className="save-btn" onClick={handleClick} >Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;