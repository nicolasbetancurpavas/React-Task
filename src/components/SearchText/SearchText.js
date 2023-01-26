import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function SearchedText() {
    const { searchValue } = useContext(TodoContext)
    return (
        <p className='text-search'>Buscando tarea:  <span className='large'>"{searchValue}"</span></p>
    )
}
export { SearchedText }