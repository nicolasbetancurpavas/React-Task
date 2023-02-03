import React from 'react'
import img from '../../assets/img/team/user.png'

function TodoItem(props) {
    const { texto } = props

    return (
        <li className={`item-task ${props.completed && 'container-confirm'}`}>
            <div className='Delete-completed'>
                <i className={`fa-solid fa-circle-notch confirm ${props.completed && 'confirm-completed fa-solid fa-circle color'}`}
                    onClick={props.onComplete} >
                </i>

                <i className="bi bi-trash"
                    onClick={props.onDelete}>
                </i>
            </div>
            <p className={`task ${props.completed && 'p-completed'}`}>
                {texto}</p>


        </li>
    )
}

export { TodoItem } 