import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './MyContext'

const Book = ({ book }) => {
  const {showBook} = useContext(UserContext)

  const handleClick = () =>{
    fetch(`/books/${book.id}`)
        .then(res => res.json())
        .then(data => {
            showBook(data)
        })
  }
  return (
    <div>
      <Link onClick={handleClick} to={`/books/${book.id}`} book={book}>
        <a style={{color: "black", underline: "black"}}>{book.title} </a>
      </Link>
      <a>by {book.author}</a>
    </div>
  )
}

export default Book