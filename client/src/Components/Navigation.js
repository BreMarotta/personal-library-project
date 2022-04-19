import React, { useContext } from 'react'
import { UserContext } from './MyContext'
import { NavLink } from 'react-router-dom'
import Search from './Search'


const Navigation = () => {
    const {user, logout} = useContext(UserContext)
  return (
    <div className= "navigation">
        <h1>Hello {user.username}</h1>  
        <NavLink to="/" exact className= "linkStyles" >Home</NavLink>
        <NavLink to="/library" exact className= "linkStyles">Library</NavLink>
        <NavLink to='/new' exact className="linkStyles" >Add a Book</NavLink>
        <Search />
        <button onClick={logout}>Logout</button>
        <hr/>
    </div>
  )
}

export default Navigation
