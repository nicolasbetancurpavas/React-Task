import React from "react";

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