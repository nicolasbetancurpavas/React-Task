import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './counter.css'
import { TodoCounterItem } from "./TodoCounterItem";

function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext)
    return (
        <div className="container-count-todo">
            <TodoCounterItem
                title={'TOTAL-TASK'}
                value={totalTodos}
            />
            <TodoCounterItem
                title={'COMPLETE-TASK'}
                value={completedTodos}
            />
            <TodoCounterItem
                title={'IN PROGRESS'}
                value={'diasable'}
            />
            <TodoCounterItem
                title={'WAITING'}
                value={'diasable'}
            />
        </div>
    )
}
export { TodoCounter }
