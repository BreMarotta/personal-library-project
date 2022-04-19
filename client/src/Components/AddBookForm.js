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
  const [errorsList, setErrorsList] = useState([])
  // const [lentTo, setLentTo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/books', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBook)
  })
  .then(res => res.json())
  .then(data => {
      if (!data.errors){
      addBook(data)
      navigate('/books')
  } else {
      const errorsLis = data.errors.map(e => <li>{e}</li>)
      setErrorsList(errorsLis)
  }
  })
}
  //   navigate('/books')
  // }

  const handleChange = (e) => {
    setNewBook({
      ...newBook, [e.target.name]: e.target.value
    })
  }
 if (loggedIn) {
  return (
    <div>
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
        type="integer"
        name="personalRating"
        onChange={handleChange}/>
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
    <h3>Not Authorized - Please Login or Signup</h3>
  )
}
}

export default AddBookForm
