import React, { useState, useEffect } from 'react'

const UserContext = React.createContext(); 

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})

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
  return (
    <UserContext.Provider value= {{
        user,
        login,
        logout, 
        signup
    }}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };