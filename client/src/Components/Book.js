import React from 'react'

const Book = ({ book }) => {
  return (
    <div>{book.title} by {book.author}</div>
  )
}

export default Book