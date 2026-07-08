import "./AddToDoModal.css";
import type {messageType, ModalProps} from "../../../types/modal"
import { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToDo,updateToDo } from "../../../service/toDoService";


function showMessage (result:messageType) {
  if (result.success) {
    toast.success(result.message)
  } else {
    toast.error(result.message)
    return {fail:true}
  }
}

function Modal({closeModal,toDo}:ModalProps) {

  const [title,setTtle] = useState(toDo ? toDo.title :"")
  const [deadline,setDeadline] = useState(toDo ? toDo.deadline :"")
  
  function handleClick() {

    if (toDo) {
      const result = updateToDo({
        deadline : deadline,
        title : title,
        id : toDo.id,
        completed : toDo.completed
      })
      const fail = showMessage(result)
      if (fail) return
      closeModal();
      return
    }
    
    const result = addToDo(title,deadline);

    const fail = showMessage(result)
    if (fail) return
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