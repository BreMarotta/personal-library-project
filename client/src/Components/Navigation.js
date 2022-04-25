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
            <h1>{user.username}'s Personal Library</h1>
            <NavLink to="/" exact className= "linkStyles" >Home</NavLink>
            <NavLink to="/library" exact className= "linkStyles">Library</NavLink>
            <NavLink to='/new' exact className="linkStyles" >Add a Book</NavLink>
            
            <button onClick={logoutUser}>Logout</button>
            <hr/>
        </div>
      )
    } else {
      return (
        <div className= "navigation">
          <NavLink to='/login' exact className="linkStyles" >Login</NavLink>
          <NavLink to='/signup' exact className="linkStyles" >Signup</NavLink>
          <hr/>
        </div>
      )
    }

}


export default Navigation
