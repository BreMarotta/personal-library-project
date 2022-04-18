import React, { useContext } from 'react'
import { UserContext } from './MyContext'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    const {user} = useContext(UserContext)
  return (
    <div className= "navigation">
        <h1>Hello {user.username}</h1>
        <NavLink to='/' exact className="linkStyles" >Home</NavLink>
        <NavLink to="/library" exact className= "linkStyles">Library</NavLink>
    </div>
  )
}

export default Navigation
