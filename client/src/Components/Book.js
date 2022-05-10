import React from 'react'
import { Link } from 'react-router-dom'
// import StarRating from './StarRating'

const Book = (props) => {

  return (
    <div>
      <Link to={`/library/${props.book.id}`} >
        <h5 style={{color: "black", underline: "black"}}>{props.book.title} by {props.book.author} </h5>
      </Link>
    </div>
  )
}

export default Book