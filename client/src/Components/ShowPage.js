import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './MyContext'
import { useParams, useNavigate } from 'react-router-dom'
import UpdateBookForm from './UpdateBookForm'
import QuoteSection from './QuoteSection'
import StarRating from './StarRating'
import Location from './Location'

const ShowPage = () => {
  const {onUpdateBook, onDeleteBook} = useContext(UserContext)
  const navigate = useNavigate()
  const params = useParams()
  const [book, setBook] = useState({})
  const [category, setCategory] = useState("")
  const [quotes, setQuotes] = useState([])
  const [formFlag, setFormFlag] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`/books/${params.id}`)
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          if (!data.error && !data.errors){
            console.log(data)
            setCategory(data.category.name)
            setQuotes(data.quotes)
            setBook(data)
          } else {
            setError(true)
          }          
        })
      }, [params.id])

  const toggleEditForm = () => {
    setFormFlag(!formFlag)
  }

  const updateBook = (updated) => {
    setCategory(updated.category.name)
    setBook(updated)
    onUpdateBook(updated)
    toggleEditForm()
    // console.log(book)
  }

  const onAddQuote = (newQuote) => {
    const updatedQuoteList = [...quotes, newQuote]
    setQuotes(updatedQuoteList)
  }

  const deleteQuote = (id) => {
    fetch(`/books/${book.id}/quotes/${id}`, {
      method: 'DELETE',
    }).then(r => {
      if (r.ok) {
      const newQuoteList = quotes.filter(q => q.id !==id)
      setQuotes(newQuoteList)
      }
    })
  }

  const quoteDisplay = book.favorite_quote ? "Favorite quote:" : ""

  const display = 
    formFlag === true ? 
      <UpdateBookForm book={book} updateBook={updateBook} /> : 
      <div>
        <h3>{book.title} <StarRating rating={book.rating}/></h3>
        <h5>by {book.author}</h5>
        <h5>Genre: {category}</h5>
        <h4>{quoteDisplay} </h4>
        <p className="favorite">{book.favorite_quote}</p>
      </div>

  const bookBorrowed = 
    book.lent !==  "" ? 
      <Location lent={book.lent} /> : ""

  const handleDeleteBook = () => {
    fetch(`/books/${book.id}`, {
      method: "DELETE", 
    }).then((r) => {
      if (r.ok) {
        navigate('/library')
        onDeleteBook(book.id); 
      }
     })
  }

  if (!error) {
    return (
      <div className="showpage">
        <QuoteSection book={book} quotes={quotes} onAddQuote={onAddQuote} deleteQuote={deleteQuote}/>
        <button onClick={toggleEditForm}>Edit Book Details</button> 
        <button onClick={handleDeleteBook}>Delete Book From Library</button>
        {bookBorrowed}
        {display}
        <br/>
        <hr/>        
      </div>
    )
  } else {
    return (
      <h3 className="unauthroized"> Not Authorized - You Do Not Have Access to This Book</h3>
    )
  }  
}

export default ShowPage
