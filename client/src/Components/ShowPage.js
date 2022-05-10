import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './MyContext'
import { useParams, useNavigate } from 'react-router-dom'
import UpdateBookForm from './UpdateBookForm'
import QuoteSection from './QuoteSection'
import StarRating from './StarRating'

const ShowPage = () => {
  const {loggedIn, onUpdateBook, onDeleteBook} = useContext(UserContext)
  const navigate = useNavigate()
  const params = useParams()
  const [book, setBook] = useState({})
  const [quotes, setQuotes] = useState([])
  const [formFlag, setFormFlag] = useState(false)
  const [detailsFlag, setDetailsFlag] = useState(true)

  useEffect(() => {
    fetch(`/books/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setQuotes(data.additional_quotes)
            setBook(data)
        })
      }, [])

  const toggleEditForm = () => {
    setFormFlag(!formFlag)
  }

  const updateBook = (updated) => {
    setBook(updated)
    onUpdateBook(updated)
    toggleEditForm()
  }

  const onAddQuote = (newQuote) => {
    const updatedQuoteList = [...quotes, newQuote]
    setQuotes(updatedQuoteList)
  }

  const deleteQuote = (id) => {
    fetch(`/books/${book.id}/additional_quotes/${id}`, {
      method: 'DELETE',
    }).then(r => {
      if (r.ok) {
      const newQuoteList = quotes.filter(q => q.id !==id)
      setQuotes(newQuoteList)
      }
    })
  }

  const display = 
    formFlag === true ? <UpdateBookForm book={book} updateBook={updateBook} /> : <div><h3>{book.title} <StarRating personal_rating={book.personal_rating}/></h3>
    <h5>by {book.author}</h5>
    <h4>Favorite quote: </h4>
    <p className="favorite">{book.favorite_quote}</p></div>

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

  if (loggedIn) {
    return (
      <div className="showpage">
        <QuoteSection book={book} quotes={quotes} onAddQuote={onAddQuote} deleteQuote={deleteQuote}/>
        <button onClick={toggleEditForm}>Edit Book Details</button> 
        <button onClick={handleDeleteBook}>Delete Book From Library</button>
        {display}

        <br/>
        <hr/>
        
      </div>
    )
  } else {
    return (
      <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
    )
  }
  
}

export default ShowPage
