import React from 'react'

function TodoSearch({ searchValue, setSearchValue }) {


    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value) // obtener el valor de un input cuando suceda un evento 
        console.log(searchValue)
        // el set es la funcion cuyo paremetro es el cambio de estado 
    };

    return (
        <input className='buscador'
            placeholder=''
            value={searchValue} // convecion para conectar el component (bugs)
            onChange={onSearchValueChange} // 
        />
    )
}

export { TodoSearch };