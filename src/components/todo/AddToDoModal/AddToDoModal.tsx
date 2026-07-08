import "./AddToDoModal.css";
import type {ModalProps,ToDo} from "../../../types/modal"
import { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTodoStore from "../../../store/toDoStore";


function Modal({closeModal}:ModalProps) {

  const [title,setTtle] = useState("")
  const [deadline,setDeadline] = useState("")
  
  function handleClick(){

    if (title.trim().length < 4) {
      toast.error("Please enter at least 4 letters");
      return;
    } else if (!deadline) {
      toast.error("Please select DeadLine");
      return;
    }
    toast.success("Task Added sucsessfully")
    const toDo:ToDo = {
      id: Date.now(),
      completed : false,
      deadline : deadline,
      title : title
    }
    
    const addToDo =  useTodoStore.getState().addToDo
    addToDo(toDo)

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