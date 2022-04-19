import React, { useContext } from 'react'
import { UserContext } from './MyContext'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const {user, loggedIn, logout} = useContext(UserContext)

    if (loggedIn){
        return (
            <div>
                <h3>{user.username}'s Personal Library</h3>
                
            </div>
            
        )
    } else {
        return (
            <div>
            <h3>Please Login or Signup</h3>
            </div>
        )
    }
}

export default Home
