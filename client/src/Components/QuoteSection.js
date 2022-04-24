import React from 'react'
import AdditionalQuotes from './AdditionalQuotes'
import AddQuoteForm from './AddQuoteForm'


const QuoteSection = ({quotes, book}) => {
    console.log(quotes)
    const displayQuotes = quotes.map(q => <AdditionalQuotes key={q.id} quote={q.quote}/>)
  return (
    <div className="additional">
        <h3>Additional Quotes</h3>
        <ul>{displayQuotes}</ul>
        
        <AddQuoteForm book={book}/>
    </div>
  )
}

export default QuoteSection