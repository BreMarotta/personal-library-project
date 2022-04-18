import React, { useContext } from 'react'
import { UserContext } from './MyContext'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const {user} = useContext(UserContext)

    if (user.error){
        return (
            <h3>Please<NavLink to='/login' exact className="linkStyles" >Login</NavLink>or<NavLink to='/signup' exact className="linkStyles" >Signup</NavLink></h3>
        )
    } else {
        return (
            <h3>{user.username}'s Personal Library</h3>
        )
    }
}

export default Home
