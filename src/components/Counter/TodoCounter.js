import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext)
    return (
        <h1 className="Todo-counter"> Has completado {completedTodos} de {totalTodos} ToDos </h1 >
    )
}
export { TodoCounter }
