import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export const TodoForm = () => {

    const {
        AddTodo,
        setOpenModal,
    } = useContext(TodoContext)

    const [todoDescription, setTodoDescription] = useState('')
    const [todoTitle, setTodotitle] = useState('')

    const onChangeTitle = (event) => {
        setTodotitle(event.target.value)
    }
    const onChange = (event) => {
        setTodoDescription(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        AddTodo(todoDescription, todoTitle)
        setOpenModal(false)
    }

    return (
        <form className="form-addTodo" onSubmit={onSubmit}>
            <div className="close" onClick={onCancel}>
                <ion-icon name="close-outline"></ion-icon>
            </div>
            <label for='title'>Create task</label>
            <input className="input-title" placeholder='Title task'
                value={todoTitle}
                onChange={onChangeTitle}
                minLength={2}
                required={true}
            />
            <textarea className="input-new-todo"
                placeholder="Description task"
                value={todoDescription}
                onChange={onChange}
                minLength={2}
                required={true}
            />
            <div className="container-btn-new-todo">
                <button className="btn-add-todo"
                    type='button'
                    onClick={onCancel}
                >
                    cancelar
                </button>
                <button className="btn-add-todo-save"
                    type='submit'
                >
                    agregar ToDo
                </button>
            </div>
        </form>
    )
}

