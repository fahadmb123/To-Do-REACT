import {  useState } from "react"
import Modal from "../AddToDoModal/AddToDoModal"



function AddButton () {

    const [modalState,setModalState] = useState(false)


    function setModal(){
        setModalState(true)
    }
    

    return (
        <>
            <button onClick={setModal}>Add Task</button>
            {modalState && (
                <Modal closeModal = {()=>{setModalState(false)}}/>
            )}
        </>
    )
}
export default AddButton