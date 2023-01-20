import React from "react";
import "./App.css"
import { AppUI } from "./AppUI";

//const defaultTodos = [
//{ text: 'taller matematicas', completed: true },
//{ text: 'comprar utiles', completed: true },
//{ text: 'taller sociales', completed: true },
//{ text: 'reunion a las 4', completed: false },
//{ text: '}comer', completed: false },
//]

// creando nuestro hook para guardar cualquier tipo de dato en localStorage

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName) //null si esta vacio
  let parseItem;

  if (!localStorageItem) { //si no existen datos en localStorage
    localStorage.setItem(itemName, initialValue) //agregamos /actualizamos
    parseItem = initialValue
  } else {
    parseItem = JSON.parse(localStorageItem)
  }
  const [item, setItem] = React.useState(parseItem)

  //logica para guardar 
  const saveItem = (newItem) => {
    const converString = JSON.stringify(newItem)
    localStorage.setItem(itemName, converString)
    setItem(newItem) // guardo el nuevo array en el state
  }

  return [
    item,
    saveItem,
  ]

}

function App() {

  const [todos, saveTodos] = useLocalStorage('TodosV1', [])
  const [searchValue, setSearchValue] = React.useState(""); // estado para nuestro buscador 

  const completedTodos = todos.filter(todo => todo.completed).length // [] == true
  const totalTodos = todos.length

  let searchedTodos = [] // array vacio para agregar que nuevos arrays con tareas pero que sean iguales a las letras del buscador

  if (!searchValue.length >= 1) { // buscador no tiene letras valida
    searchedTodos = todos // mustra los todos por defecto
  } else {
    searchedTodos = todos.filter(todo => { // si en el buscador hay letras, filtra los todos que tenga coincidencia con el buscador 
      const todoText = todo.text.toLowerCase() // l
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText) // (cualquier letra similar ) que coincida con los todos los muestra 
    })
  }


  //evento completar todo o "descompletar" todo

  const completeTodo = (text) => {
    //busco el indice que coincida con el texto del todo al que le dio click  
    const todoIndex = todos.findIndex(todo => todo.text === text)
    //creo un nuevo arreglos con los todos por defectos almancenados
    const newTodos = [...todos]
    //filtramos el nuevo array, y pasamos el indice del todo para convertirlo en una tarea realizada o no realizada
    newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true
    // llamamos la funcion que guarda en localstorege nuestro nueva lista y actuliza el estado de nuestro componente
    saveTodos(newTodos)
  }


  //evento borrar todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text) // el indece del valor al que estamos comparando 
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1) // corta el array desde el indice y 1 elemento
    saveTodos(newTodos)
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}


export default App;
