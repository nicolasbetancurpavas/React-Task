import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './mobile.css'

export const MainMobile = () => {
    const { onClikOpen } = useContext(TodoContext)
    return (
        <div className='main-mobile' onClick={onClikOpen}>
            <ion-icon name="menu-outline"></ion-icon>
        </div>
    )
}
