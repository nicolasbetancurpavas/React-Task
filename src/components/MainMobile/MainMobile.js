import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './mobile.css'
import logo from '../../assets/img/Logo.png'

export const MainMobile = () => {
    const { onClikOpen } = useContext(TodoContext)
    return (
        <div className='main-mobile'>
            <ion-icon name="menu-outline"
                onClick={onClikOpen}
            ></ion-icon>
            <div className='main-mobile-right'>
                <h2 className='title-mobile'>Cat<span>ToDo</span></h2>
                <img className='img-log-mobile' src={logo} alt='logo-mobile' />
            </div>
        </div>
    )
}
