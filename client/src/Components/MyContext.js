import React, { useState, useEffect } from 'react'

const UserContext = React.createContext(); 

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    }, [])

    const login = () => {

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
  return (
    <UserContext.Provider value= {{
        user,
        login,
        logout, 
        signup,
        updateSearch
    }}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };