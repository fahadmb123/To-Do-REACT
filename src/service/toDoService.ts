import type { ToDo } from "../types/modal"
import {save,getToDos} from "../repository/ToDoRepository"
import useTodoStore from "../store/toDoStore";



export function addToDo (title: string, deadline: string) {
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
        success: true
    };
    
}

export function getToDo ():ToDo[] {
    return getToDos()
}




