import React, { useContext } from 'react'
import Book from './Book'
import Search from './Search'
import { UserContext } from './MyContext'


const Library = () => {
  const { books, loggedIn} = useContext(UserContext)

  const displayBooks = books.map(b => <Book key={b.id} book={b}/>)
  
  if (loggedIn) {
  return (
    <div className="library">
      <Search />
      {displayBooks}
    </div>
  )
  } else {
    return (
      <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
    )
  }
}

export default Library
