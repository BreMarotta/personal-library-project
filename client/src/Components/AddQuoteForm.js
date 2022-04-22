import React, { useState, useContext } from 'react'
import { UserContext } from './MyContext'

const AddQuoteForm = (props) => {
    console.log(props)
    const [quote, setQuote] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(quote)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Add a new quote for {props.book.title}:</h3>
            <hr/>
            <textarea type="text" name="quote" onChange={(e) => setQuote(e.target.value)}/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default AddQuoteForm
