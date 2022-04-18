import React, { useState, useContext } from 'react'
import { UserContext } from './MyContext'

const Search = () => {
    const {updateSearch} = useContext(UserContext)
  return (
    <form >
        <button onClick={(e) => e.preventDefault()}>🔍</button>
        <input 
            className="searchbar"
            type="text" 
            id="search" 
            placeholder="search books by title or author..." 
            name="search" 
            onChange={(e) => updateSearch(e.target.value)}/>
    </form>
  );
}

export default Search
