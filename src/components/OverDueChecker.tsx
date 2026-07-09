import { useEffect,useRef } from "react";
import useTodoStore from "../store/toDoStore";
import { toast } from "react-toastify";

function OverDueChecker() {
    const todos = useTodoStore((state) => state.todos);

    const notified = useRef(new Set<number>());

    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const threeDaysLater = new Date(today);
        threeDaysLater.setDate(today.getDate() + 3);

        todos.forEach((todo) => {
            const deadline = new Date(todo.deadline);

            const dueSoon =
                !todo.completed &&
                deadline >= today &&
                deadline <= threeDaysLater;

            const diffInMs = deadline.getTime() - today.getTime();
            const daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

            if (dueSoon && !notified.current.has(todo.id)) {
                toast.warning(`${todo.title} is due within ${daysLeft}`);
                notified.current.add(todo.id);
            }
        });
    }, [todos]);

    return null;
}

export default OverDueChecker;