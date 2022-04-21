import React, { useContext, useEffect } from 'react'
import { UserContext } from './MyContext'
import { useParams } from 'react-router-dom'

const ShowPage = () => {
  const {loggedIn, showBook, book} = useContext(UserContext)
  const params = useParams()

  console.log(params.id)

  useEffect(() => {
    fetch(`/books/${params.id}`)
        .then(res => res.json())
        .then(data => {
            showBook(data)
        })
      }, [])

  if (loggedIn) {
    return (
      <div>
        <h3>{book.title}</h3>
        <h4>by {book.author}</h4>
        <h4>Favorite quote: {book.favorite_quote}</h4>
        <br/>
        <button onClick={(e) => console.log(e)}>Edit Book Details</button>
      </div>
    )
  } else {
    return (
      <h3>Not Authorized - Please Login or Signup</h3>
    )
  }
  
}

export default ShowPage
