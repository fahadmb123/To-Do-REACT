import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [],

    addTodo: (todo) =>
        set((state) => ({
            todos: [...state.todos, todo],
        })),
}));

export default useTodoStore;