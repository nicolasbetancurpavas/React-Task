import React from 'react'
import profile from '../../assets/img/team/profile1.png'
import profile2 from '../../assets/img/team/profile2.png'
import profile3 from '../../assets/img/team/profile3.png'

export const AsideBottom = () => {
    return (
        <div className='sidebar_bottom'>
            <h4>Your team</h4>
            <a href='##'>
                <img className='sidebar_bottom_img' src={profile3} alt='img-team' />
                <h3 className='sidebar_item'>Charles Smitt</h3>
                <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
            </a>
            <a href='##'>
                <img className='sidebar_bottom_img' src={profile2} alt='img-team' />
                <h3 className='sidebar_item'>Kobe Bryant</h3>
                <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
            </a>
            <a href='##'>
                <img className='sidebar_bottom_img' src={profile} alt='img-team' />
                <h3 className='sidebar_item'>angel jolie</h3>
                <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
            </a>
            <a className='item-layout' href='##'>
                <ion-icon name="log-out-sharp"></ion-icon>
                <h3 className='sidebar_item'>logout</h3>
            </a>
        </div>
    )
}
