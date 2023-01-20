import React from 'react'

export function BotonAdd() {
    const onClikButton = (msg) => alert(msg)
    return (
        <button className='boton-add'
            onClick={() => onClikButton("Aqui va el modal")}
        >
            +
        </button>
    )
}
