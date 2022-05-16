import React, { useContext } from 'react'
import Book from './Book'
import Search from './Search'
import { UserContext } from './MyContext'

const Library = () => {
  const { loggedIn, books} = useContext(UserContext)

  const displayBooks = books.map(b => <Book key={b.id} book={b}/>)
  
  if (loggedIn) {
  return (
    <div>
      <div className="library">
        <Search />
        {displayBooks}
      </div>
    </div>
  )
  } else {
    return (
      <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
    )
  }
}

export default Library
