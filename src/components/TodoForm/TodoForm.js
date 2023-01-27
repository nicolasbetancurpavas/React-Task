import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export const TodoForm = () => {

    const {
        AddTodo,
        setOpenModal,
    } = useContext(TodoContext)

    const [newTodo, setNewTodo] = useState('')

    const onChange = (event) => {
        setNewTodo(event.target.value)
    }
    console.log(newTodo)

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        AddTodo(newTodo)
        setOpenModal(false)
    }


    return (
        <form className="form-addTodo" onSubmit={onSubmit}>
            <label>...</label>
            <textarea className="input-new-todo"
                placeholder="Organizar habitacion"
                value={newTodo}
                onChange={onChange}
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

