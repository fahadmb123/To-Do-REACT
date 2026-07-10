import "./home.css"
import Header from "../../components/todo/ToDoHeader/ToDoHeader"
import AddButton from '../../components/todo/AddToDoButton/AddToDoButton.tsx';
import List from '../../components/todo/ToDoList/ToDoList.tsx';
import ToDoSummary from "../../components/todo/ToDoSummary/ToDoSummary.tsx";



function home() {
  
  return (
    <div className="container">
      <Header/>

      <div className="card">
        <ToDoSummary/>

        <AddButton />
      </div>

      <List/>
    </div>
  )
}


export default home