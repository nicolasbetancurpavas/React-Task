import { useEffect, useState } from "react"

function useLocalStorage(itemName, initialValue) {

    const [error, setError] = useState(true)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        setTimeout(() => {

            try {
                const localStorageItem = localStorage.getItem(itemName) // null si esta vacio
                let parseItem

                if (!localStorageItem) { // si no existen datos en localStorage
                    localStorage.setItem(itemName, initialValue)
                    parseItem = initialValue

                } else {
                    parseItem = JSON.parse(localStorageItem)
                }

                setItem(parseItem)
                setLoading(false)
            }
            catch (error) {
                setError(error)
            }

            return { initialValue, itemName }

        }, 2000)
    }, [])


    //logica para guardar 
    const saveItem = (newItem) => {
        try {
            const converString = JSON.stringify(newItem)
            localStorage.setItem(itemName, converString)
            setItem(newItem) // guardo el nuevo array en el state
        }
        catch (error) {
            setError(error)
        }
    }

    return [item, saveItem, loading, error]

}

export { useLocalStorage }
