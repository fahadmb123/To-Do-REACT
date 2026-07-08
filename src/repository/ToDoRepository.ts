import type { ToDo } from "../types/modal";



export function save(toDo:ToDo):void{
    const toDos = getToDos()
    toDos.push(toDo)
    localStorage.setItem('todos',JSON.stringify(toDos))

}

export function saveTodos(todo:ToDo[]) {
    localStorage.setItem("todos",JSON.stringify(todo))
}

export function getToDos ():ToDo[] {
    return JSON.parse(localStorage.getItem("todos") || "[]")
} 
