import React from 'react'

const Location = ({ lent_to }) => {
  return (
    <div>Currently Borrowed by: <strong>{lent_to}</strong></div>
  )
}

export default Location
