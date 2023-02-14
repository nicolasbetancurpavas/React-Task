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

    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const onClikOpen = () => setOpenMenu(state => !state)

    const completedTodos = todos.filter(todo => todo.completed).length

    const totalTodos = todos.length
    let searchedTodos = []

    if (!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.title.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const AddTodo = (text, title) => {
        const newTodos = [...todos]
        console.log(text.length)
        newTodos.push({
            completed: false,
            title: title,
            text: text,
        })
        saveTodos(newTodos)
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
            openMenu,
            setOpenMenu,
            onClikOpen,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }