import { useEffect } from "react";
import useTodoStore from "../store/toDoStore";
import { toast } from "react-toastify";

function OverDueChecker() {
    const todos = useTodoStore((state) => state.todos);

    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        todos.forEach((todo) => {
            const deadline = new Date(todo.deadline);

            if (!todo.completed && deadline < today) {
                toast.error(`Task:${todo.title} Over Due :${todo.deadline} `)
            }
        });
    }, [todos]);

    return null;
}

export default OverDueChecker;