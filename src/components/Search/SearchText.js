import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function SearchedText() {
    const { searchValue } = useContext(TodoContext)
    return (
        <p className='text-search'>
            Searching task:  <span className='large'>"{searchValue}"</span></p>
    )
}
export { SearchedText }