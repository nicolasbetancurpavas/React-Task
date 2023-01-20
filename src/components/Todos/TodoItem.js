import React from 'react'

function TodoItem(props) {
    const { texto } = props
    console.log(props)
    return (
        <li className={`item-task ${props.completed && 'container-confirm'}`}>
            <i className={`fa-solid fa-circle-notch confirm ${props.completed && 'confirm-completed fa-solid fa-circle color'}`}
                onClick={props.onComplete}
            >
            </i>

            <p className={`task ${props.completed && 'p-completed'}`}>{texto}</p>

            <i
                className="bi bi-trash"
                onClick={props.onDelete}
            >

            </i>
        </li>
    )
}

export { TodoItem } 