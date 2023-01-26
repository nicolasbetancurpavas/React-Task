import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value) // obtener el valor de un input cuando suceda un evento 
        console.log(searchValue)
        // el set es la funcion cuyo paremetro es el cambio de estado 
    };

    return (
        <input className='buscador'
            placeholder='Buscar ToDo'
            value={searchValue} // convecion para conectar el component (bugs)
            onChange={onSearchValueChange} // 
        />
    )
}

export { TodoSearch };