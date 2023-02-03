import React from 'react'
import './aside.css'
import { Logo } from '../Logo/Logo'
import { AsideBody } from './AsideBody'

export function Aside() {
    return (
        <aside className='container-aside'>
            <Logo />
            <AsideBody />
        </aside>
    )
}
