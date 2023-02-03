import React from 'react'
import { AsideItem } from './AsideItem'
import { AsideBottom } from './AsideBottom'

export const AsideBody = () => {
    return (
        <div className='container-sidebar'>
            <div className='sidebar_top'>
                <AsideItem
                    icon={'person-sharp'}
                    textItem={'User'}
                />
                <AsideItem
                    icon={'home-sharp'}
                    textItem={'Overview'}
                />
            </div>
            <div className='sidebar_body'>
                <h4>Menu</h4>
                <AsideItem
                    icon={'briefcase-sharp'}
                    textItem={'Proyects'}
                />
                <a className='aside_item task' href='##'>
                    <ion-icon name="pencil-sharp"></ion-icon>
                    <h3 className='sidebar_item'>My task</h3>
                    <span>10</span>
                </a>
                <AsideItem
                    icon={'calendar-number-sharp'}
                    textItem={'Calendar'}
                />
                <a className='aside_item' href='##'>
                    <ion-icon name="mail-sharp"></ion-icon>
                    <h3 className='sidebar_item'>Messages</h3>
                    <span className='span-message'>23</span>
                </a>

                <a className='aside_item' href='##'>
                    <ion-icon name="people-sharp"></ion-icon>
                    <h3 className='sidebar_item'>Team members</h3>
                    <span className='span-new'>new</span>
                </a>
            </div>
            <AsideBottom />
        </div>
    )
}
