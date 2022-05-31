import React, { useState, useEffect } from 'react'

const UserContext = React.createContext(); 

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])
    const [categories, setCategories] = useState([])
    const [userCategories, setUserCategories] = useState([])
    const [category, setCategory] = useState("")
    const [x, setX] = useState("")

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            // console.log(data)           
            if (!data.errors){
                setLoggedIn(true)
                setUserCategories(data.category_list)
                setBooks(data.book_list)
                setUser(data)
                fetchCategories()
            } else {
                setLoggedIn(false)
            }
        })
    }, [])

    const login = (user) => {
        // console.log(user)
        setUserCategories(user.category_list)
        setBooks(user.book_list)
        setUser(user)
        fetchCategories()
        setLoggedIn(true)
    }

    // console.log(user)
    // console.log(userCategories)
    // console.log(books)
    // console.log(categories)

    const logout = () => {
        setUser({})
        setUserCategories([])
        setBooks([])
        setCategories([])
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        setUserCategories([])
        setBooks([])
        fetchCategories()
        setLoggedIn(true)
    }
    
    const addBook = (book) => {
        setBooks([...books, book])
    }

    const fetchCategories = () => {
        fetch('/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    }

    const addCategory = (category) => {
        setCategories([...categories, category])
    }

    const updateCategory = (id) => {
        setCategory(id)
        getName()   
    }
    
    const genreBooks = books.filter((b) => b.category_id == category)

    const getName = () => {
        const categoryName = categories.find(b => b.id == category)
        categoryName ? setX(categoryName.name) : console.log()
    }

    const onUpdateBook = (updatedBook) => {
        const findCategory = userCategories.find(c => c.id == updatedBook.category.id) 
        findCategory ? console.log() : setUserCategories([...userCategories, updatedBook.category])
        const updatedBooksList = books.map(b => b.id === updatedBook.id ? updatedBook : b )
        setBooks(updatedBooksList)        
    }

    const onDeleteBook = (id) => {
        const updatedBooksList = books.filter(b => b.id !== id)
        setBooks(updatedBooksList)
    }

    const updateSearch = (searchedInfo) => {
        setSearch(searchedInfo)
    }

    const displayBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))



  return (
    <UserContext.Provider value= {{
        user,
        loggedIn,
        login,
        logout, 
        signup,
        // fetchBooks,
        books: displayBooks,
        updateSearch,
        addBook,
        onUpdateBook,
        onDeleteBook,
        categories,
        addCategory,
        userCategories,
        updateCategory,
        genreBooks,
        x
    }}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };