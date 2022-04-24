import React from 'react'

const AdditionalQuotes = ({quote}) => {
  console.log(quote)
    return (
      <ul className="additional">
          <li>{quote}</li>
          <br/>
      </ul>
    )
  }

export default AdditionalQuotes