import React from 'react'

const AdditionalQuote = ({quote, deleteQuote}) => {

  const handleDeleteQuote = () => {
    deleteQuote(quote.id)
  }
    return (
      <ul className="additional">
          <li>"{quote.quote}"  <button className="addButton" onClick={handleDeleteQuote}>x</button></li>
          
          <hr/>
      </ul>
    )
  }

export default AdditionalQuote