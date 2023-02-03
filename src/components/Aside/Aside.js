import React, { useContext } from 'react'
import './aside.css'
import { Logo } from '../Logo/Logo'
import { AsideBody } from './AsideBody'
import { TodoContext } from '../TodoContext'


export function Aside() {
    const { totalTodos } = useContext(TodoContext)
    return (
        <aside className='container-aside'>
            <Logo />
            <AsideBody
                totalTodos={totalTodos}
            />
        </aside>
    )
}
