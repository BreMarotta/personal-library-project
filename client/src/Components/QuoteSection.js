import React, { useState } from 'react'
import AdditionalQuotes from './AdditionalQuotes'
import AddQuoteForm from './AddQuoteForm'


const QuoteSection = ({quotes, book, onAddQuote}) => {
    const [formFlag, setFormFlag] = useState(false)
    const displayQuotes = quotes.map(q => <AdditionalQuotes key={q.id} quote={q.quote}/>)

    const toggleQuoteForm = () => {
      setFormFlag(!formFlag)
    }

    const displayForm = formFlag === true ? <AddQuoteForm book={book} onAddQuote={onAddQuote} toggleQuoteForm={toggleQuoteForm}/> : ""

  return (
    <div className="additional">
        <h3>Additional Quotes</h3>
        <ul>{displayQuotes}</ul>  
        <button onClick={toggleQuoteForm}>Add a New Quote</button> 
        {displayForm}     
        
    </div>
  )
}

export default QuoteSection