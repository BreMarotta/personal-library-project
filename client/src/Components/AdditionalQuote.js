import React from 'react'

const AdditionalQuote = ({quote, deleteQuote}) => {
  console.log(quote.id)

  const handleDeleteQuote = () => {
    deleteQuote(quote.id)
  }
    return (
      <ul className="additional">
          <li>{quote.quote}<button onClick={handleDeleteQuote}>X</button></li>
          
          <br/>
      </ul>
    )
  }

export default AdditionalQuote