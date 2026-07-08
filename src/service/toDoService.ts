import type { ToDo } from "../types/modal"
import { save } from "../repository/ToDoRepository"


export function addToDo (toDo:ToDo) {
    save(toDo)
}



