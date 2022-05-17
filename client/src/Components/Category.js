import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './MyContext'
import Book from './Book'

const Category = () => {
    const {loggedIn, updateCategory, genreBooks, x} = useContext(UserContext)
    const params = useParams()

    updateCategory(params.id)

    const displayBooks = genreBooks.map(b => <Book key={b.id} book={b}/>)
   
if (loggedIn) {
     return (
        <div className="category">
          <h3>{x}</h3>
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
