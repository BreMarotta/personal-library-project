import React, { useState } from 'react'

const AdditionalQuote = ({quote, deleteQuote}) => {
  const [deleteFlag, setDeleteFlag] = useState(false)

  const handleDeleteQuote = () => {
    deleteQuote(quote.id)
  }

  const toggleDelete = () => {
    setDeleteFlag(!deleteFlag)
  }

  const displayDelete = deleteFlag === true ? <button className="deleteButton" onClick={handleDeleteQuote}>🗑️</button> : ""
    return (
      <ul className="additional">
          <li onMouseEnter={toggleDelete} onMouseLeave={toggleDelete}>"{quote.text}" {displayDelete}</li>          
          <hr/>
      </ul>
    )
  }

export default AdditionalQuote