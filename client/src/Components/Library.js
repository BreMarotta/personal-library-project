import React, { useState, useContext } from 'react'
import { Route, useParams } from 'react-router-dom'
import AddBookForm from './AddBookForm'
import BookLinks from './BookLinks'
import Book from './Book'
import { UserContext, userContext } from './MyContext'

const Library = () => {
  const {user, books} = useContext(UserContext)
  const [showForm, setShowForm] = useState(false)
  const params = useParams();

  const displayBooks = books.map(b => <Book key={b.id} book={b}/>)
  
  return (
    <div>
      <h3>{user.username}'s Personal Library</h3>
      {displayBooks}
    </div>
  )
}

export default Library
