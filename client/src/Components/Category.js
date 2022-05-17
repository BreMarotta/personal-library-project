import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './MyContext'
import Book from './Book'

const Category = () => {
    const {loggedIn, updateCategory, genreBooks} = useContext(UserContext)
    const params = useParams()
    // const [category, setCategory] = useState("")

    updateCategory(params.id)
    console.log(genreBooks)

    // const categoryName = () => {
    //     genreBooks.find(b => b.category)
    // }
    // console.log(categoryName)
    
    const displayBooks = genreBooks.map(b => <Book key={b.id} book={b}/>)
    
if (loggedIn) {
     return (
        <div className="category">

            {/* <h3>{categoryName}</h3> */}
            {displayBooks}
        </div>
     )
  } else {
    return (
      <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
    )
  }
  
}

export default Category
