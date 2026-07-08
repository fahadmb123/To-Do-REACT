import type { ItemProps } from "../../../types/modal"

function Item ({title,date,completed}:ItemProps) {
    return (
        <>
            <div className={completed ? "task completed" : "task"}>
                <div className="task-info">
                    <h3>{title}</h3>
                    <p>{date}</p>
                </div>

                <div className="actions">
                    <button className="complete">{completed ? "Completed" : "Complete"}</button>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Item