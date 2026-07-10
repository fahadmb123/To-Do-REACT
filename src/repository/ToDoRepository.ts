import type { ToDo } from "../types/modal";


let transaction:number = 0 


export function updateTransaction () {
    transaction++
}

export function getTransaction () :number {
    return transaction
}
export function save(toDo:ToDo):void{
    const toDos = getToDos()
    toDos.unshift(toDo)
    localStorage.setItem('todos',JSON.stringify(toDos))
    updateTransaction()
}

export function saveTodos(todo:ToDo[]) {
    localStorage.setItem("todos",JSON.stringify(todo))
    updateTransaction()
}

export function getToDos ():ToDo[] {
    return JSON.parse(localStorage.getItem("todos") || "[]")
}