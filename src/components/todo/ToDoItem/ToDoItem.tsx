import type { ItemProps ,messageType} from "../../../types/modal"
import { toggleComplete as toggle ,deleteCard} from "../../../service/toDoService"
import { toast } from "react-toastify"
import Modal from "../AddToDoModal/AddToDoModal"
import { useState } from "react"



function showMessage(result:messageType) {
    if (result.success) {
        toast.success(result.message)
    }else {
        toast.error("Updation failed")
    }
}

function Item ({toDo}:ItemProps) {
    const [modalState,setModalState] = useState(false)


    function setModal () {
        setModalState(true)
    }


    function deleteItem (id:number):void {
        const result = deleteCard(id)
        
        showMessage(result)
    }

    function toggleComplete (id:number):void {
        const result = toggle(id)

        showMessage(result)
    }

    return (
        <>
            <div className={toDo?.completed ? "task completed" : "task"}>
                <div className="task-info">
                    <h3>{toDo?.title}</h3>
                    <p>{toDo?.deadline}</p>
                </div>

                <div className="actions">
                    <button onClick={()=>{toggleComplete(toDo.id)}} className="complete">{toDo?.completed ? "Completed" : "Complete"}</button>
                    <button onClick={()=>{setModal()}} className="edit">Edit</button>
                    <button onClick={()=>{deleteItem(toDo?.id)}} className="delete">Delete</button>
                </div>
            </div>

            {modalState && (
                <Modal toDo={toDo} closeModal = {()=>{setModalState(false)}}/>
            )}
        </>
    )
}

export default Item