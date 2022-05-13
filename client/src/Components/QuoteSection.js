import React, { useState } from 'react'
import AdditionalQuote from './AdditionalQuote'
import AddQuoteForm from './AddQuoteForm'


const QuoteSection = ({quotes, book, onAddQuote, deleteQuote}) => {
    const [formFlag, setFormFlag] = useState(false)

    const displayQuotes = quotes.map(q => <AdditionalQuote key={q.id} quote={q} deleteQuote={deleteQuote}/>)

    const toggleQuoteForm = () => {
      setFormFlag(!formFlag)
    }

    const displayForm = formFlag === true ? <AddQuoteForm book={book} onAddQuote={onAddQuote} toggleQuoteForm={toggleQuoteForm}/> : ""

  return (
    <div className="additionalContainer">
        <h3>Quotes</h3>
        <button onClick={toggleQuoteForm}>Add a New Quote</button> 
        {displayForm}  
        <ul>{displayQuotes}</ul>  
           
        
    </div>
  )
}

export default QuoteSection