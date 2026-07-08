import "./home.css"
import Header from "../../components/todo/ToDoHeader/ToDoHeader"
import AddButton from '../../components/todo/AddToDoButton/AddToDoButton.tsx';
import List from '../../components/todo/ToDoList/ToDoList.tsx';



function home() {
  return (
    <div className="container">
      <Header/>

      <div className="card">
        <div className="input-group">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            placeholder="Enter task"
          />
        </div>

        <div className="input-group">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
          />
        </div>

        <AddButton />
      </div>

      <List/>
    </div>
  );
}


export default home