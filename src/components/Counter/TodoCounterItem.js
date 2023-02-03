import React from 'react'

export const TodoCounterItem = ({ title, value }) => {
    return (
        <div className='count'>
            <h3>{title}</h3>
            <h1>{value}</h1>
        </div>
    )
}
