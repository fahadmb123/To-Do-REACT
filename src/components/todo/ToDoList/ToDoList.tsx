import './ToDoList.css';


function List () {
    return (
        <>
            <div className="task-list">
                <div className="task">
                <div className="task-info">
                    <h3>Learn React</h3>
                    <p>📅 10 July 2026</p>
                </div>

                <div className="actions">
                    <button className="complete">Complete</button>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>
                </div>

                <div className="task completed">
                <div className="task-info">
                    <h3>Practice TypeScript</h3>
                    <p>📅 08 July 2026</p>
                </div>

                <div className="actions">
                    <button className="complete">Completed</button>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>
                </div>
            </div>
        </>
    )
}


export default List 