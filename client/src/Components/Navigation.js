import React, { useContext } from 'react'
import { UserContext } from './MyContext'
import { NavLink, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const {user, loggedIn, logout, userCategories} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
      fetch('/logout', {
        method: "DELETE", 
        headers: { "Content-Type": "application/json"}
      })
      .then(() => {
        logout()
        navigate('/')
      })
    }

    const genreLinks = userCategories.map(c => <NavLink key={c.id} name={c.name} to={`/library/genres/${c.id}`} className="genreStyles">{c.name}</NavLink>)

    if (loggedIn) {
      return (
        <div className= "navigation">
            <button className="logoutButton" onClick={logoutUser}>Logout</button>
            <h1 className="title">{user.username}'s Library</h1>
            <NavLink to="/" className="linkStyles">Home</NavLink>
            <NavLink to="/library" className="linkStyles">Library</NavLink>
            <NavLink to='/library/new' className="linkStyles" >Add Book</NavLink>
            <br/>
            <br/>
            {genreLinks}
            <NavLink to='/library/genres/new' className="genreStyles" >Add Genre</NavLink>
            
            
            <hr/>
        </div>
      )
    } else {
      return (
        <div className= "navigation">
          <NavLink to='/login' className="linkStyles" >Login</NavLink>
          <NavLink to='/signup' className="linkStyles" >Signup</NavLink>
          <hr/>
        </div>
      )
    }

}


export default Navigation
