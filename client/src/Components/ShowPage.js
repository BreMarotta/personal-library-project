import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './MyContext'
import { useParams, useNavigate } from 'react-router-dom'
import UpdateBookForm from './UpdateBookForm'
import QuoteSection from './QuoteSection'

const ShowPage = () => {
  const {loggedIn, onUpdateBook, onDeleteBook} = useContext(UserContext)
  const navigate = useNavigate()
  const params = useParams()
  const [book, setBook] = useState({})
  const [quotes, setQuotes] = useState([])
  const [formFlag, setFormFlag] = useState(false)

  useEffect(() => {
    fetch(`/books/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setQuotes(data.additional_quotes)
            setBook(data)
            console.log(quotes)
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

  const displayForm = 
    formFlag === true ? <UpdateBookForm book={book} updateBook={updateBook} /> : ""

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
      <div>
        <QuoteSection book={book} quotes={quotes} onAddQuote={onAddQuote}/>
        {displayForm}
        <h3>{book.title}</h3>
        <h4>by {book.author}</h4>
        <h4>Favorite quote: {book.favorite_quote}</h4>
        <br/>
        <hr/>
        <button onClick={toggleEditForm}>Edit Book Details</button>
        
        <button onClick={handleDeleteBook}>Delete Book From Library</button>
      </div>
    )
  } else {
    return (
      <h3>Not Authorized - Please Login or Signup</h3>
    )
  }
  
}

export default ShowPage
