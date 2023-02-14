import React from 'react'
import './premium.css'
import masterCard from '../../assets/img/method/master-card.png'
import paypal from '../../assets/img/method/paypal.png'
import visa from '../../assets/img/method/via.png'

export const Premium = () => {
    return (
        <div className='container-premium'>
            <h1>Premium <span>25%</span></h1>
            <p>
                manage your tasks at maximum performance and in real time,
                set an alarm and priorities to your tasks,
                receive messages to your email and notifications, receive tips,
                and 2 productivity courses to improve your activity</p>
            <div className='buttom_premium'>
                <img src={paypal} className='img_premium' alt='img-method' />
                <img src={visa} className='img_premium' alt='img-method' />
                <img src={masterCard} className='img_premium' alt='img-method' />
            </div>
        </div >
    )
}
