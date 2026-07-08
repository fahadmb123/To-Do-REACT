import type { ToDo } from "../types/modal";



export function save(toDo:ToDo){

    localStorage.setItem('todos',JSON.stringify(toDo))

}

