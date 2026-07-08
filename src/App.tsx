import { useEffect } from "react";
import Home from "./pages/Home/Home"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToDo } from "./service/toDoService";
import useTodoStore from "./store/toDoStore";


function App() {

  const setToDos = useTodoStore((state) => state.setToDos);
  
  useEffect(() => {
    const todos = getToDo();
    setToDos(todos);
  }, [setToDos]);


  return (
    <>
      <Home />


      <ToastContainer/>
    </>
  )
}


export default App
