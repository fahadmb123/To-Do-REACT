import Item from '../ToDoItem/ToDoItem';
import "./ToDoList.css"
import useTodoStore from '../../../store/toDoStore';

function List () {
    const todos = useTodoStore((state) => state.todos);
    
    return (
        <>
            <div className="task-list">
                
                {todos.map((toDo)=>(<Item key={toDo.id} toDo={toDo} />))}
            </div>
        </>
    )
}


export default List 