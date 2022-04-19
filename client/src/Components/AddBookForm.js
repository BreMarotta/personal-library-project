import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './MyContext'

const AddBookForm = () => {
  const {loggedIn, addBook} = useContext(UserContext)
  const navigate = useNavigate()
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    personalRating: "",
    favoriteQuote: ""
  })
  // const [lentTo, setLentTo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(newBook)
    navigate('/books')
  }

  const handleChange = (e) => {
    setNewBook({
      ...newBook, [e.target.name]: e.target.value
    })
  }
 if (loggedIn) {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a book to your library:</h3>
      <hr/>
      <label>Title:</label>
      <input 
        type="text"
        name="title"
        onChange={handleChange}/>
        <br/>
      <label>Author:</label>
      <input 
        type="text"
        name="author"
        onChange={handleChange}/>
        <br/>
      <label>Favorite Quote: </label>
      <textarea 
        type="text"
        name="favoriteQuote"
        onChange={handleChange}/>
        <br/>
      <label>Personal Rating: </label>
      <input 
        type="text"
        name="personalRating"
        onChange={handleChange}/>
        <br/>
        <input type="submit"/>

    </form>
  )
} else {
  return (
    <h3>Not Authorized - Please Login or Signup</h3>
  )
}
}

export default AddBookForm
