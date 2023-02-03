import React from 'react'
import './profile.css'
import user from '../../assets/img/team/user.png'

export const Profile = () => {
    return (
        <section className='container-profile'>
            <div className='mode-backgrond'>
                <ion-icon name="moon-sharp"></ion-icon>
                <ion-icon name="sunny-sharp"></ion-icon>
            </div>
            <ion-icon name="settings-sharp"></ion-icon>
            <ion-icon name="notifications-sharp"></ion-icon>
            |
            <img className='profile-img' src={user} />
            <div className='container-info-profile'>
                <h4 className='dark'>Nicolas Beta..</h4>
                <h5>betancur10@gmail.com</h5>
            </div>
            <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
        </section>
    )
}
