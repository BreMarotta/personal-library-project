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
            setUserCategories(data.category_list)
            setBooks(data.book_list)
            // const info = {id: data.id, username: data.username}
            setUser(data)
            if (data.error){
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                // fetchBooks()
                fetchCategories()
            }
        })
    }, [])
    // console.log(books)
    // console.log(userCategories)
    // console.log(user)

    const login = (user) => {
        setUser(user)
        // fetchBooks()
        // fetchCategories()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        // fetchBooks()
        // fetchCategories()
        setLoggedIn(true)
    }

    // const fetchBooks = () => {
    //     fetch('/books')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setBooks(data)
    //     })
    // }
    
    const addBook = (book) => {
        setBooks([...books, book])
    }

    // const uniqueCategories = (steph) => {
    //     const flag = {};
    //     const unique = [];
    //     steph.forEach(b => {
    //         if (!flag[b.id]) {
    //             flag[b.id] = true;
    //             unique.push(b);
    //         }
    //     });
    //     console.log(unique)
    //     return unique;
    // }

    // const userCategories = uniqueCategories(steph)

    const fetchCategories = () => {
        fetch('/categories')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCategories(data)
        })
    }

    const addCategory = (category) => {
        setCategories([...categories, category])
    }

    const updateCategory = (id) => {
        // const categoryName = categories.find(c => c.id == id)
        // setX(categoryName.name)
        setCategory(id)
        foo()   
    }
    const genreBooks = books.filter((b) => b.category_id == category)

    const foo = () => {
        const categoryName = categories.find(b => b.id == category)
        console.log(categoryName)
        categoryName ? setX(categoryName.name) : console.log()
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