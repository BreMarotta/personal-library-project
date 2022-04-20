import React, { useContext } from 'react'
import { UserContext } from './MyContext'

const ShowPage = (props) => {
  const {loggedIn, book} = useContext(UserContext)


  if (loggedIn) {
    return (
      <div>
        <h3>{book.title}</h3>
        <h4>by {book.author}</h4>
        <h4>Favorite quote: {book.favorite_quote}</h4>
        <br/>
      </div>
    )
  } else {
    return (
      <h3>Not Authorized - Please Login or Signup</h3>
    )
  }
  
}

export default ShowPage
