import React, { useState, useContext } from 'react'
import { UserContext } from './MyContext'


const Form = ({book, onSubmitForm}) => {
    const { categories } = useContext(UserContext)

    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [favoriteQuote, setFavoriteQuote] = useState(book.favorite_quote)
    const [rating, setRating] = useState(book.rating)
    const [lent, setLent] = useState(book.lent)
    const [category, setCategory] = useState(0) 
    
    const dropDown = categories.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const handleCategorySelect = (e) => setCategory(e.target.value)

    const x = (book.category !== undefined ? book.category.id : 0)
    const y = (book.category !== undefined ? book.category.name : "Select From List")
    
    const bookObject = {
        title: title,
        author: author, 
        favorite_quote: favoriteQuote,
        rating: rating,
        lent: lent, 
        category_id: category
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(bookObject)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Title: </label>
            <input 
                type="text"
                name="title"
                defaultValue={book.title}
                onChange={(e) => setTitle(e.target.value)}/>
                <br/>

        <label>Author: </label>
            <input 
                type="text"
                name="author"
                defaultValue={book.author}
                onChange={(e) => setAuthor(e.target.value)}/>
                <br/>

        <label>Favorite Quote: </label>
            <textarea 
                type="text"
                name="favoriteQuote"
                defaultValue={book.favorite_quote}
                onChange={(e) => setFavoriteQuote(e.target.value)}/>
                <br/>
        
        <label>Genre: </label>
            <select onChange={handleCategorySelect}>
                <option defaultValue={x}>{y}</option>
            {dropDown}
            </select>
            <br/>

        <label>Rating: </label>
            <input 
                type="integer"
                name="rating"
                defaultValue={book.rating}
                onChange={(e) => setRating(e.target.value)}/>
                <br/>

        <label>Book Borrowed By: </label>
            <input 
                type="text"
                name="lent"
                defaultValue={book.lent}
                onChange={(e) => setLent(e.target.value)}/>
                <br/>

        <input type="submit"/>

    </form>
    </div>
  )
}

export default Form