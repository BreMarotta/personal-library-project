import React from 'react'
import AddQuoteForm from './AddQuoteForm'

const AdditionalQuotes = (props) => {

const quoteArray = props.book.additional_quotes

const displayQuotes = 
    quoteArray === true ? quoteArray.map(q => <li>q</li>)  : <div></div>
// const quoteList = quoteArray.map(q => <li>q</li>)
// console.log(quoteArray)
  return (
    <div className="additional">
        <h1>AdditionalQuotes</h1>
        {displayQuotes}
        <AddQuoteForm book={props.book}/>
        
    </div>
  )
}

export default AdditionalQuotes