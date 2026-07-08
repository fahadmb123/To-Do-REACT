import type { ToDo } from "../types/modal"
import {save,getToDos} from "../repository/ToDoRepository"


export function addToDo (toDo:ToDo) {
    save(toDo)
}

export function getToDo ():ToDo {
    return getToDos()
}




