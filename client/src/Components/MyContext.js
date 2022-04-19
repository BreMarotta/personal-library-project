import React, { useState, useEffect } from 'react'

const UserContext = React.createContext(); 

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    }, [])


    const login = (user) => {
        // setUser(user)
    }

    const logout = () => {
        alert("Hello from Context")
    }

    const signup = (user) => {
        setUser(user)
    }

    const updateSearch = (searchedInfo) => {
        setSearch(searchedInfo)
    }

    const displayBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase() || book.title.toLowerCase().includes(search.toLowerCase())));
    
    console.log(user)
    console.log(user.error)
  return (
    <UserContext.Provider value= {{
        user,
        login,
        logout, 
        signup,
        books: displayBooks,
        updateSearch
    }}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };