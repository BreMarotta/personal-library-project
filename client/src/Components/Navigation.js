import React, { useContext } from 'react'
import { UserContext } from './MyContext'
import { NavLink, useNavigate } from 'react-router-dom'
// import Home from './Home'


const Navigation = () => {
    const {user, loggedIn, logout} = useContext(UserContext)
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

    if (loggedIn) {
      return (
        <div className= "navigation">
            <button className="logoutButton" onClick={logoutUser}>Logout</button>
            <h1 className="title">{user.username}'s Personal Library</h1>
            <NavLink to="/" className= "linkStyles" >Home</NavLink>
            <NavLink to="/library" className= "linkStyles">Library</NavLink>
            <NavLink to='/new' className="linkStyles" >Add a Book</NavLink>
            <NavLink to='/categories/new' className="linkStyles" >Add Category</NavLink>
            
            
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
