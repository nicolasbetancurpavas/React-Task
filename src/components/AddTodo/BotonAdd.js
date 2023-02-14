import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './addTodo.css'
import { NavFilter } from './NavFilter.js/NavFilter'

export function BotonAdd({ clase }) {
    const { onClikButton } = useContext(TodoContext)
    return (
        <div className='container-filter-todo'>
            <button className={`${clase}`}
                onClick={onClikButton}
            >Add task<ion-icon name="add-circle-outline"></ion-icon></button>
            <a href="./" className="icon-reload">
                <ion-icon name="reload-sharp"></ion-icon>
            </a>
            <NavFilter />
        </div>
    )
}
