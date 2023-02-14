import React from 'react'
import './comments.css'

export const Comment = ({ img, nameProfile, description, stars, time }) => {
    return (
        <div className="comment">
            <div className='top-comments'>
                <img className='img-comments' src={img} alt="img-comments" />
                <h3 className='name-comment'><span>{nameProfile}</span> {description}</h3>
            </div>
            <div className='right-comments'>
                {stars.map((e) => (<ion-icon name="star-sharp">{e}</ion-icon>))}
                <p>{time}</p>
            </div>
        </div>
    )
}