import Item from '../ToDoItem/ToDoItem';
import "./ToDoList.css"
import useTodoStore from '../../../store/toDoStore';

function List () {
    const todos = useTodoStore((state) => state.todos);

    return (
        <>
            <div className="task-list">
                {todos.map((toDo)=>(<Item toDo={toDo} />))}
            </div>
        </>
    )
}


export default List 