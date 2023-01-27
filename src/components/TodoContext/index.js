import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext()
function TodoProvider(props) {
    const [
        todos,
        saveTodos,
        loading,
        error
    ] = useLocalStorage('TodosV1', [])

    const [searchValue, setSearchValue] = useState(""); // estado para nuestro buscador 
    const [openModal, setOpenModal] = useState(false)

    const completedTodos = todos.filter(todo => todo.completed).length  // [] == true

    const totalTodos = todos.length

    let searchedTodos = [] // array vacio 

    if (!searchValue.length >= 1) {
        searchedTodos = todos // por defecto
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase() // recibe cualquier string y lo convierte en minusculas
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText) // (cualquier letra similar ) que coincida con los todos los muestra 
        })
    }
    //evento completar todo o "descompletar" todo

    const completeTodo = (text) => {
        //busco el indice
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    //evento borrar todo
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text) // el indece del valor al que estamos comparando 
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1) // corta el array desde el indice y 1 elemento
        saveTodos(newTodos)
    }

    const AddTodo = (text) => {
        const newTodos = [...todos]
        console.log(text.length)
        if (text.length > 0) {
            newTodos.push({
                completed: false,
                text: text
            })
            saveTodos(newTodos)
        }
        else {
            saveTodos(todos)
        }
    }

    return (
        < TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            AddTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }