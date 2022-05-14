import React, { useState } from 'react'
import Form from './Form'

const UpdateBookForm = (props) => {
  const [errorsList, setErrorsList] = useState([])

  const onSubmitForm = (bookObject) => {
    fetch(`/books/${props.book.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookObject)
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
    <div>
      <h4>Edit details for {props.book.title}:</h4>
      <hr/>
      <Form book={props.book} onSubmitForm={onSubmitForm}/>
      <ul>
        {errorsList}
      </ul>
    </div>
 
  )
}

export default UpdateBookForm