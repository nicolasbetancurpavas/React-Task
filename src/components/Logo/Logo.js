import React from 'react'
import Img from "../../assets/img/Logo.png"
import './logo.css'

export function Logo() {
    return (
        <div className='container_aside_top'>
            <img className='aside_top_img' src={Img} alt='logo' />
            <h1 className='aside_top_title'>Cat <span>ToDo</span></h1>
        </div>
    )
}