import type { ItemProps } from "../../../types/modal"

function Item ({toDo}:ItemProps) {
    return (
        <>
            <div className={toDo?.completed ? "task completed" : "task"}>
                <div className="task-info">
                    <h3>{toDo?.title}</h3>
                    <p>{toDo?.deadline}</p>
                </div>

                <div className="actions">
                    <button className="complete">{toDo?.completed ? "Completed" : "Complete"}</button>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Item