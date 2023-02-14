import React, { useContext } from 'react'
import './aside.css'
import { Logo } from '../Logo/Logo'
import { AsideBody } from './AsideBody'
import { TodoContext } from '../TodoContext'


export function Aside() {
    const { totalTodos, openMenu, onClikOpen } = useContext(TodoContext)
    return (
        <aside translate='no'
            className={`container-aside ${openMenu ? 'open-Menu' : null}`}
            onClick={onClikOpen}
        >
            <span className='close-btn'>
                <ion-icon name="close-outline"></ion-icon>
            </span>
            <Logo />
            <AsideBody totalTodos={totalTodos} />
        </aside>
    )
}
