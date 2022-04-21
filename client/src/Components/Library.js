import React, { useContext } from 'react'
// import { Route, useParams } from 'react-router-dom'
// import BookLinks from './BookLinks'
import Book from './Book'
import { UserContext } from './MyContext'

const Library = () => {
  const {user, books, loggedIn} = useContext(UserContext)
  // const params = useParams();

  const displayBooks = books.map(b => <Book key={b.id} book={b}/>)
  
  if (loggedIn) {
  return (
    <div>
      <h3>{user.username}'s Personal Library</h3>
      {displayBooks}
    </div>
  )
  } else {
    return (
      <h3>Not Authorized - Please Login or Signup</h3>
    )
  }
}

export default Library
