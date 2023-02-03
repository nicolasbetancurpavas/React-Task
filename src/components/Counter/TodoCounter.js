import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './counter.css'
import { TodoCounterItem } from "./TodoCounterItem";

function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext)
    return (
        <div className="container-count-todo">
            <TodoCounterItem
                title={'Total task'}
                value={totalTodos}
            />
            <TodoCounterItem
                title={'Completed task'}
                value={completedTodos}
            />
            <TodoCounterItem
                title={'Favorites'}
                value={0}
            />
            <TodoCounterItem
                title={'In progress'}
                value={0}
            />
        </div>
    )
}
export { TodoCounter }
