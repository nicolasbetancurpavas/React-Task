import React from "react";

function TodoCounter({ Name, total, completed }) {
    return (
        <h1 className="Todo-counter"> Has completado {completed} de {total} {Name} </h1 >
    )
}

export { TodoCounter }
