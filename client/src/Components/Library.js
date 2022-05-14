import React, { useContext, useState } from 'react'
import Book from './Book'
import Search from './Search'
import { UserContext } from './MyContext'
import Category from './Category'


const Library = () => {
  const { books, loggedIn, userCategories} = useContext(UserContext)

  const displayBooks = books.map(b => <Book key={b.id} book={b}/>)

  const displayCategories = userCategories.map(x => <Category key={x.id} genre={x} />)
  
  if (loggedIn) {
  return (
    <div>
      <div className="additionalContainer">
        <h3>My Genres: </h3>
        <ul>
          {displayCategories}
        </ul>
      </div>
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
