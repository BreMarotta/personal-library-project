import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './MyContext'
import { useParams } from 'react-router-dom'

const ShowPage = () => {
  const {loggedIn} = useContext(UserContext)
  const params = useParams()
  const [book, setBook] = useState({})
  const [formStyle, setFormStyle] = useState("none")
  const [errorsList, setErrorsList] = useState([])

  useEffect(() => {
    fetch(`/books/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setBook(data)
        })
      }, [])

  const toggleEditForm = () => {
    let newStyle= formStyle === 'none' ?  '' :  'none'
    setFormStyle(newStyle)
  }
  const handleEditBookSubmit = (e) => {
    e.preventDefault()
    fetch(`/books/${book.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(book)
  })
  .then(res => res.json())
  .then(data => {
    if (!data.error){
      toggleEditForm()
    } else {
      const errorsLis = data.errors.map(e => <li>{e}</li>)
      setErrorsList(errorsLis)
    }
  })
  }

  const handleChange = (e) => {
    setBook({ 
      ...book, [e.target.name]: e.target.value }) 
  }
  
  if (loggedIn) {
    return (
      <div>
        <h3>{book.title}</h3>
        <h4>by {book.author}</h4>
        <h4>Favorite quote: {book.favorite_quote}</h4>
        <br/>
        <button onClick={toggleEditForm}>Edit Book Details</button>
        <form style={{display: formStyle}} onSubmit={handleEditBookSubmit}>
      <h4>Edit details for {book.title}:</h4>
      <hr/>
      <label>Title:</label>
      <input 
        type="text"
        name="title"
        defaultValue={book.title}
        onChange={handleChange}/>
        <br/>
      <label>Author:</label>
      <input 
        type="text"
        name="author"
        defaultValue={book.author}
        onChange={handleChange}/>
        <br/>
      <label>Favorite Quote: </label>
      <textarea 
        type="text"
        name="favorite_quote"
        defaultValue={book.favorite_quote}
        onChange={handleChange}/>
        <br/>
      <label>Personal Rating: </label>
      <input 
        type="integer"
        name="personal_rating"
        defaultValue={book.personalRating}
        onChange={handleChange}/>
        <br/>
        <input type="submit"/>
        <ul>
          {errorsList}
        </ul>
        </form>
      </div>
    )
  } else {
    return (
      <h3>Not Authorized - Please Login or Signup</h3>
    )
  }
  
}

export default ShowPage
