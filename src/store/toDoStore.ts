import { create } from "zustand";
import type { ToDoStore,ToDo } from "../types/modal";


const useTodoStore = create<ToDoStore>((set) => ({
    todos: [],
    toggleCompleted: (id:number) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo
            )
        })),
    setToDos: (todos) => set({ todos }),
    addToDo: (todo) =>
        set((state) => ({
            todos: [ todo,...state.todos],
        })),
    delete : (id:number) => 
        set((state) => ({
            todos : state.todos.filter ((todo)=>todo.id !== id)
        })),
    updateTodo: (toDo:ToDo) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === toDo.id
                    ? toDo
                    : todo
            )
        })),
}));

export default useTodoStore;