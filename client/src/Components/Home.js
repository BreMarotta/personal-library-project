import React, { useContext } from 'react'
import { UserContext } from './MyContext'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const {user, loggedIn} = useContext(UserContext)

    if (loggedIn){
        return (
            <div className="home">
                <h3>Welcome, {user.username}, to your Personal Library!</h3>
                <div> Please take a moment to read through the following instructions:</div>
                <ul>
                    <li>Visit <NavLink className="homeLinks" to='/library/new' >Add Book</NavLink> to add a new book to your library. Once added, the book will generate a page of details.</li>
                    <li>Visit <NavLink className="homeLinks" to='/library'>Library</NavLink> for an alphabetized list of all books in your library. The search bar at the top of this page can be used to find a specific book by title or author.</li> 
                    <li>Click on a title to visit a page with details about that book.</li>
                    <li>From a book's page, you can view and edit book details. You can also add or delete additional quotes from the text that you enjoy.
                    </li>
                    
                    <br/>
                    <li>The second line on the navigation bar has links for each genre represented by books in your collection. Visiting one of those links will render a list of books in that genre.</li>
                    <li>Finally, visit <NavLink className="homeLinks" to='library/genres/new'>Add Genre</NavLink> to add a genre to the list of those available.</li>   
                </ul>
                <hr/>
            </div>
            
        )
    } else {
        return (
            <div>
            <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
            </div>
        )
    }
}

export default Home
