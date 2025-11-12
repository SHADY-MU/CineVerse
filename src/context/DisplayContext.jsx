import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const displayContex = createContext()

export function DisplayContextProvider({ children }) {

    const url = "https://jsonfakery.com/movies/paginated"

    const [allMovies , setAllMovies] = useState([])

    async function handlerAllMovies(){
        try {

            const {data} = (await axios.get(url)).data

            setAllMovies(data)
        } catch (error) {
            console.error('Error fetching movies:', error);
            setAllMovies([]) // Set to empty array instead of null for easier handling
        }
    }



    useEffect(()=>{
        handlerAllMovies()
    } , [])

    return(
        <displayContex.Provider value={{
            allMovies,
        }}>
            {children}
        </displayContex.Provider>
    )
}

