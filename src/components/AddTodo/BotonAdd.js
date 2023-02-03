import React from 'react'
import './addTodo.css'

export function BotonAdd({ clase, openModal, setOpenModal }) {
    const onClikButton = () => setOpenModal(state => !state)
    return (
        <button className={`${clase} ${openModal && 'boton-add-new'}`}
            onClick={onClikButton}
        >Agregar tarea +</button>
    )
}
