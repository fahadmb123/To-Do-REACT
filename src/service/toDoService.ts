import type { ToDo ,messageType,summaryDetails} from "../types/modal"
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

export function updateToDo (toDo:ToDo) :messageType{

    if (toDo.title.trim().length < 4) {
        return {
            success: false,
            message: "Please enter at least 4 letters"
        };
    }

    if (!toDo.deadline) {
        return {
            success: false,
            message: "Please select Deadline"
        };
    }


    useTodoStore.getState().updateTodo(toDo)

    const todos = useTodoStore.getState().todos

    saveTodos(todos)
    return {
        success:true,
        message : "Edited Successfully"
    }
}

export function getToDo ():ToDo[] {
    return getToDos()
}


export function getSummary(todos: ToDo[]): summaryDetails {
    const completed = todos.filter((todo) => todo.completed);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const pending = todos.filter((todo) => {
        const deadline = new Date(todo.deadline);
        return !todo.completed && deadline >= today;
    });
    
    
    return {
        totalTask: todos.length,
        completedTask: completed.length,
        pending: pending.length,
    };
}




