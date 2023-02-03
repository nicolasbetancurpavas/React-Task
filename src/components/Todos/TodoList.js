import React from "react";
import './todoList.css'

function TodoList(props) {
    return (
        <section className="container">
            <ul>
                {props.children}
            </ul>

        </section>
    );
}

export { TodoList }