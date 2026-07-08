import type { ItemProps } from "../../../types/modal"
import { toggleComplete as toggle } from "../../../service/toDoService"
import { toast } from "react-toastify"


function Item ({toDo}:ItemProps) {

    function toggleComplete (id:number):void {
        const result = toggle(id)

        if (result.success) {
            toast.success("Updated Successfully...")
        }else {
            toast.error("Updation failed")
        }
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
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Item