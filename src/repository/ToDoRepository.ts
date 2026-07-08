import type { ToDo } from "../types/modal";



export function save(toDo:ToDo):void{
    const toDos = getToDos()
    toDos.push(toDo)
    localStorage.setItem('todos',JSON.stringify(toDos))

}


export function getToDos ():ToDo[] {
    return JSON.parse(localStorage.getItem("todos") || "[]")
} 
