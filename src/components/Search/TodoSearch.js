import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext';
import { SearchedText } from './SearchText';
import './search.css'

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value) // obtener el valor de un input cuando suceda un evento 
        console.log(searchValue)
        // el set es la funcion cuyo paremetro es el cambio de estado 
    };

    return (
        <div className='container-search'>
            <div className='input-container'>
                <input className='input-Search'
                    placeholder='Search your tasks'
                    value={searchValue} // convecion para conectar el component (bugs)
                    onChange={onSearchValueChange} // 
                />
                <ion-icon name="search-sharp"></ion-icon>
            </div>
            <SearchedText />
        </div>
    )
}

export { TodoSearch };