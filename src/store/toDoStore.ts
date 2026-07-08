import { create } from "zustand";
import type { ToDoStore } from "../types/modal";


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
            todos: [...state.todos, todo],
        })),
    delete : (id:number) => 
        set((state) => ({
            todos : state.todos.filter ((todo)=>todo.id !== id)
        }))
}));

export default useTodoStore;