import React from 'react'

export const AsideItem = ({ icon, textItem }) => {
    return (
        <a className='aside_item' href='##'>
            <ion-icon name={icon}></ion-icon>
            <h3 className='sidebar_item'>{textItem}</h3>
        </a>
    )
}
