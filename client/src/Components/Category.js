import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './MyContext'
import Book from './Book'

const Category = () => {
    const {loggedIn} = useContext(UserContext)
    const params = useParams()
    const [books, setBooks] = useState([])
    const [category, setCategory] = useState("")

    useEffect(() => {
        fetch(`/categories/${params.id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            categoryName(data)
            setBooks(data)
            
        })
    }, [params])

    const categoryName = (array) => {
        array.map(b => setCategory(b.category.name))
    }
    
    const displayBooks = books.map(b => <Book key={b.id} book={b}/>)
    
if (loggedIn) {
     return (
        <div className="category">
            <h3>{category}</h3>
            {displayBooks}
        </div>
     )
  } else {
    return (
      <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
    )
  }
  
}

export default Category
