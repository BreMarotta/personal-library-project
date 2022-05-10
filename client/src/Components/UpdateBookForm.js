import React, { useState } from 'react'

const UpdateBookForm = (props) => {
  const [book, setBook] = useState(props.book)
  const [errorsList, setErrorsList] = useState([])
  console.log(props)

  const handleChange = (e) => {
    setBook({ 
      ...book, [e.target.name]: e.target.value }) 
  }

  const editBookSubmit = (e) => {
    e.preventDefault()
    fetch(`/books/${book.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(book)
  })
  .then(res => res.json())
  .then(data => {
    if (!data.error && !data.errors){
      props.updateBook(data)
    } else {
      const errorsLis = data.errors.map(e => <li>{e}</li>)
      setErrorsList(errorsLis)
    }
  })
  }

  return (
     <form onSubmit={editBookSubmit}>
        <h4>Edit details for {book.title}:</h4>
          <hr/>
        <label>Title:</label>
          <input type="text" name="title" defaultValue={book.title} onChange={handleChange}/>
            <br/>
        <label>Author:</label>
          <input type="text" name="author" defaultValue={book.author} onChange={handleChange}/>
            <br/>
        <label>Favorite Quote: </label>
          <textarea type="text" name="favorite_quote" defaultValue={book.favorite_quote} onChange={handleChange}/>
            <br/>
        <label>Personal Rating: </label>
          <input type="integer" name="personal_rating" defaultValue={book.personal_rating} onChange={handleChange}/>
            <br/>
        <input type="submit"/>
        <ul>
          {errorsList}
        </ul>
      </form> 
  )
}

export default UpdateBookForm