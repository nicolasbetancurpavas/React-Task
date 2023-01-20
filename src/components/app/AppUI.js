import React from "react";
import { TodoCounter } from '../Counter/TodoCounter';
import { TodoSearch } from "../Search/TodoSearch";
import { TodoList } from "../Todos/TodoList";
import { TodoItem } from "../Todos/TodoItem";
import { Divcomp } from "../Divisores/Divcomp";
import { DivcompAdd } from "../Divisores/DivcompAdd";
import { Width } from "../Divisores/Width";
import { Logo } from "../Logo/Logo";
import { TextInfo } from "../Info/TextInfo";
import { TextAdd } from "../AddTodo/TextAdd";
import { BotonAdd } from "../AddTodo/BotonAdd"
import { SearchedText } from '../SearchText/SearchText'

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {

    return (
        <React.Fragment>
            <Divcomp>
                <Logo />
                <TextInfo />
                <DivcompAdd>
                    <TextAdd />
                    <BotonAdd />
                </DivcompAdd>
            </Divcomp>
            <Width>
                <TodoCounter
                    Name="ToDo"
                    total={totalTodos}
                    completed={completedTodos}
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <SearchedText
                    task={searchValue}
                />

                <TodoList >
                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            texto={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList >
            </Width>
        </React.Fragment >
    )
}

export { AppUI }