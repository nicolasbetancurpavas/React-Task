import React from 'react'
import img from '../../assets/img/team/user.png'

function TodoItem(props) {
    const {
        texto,
        title,
        completed,
        onComplete,
        onDelete
    } = props

    return (
        <li className={`item-task ${completed && 'container-confirm'}`}>

            <div className='body-card'>
                <div className='Delete-completed'>
                    <i className={`fa-solid fa-circle-notch ${props.completed && 'confirm-completed fa-solid fa-circle color'}`}
                        onClick={onComplete} >
                    </i>

                    <i className="bi bi-trash"
                        onClick={onDelete}>
                    </i>
                </div>

                <h2 className={`title-todo ${completed && 'p-completed'}`}>{title}</h2>

                <p className={`task ${completed && 'p-completed'}`}>
                    {texto}
                </p>

                <div className='container-img-task'>
                    <img src={img} alt='img-profile-task' />
                    <p className={`${completed && 'p-completed'}`}>recent task</p>
                </div>
            </div>

            <div className='icons-task'>
                <ion-icon name="star-sharp"></ion-icon>
                <ion-icon name="ellipsis-horizontal-sharp"></ion-icon>
            </div>

        </li>
    )
}

export { TodoItem } 