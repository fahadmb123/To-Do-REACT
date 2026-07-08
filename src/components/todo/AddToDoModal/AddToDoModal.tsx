import "./AddToDoModal.css";
import type {ModalProps,ToDo} from "../../../types/modal"
import { useState } from "react";




function Modal({closeModal}:ModalProps) {

  const [title,setTtle] = useState("")
  const [deadline,setDeadline] = useState("")
  
  function handleClick(){

    const toDo:ToDo = {
      id: Date.now(),
      completed : false,
      deadline : deadline,
      title : title
    }
    console.log(toDo)
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
          />
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={closeModal}>Cancel</button>
          <button className="save-btn" onClick={()=>{closeModal();handleClick()}} >Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;