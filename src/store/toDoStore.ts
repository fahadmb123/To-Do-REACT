import { create } from "zustand";
import type { ToDoStore } from "../types/modal";


const useTodoStore = create<ToDoStore>((set) => ({
    todos: [],

    addToDo: (todo) =>
        set((state) => ({
            todos: [...state.todos, todo],
        })),
}));

export default useTodoStore;