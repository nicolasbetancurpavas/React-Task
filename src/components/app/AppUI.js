import React, { useContext } from "react";
import { Aside } from "../Aside/Aside";
import { Main } from "../Div/Main";
import { TodoCounter } from '../Counter/TodoCounter';
import { TodoList } from "../Todos/TodoList";
import { TodoItem } from "../Todos/TodoItem";
import { DivcompAdd } from "../Div/DivcompAdd";
import { Right } from "../Div/Right";
import { BotonAdd } from "../AddTodo/BotonAdd"
import { TodoSearch } from '../Search/TodoSearch'
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { Profile } from "../Profile/Profile";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Divisor } from "../Div/Divisor";
import { Premium } from "../Premium/Premium";
import { Comments } from "../Comments/Comments";
import { MainMobile } from "../MainMobile/MainMobile";

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        searchValue,
    }
        = useContext(TodoContext)

    return (
        <div className="container-app">
            <MainMobile />
            <Aside />
            <Main>
                <TodoSearch />
                <Divisor clase='container-promo'>
                    <TodoCounter />
                    <Premium />
                </Divisor>
                <div className="title-task">
                    <h2>your tasks <ion-icon name="checkbox-sharp"></ion-icon></h2>
                    <BotonAdd
                        clase={'btn-new-todo '}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    />
                </div>
                <TodoList>
                    {(!searchedTodos.length && searchValue.length > 1) && <p className="text-loading">There is no such task</p>}
                    {!error && <p className="text-loading">OH OHH RUN I DON'T KNOW WHAT'S GOING ON</p>}
                    {loading &&
                        <div className="container-loading">
                            <p className="text-loading">We are loading data... </p>
                            <div className="spinner"></div>
                        </div>}
                    {(!searchValue.length >= 1 && !loading && !searchedTodos.length) &&
                        <div className="container-card-new-todo">
                            <h3 className="title-create">
                                Add your first task</h3>
                            <span className="icon-newtodo"><ion-icon name="add-circle-outline"></ion-icon></span>
                        </div>
                    }
                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            texto={todo.text}
                            title={todo.title}
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
                <Comments />
                {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            </Right>
        </div>
    )
}
export { AppUI }