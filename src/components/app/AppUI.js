import React, { useContext } from "react";
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
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm/TodoForm";




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
        <>
            <div className="container-todo">
                <Divcomp>

                    <Logo />
                    <TextInfo />

                </Divcomp>

                <DivcompAdd clase='container-add-todo-mobile'>
                    <TextAdd />
                    <BotonAdd
                        clase={'boton-add mobile-btn'}
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                    />
                </DivcompAdd>

                <Width>
                    <DivcompAdd clase='item-add'>
                        <TextAdd />
                        <BotonAdd clase={'boton-add'}
                            setOpenModal={setOpenModal}
                            openModal={openModal}
                        />
                    </DivcompAdd>


                    <TodoCounter />
                    <TodoSearch />
                    <SearchedText />

                    <ion-icon name="chevron-up-outline"></ion-icon>


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
                    {openModal && (
                        <Modal>
                            <TodoForm />
                        </Modal>
                    )}

                    <ion-icon name="chevron-down-outline"></ion-icon>

                </Width>

            </div>

        </ >
    )
}

export { AppUI }