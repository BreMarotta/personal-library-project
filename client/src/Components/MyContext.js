import React, { useState, useEffect } from 'react'

const UserContext = React.createContext(); 

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error){
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                fetchBooks()
            }
        })
    }, [])

    const login = (user) => {
        setUser(user)
        fetchBooks()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        fetchBooks()
        setLoggedIn(true)
    }

    const fetchBooks = () => {
        fetch('/books')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBooks(data)
        })
    }

    const addBook = (book) => {
        setBooks([...books, book])
    }

    const onDeleteBook = (id) => {
        alert(id)
        const updatedBooksList = books.filter(b => b.id !== id)
        setBooks(updatedBooksList)
    }

    const updateSearch = (searchedInfo) => {
        setSearch(searchedInfo)
    }

    const displayBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()));

  return (
    <UserContext.Provider value= {{
        user,
        loggedIn,
        login,
        logout, 
        signup,
        books: displayBooks,
        updateSearch,
        addBook,
        onDeleteBook
    }}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };