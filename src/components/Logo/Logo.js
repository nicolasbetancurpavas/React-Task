import React from 'react'
import Img from "../../assets/Logo.png"

export function Logo() {
    return (
        <div className='container-logo'>
            <img className='img-logo' src={Img} alt='logo' />
            <h1 className='title-logo'>Astro ToDo</h1>
        </div>
    )
}