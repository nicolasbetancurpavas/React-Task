import React from 'react'

function SearchedText({ task }) {
    return (
        <p className='text-search'>Buscando tarea:  <span className='large'>"{task}"</span></p>
    )
}

export { SearchedText }