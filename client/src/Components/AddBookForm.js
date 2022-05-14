import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './MyContext'
import Form from './Form'


const AddBookForm = () => {
  const {loggedIn, addBook} = useContext(UserContext)
  const navigate = useNavigate()
  const [errorsList, setErrorsList] = useState([])
  const book = ""

  const onSubmitForm = (bookObject) => {
    fetch('/books', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookObject)
  })
  .then(res => res.json())
  .then(data => {
      if (!data.errors){
        console.log(data)
      addBook(data)
      navigate('/library')
  } else {
      const errorsLis = data.errors.map(e => <li key={e.id}>{e}</li>)
      setErrorsList(errorsLis)
  }
  })
}

 if (loggedIn) {
  return (
    <div className="form">
      <h3>Add a book to your library:</h3>
      <hr/>
      <Form book={book} onSubmitForm={onSubmitForm}/>
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
