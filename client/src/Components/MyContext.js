import React, { useState, useEffect } from 'react'

const UserContext = React.createContext(); 

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])
    const [categories, setCategories] = useState([])

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
                fetchCategories()
            }
        })
    }, [])

    const login = (user) => {
        setUser(user)
        fetchBooks()
        fetchCategories()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        fetchBooks()
        fetchCategories()
        setLoggedIn(true)
    }

    const fetchBooks = () => {
        fetch('/books')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setBooks(data)
        })
    }
    
    const addBook = (book) => {
        setBooks([...books, book])
    }

    const uniqueCategories = (books) => {
        const flag = {};
        const unique = [];
        books.forEach(b => {
            if (!flag[b.category.id]) {
                flag[b.category.id] = true;
                unique.push(b.category);
            }
        });
        return unique;
    }

    const userCategories = uniqueCategories(books)

    // const filterBooks = (id) => {
    //     setFilterId(id)   
    //   }


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

    const onUpdateBook = (updatedBook) => {
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

    const displayBooks = books.filter((book) =>   book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()));


  return (
    <UserContext.Provider value= {{
        user,
        loggedIn,
        login,
        logout, 
        signup,
        fetchBooks,
        books: displayBooks,
        updateSearch,
        addBook,
        onUpdateBook,
        onDeleteBook,
        categories,
        addCategory,
        userCategories
        // filterBooks
    }}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };