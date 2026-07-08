import type { ToDo ,messageType} from "../types/modal"
import {save,getToDos,saveTodos} from "../repository/ToDoRepository"
import useTodoStore from "../store/toDoStore";



export function addToDo (title: string, deadline: string):messageType {
    if (title.trim().length < 4) {
        return {
            success: false,
            message: "Please enter at least 4 letters"
        };
    }

    if (!deadline) {
        return {
            success: false,
            message: "Please select Deadline"
        };
    }

    const todo: ToDo = {
        id: Date.now(),
        title,
        deadline,
        completed: false
    };

    useTodoStore.getState().addToDo(todo);

    save(todo);

    return {
        success: true,
        message:'Task Added sucecssfully'
    };
    
}


export function toggleComplete (id:number):messageType {

    useTodoStore.getState().toggleCompleted(id)

    const todos = useTodoStore.getState().todos

    saveTodos(todos)

    return {
        success:true,
        message : "Updated Successfully"
    }

}

export function deleteCard (id:number):messageType {

    useTodoStore.getState().delete(id)

    const todos = useTodoStore.getState().todos

    saveTodos(todos)
    return {
        success:true,
        message : "Deleted Successfully"
    }
}



export function getToDo ():ToDo[] {
    return getToDos()
}
