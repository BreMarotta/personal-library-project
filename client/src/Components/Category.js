import React, { useContext } from 'react'
import { UserContext } from './MyContext'

const Category = ({genre}) => {
    const {filterBooks} = useContext(UserContext)
    
    const handleClick = (e) => {
        filterBooks(e.target.value)
    }
  return (
      <li>
        <button className="genre" value={genre.id} onClick={handleClick}>{genre.name}</button>
    </li>
  )
}

export default Category
