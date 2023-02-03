import React, { useContext } from "react";
import { Aside } from "../Aside/Aside";
import { Main } from "../Div/Main";
import { TodoCounter } from '../Counter/TodoCounter';
import { TodoList } from "../Todos/TodoList";
import { TodoItem } from "../Todos/TodoItem";
import { DivcompAdd } from "../Div/DivcompAdd";
import { Right } from "../Div/Right";
import { Logo } from "../Logo/Logo";
import { TextInfo } from "../Info/TextInfo";
import { BotonAdd } from "../AddTodo/BotonAdd"
import { TodoSearch } from '../Search/TodoSearch'
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { Profile } from "../Profile/Profile";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { NavFilter } from "../NavFilter.js/NavFilter";

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    }
        = useContext(TodoContext)

    return (
        <div className="container-body-app">
            <div className="container-app">
                <Aside />
                <Main>
                    <TodoSearch />
                    <TodoCounter />
                    <DivcompAdd clase='container-filter-todo'>
                        <BotonAdd clase={'btn-new-todo'}
                            setOpenModal={setOpenModal}
                            openModal={openModal}
                        />
                        <a href="./" className="icon-reload">
                            <ion-icon name="reload-sharp"></ion-icon>
                        </a>
                        <NavFilter />
                    </DivcompAdd>
                    <TodoList >
                        {!error && <p className="text-loading">OH OHH CORRE NO SE QUE PASA</p>}
                        {loading &&
                            <div className="container-loading">
                                <p className="text-loading">Estamos cargando datos ... </p>
                                <div className="spinner"></div>
                            </div>}
                        {(!loading && !searchedTodos.length) && <p className="text-loading">Crea tu primer ToDo</p>}
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
                </Main>

                {/* MOBILE CONTAINER */}
                <DivcompAdd clase='container-add-todo-mobile'>
                    <BotonAdd
                        clase={'boton-add mobile-btn'}
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                    />
                </DivcompAdd>

                <Right>
                    <Profile />
                    <ProgressBar />
                    {openModal && (
                        <Modal>
                            <TodoForm />
                        </Modal>
                    )}

                </Right>

            </div>
        </div>
    )
}
export { AppUI }