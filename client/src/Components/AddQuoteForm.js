import React, { useState } from 'react'


const AddQuoteForm = ({book, onAddQuote, toggleQuoteForm}) => {
    const [quote, setQuote] = useState("")
    
    // const [errorsList, setErrorsList] = useState([])

    const bookId = book.id

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(quote)
        fetch(`/books/${bookId}/quotes`, {
          method: "POST",
          headers: { "content-type": "application/json"},
          body: JSON.stringify({
            quote: quote,
            book_id: bookId
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          onAddQuote(quote)
          toggleQuoteForm()
        })
    }

  return (
    <div className="additional">
        <form onSubmit={handleSubmit}>
            <h4>Add a new quote:</h4>
            <hr/>
            <textarea type="text" name="quote" onChange={(e) => setQuote(e.target.value)}/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default AddQuoteForm
