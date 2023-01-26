import React from 'react'

export function BotonAdd({ clase, openModal, setOpenModal }) {
    const onClikButton = () => {
        openModal ? setOpenModal(false) : setOpenModal(true)
    }
    return (
        <button className={`${clase} ${openModal && 'boton-add-new'}`}
            onClick={onClikButton}
        >
            +
        </button>
    )
}
