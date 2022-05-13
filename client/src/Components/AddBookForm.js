import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './MyContext'

const AddBookForm = () => {
  const {loggedIn, addBook} = useContext(UserContext)
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [favoriteQuote, setFavoriteQuote] = useState("")
  const [rating, setRating] = useState(0)
  const [lent, setLent] = useState("")
  const [errorsList, setErrorsList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/books', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: title,
        author: author,
        favorite_quote: favoriteQuote,
        rating: rating,
        lent: lent
      })
  })
  .then(res => res.json())
  .then(data => {
      if (!data.errors){
      addBook(data)
      navigate('/library')
  } else {
      const errorsLis = data.errors.map(e => <li>{e}</li>)
      setErrorsList(errorsLis)
  }
  })
}

 if (loggedIn) {
  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <h3>Add a book to your library:</h3>
      <hr/>
      <label>Title: </label>
      <input 
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}/>
        <br/>
      <label>Author: </label>
      <input 
        type="text"
        name="author"
        onChange={(e) => setAuthor(e.target.value)}/>
        <br/>
      <label>Favorite Quote: </label>
      <textarea 
        type="text"
        name="favoriteQuote"
        onChange={(e) => setFavoriteQuote(e.target.value)}/>
        <br/>
      <label>Rating: </label>
      <input 
        type="integer"
        name="rating"
        onChange={(e) => setRating(e.target.value)}/>
        <br/>
        <label>Book Borrowed By: </label>
      <input 
        type="text"
        name="lent"
        onChange={(e) => setLent(e.target.value)}/>
        <br/>
        <input type="submit"/>

    </form>
    <ul>
      {errorsList}
    </ul>
    </div>
  )
} else {
  return (
    <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
  )
}
}

export default AddBookForm
