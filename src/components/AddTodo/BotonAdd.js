import React from 'react'
import './addTodo.css'
import { NavFilter } from './NavFilter.js/NavFilter'

export function BotonAdd({ clase, openModal, setOpenModal }) {
    const onClikButton = () => setOpenModal(state => !state)
    return (
        <div className='container-filter-todo'>
            <button className={`${clase} ${openModal && 'boton-add-new'}`}
                onClick={onClikButton}
            >Add task<ion-icon name="add-circle-outline"></ion-icon></button>
            <a href="./" className="icon-reload">
                <ion-icon name="reload-sharp"></ion-icon>
            </a>
            <NavFilter />
        </div>
    )
}
