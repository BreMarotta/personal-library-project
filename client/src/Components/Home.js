import React, { useContext } from 'react'
import { UserContext } from './MyContext'

const Home = () => {
    const {user, loggedIn} = useContext(UserContext)

    if (loggedIn){
        return (
            <div className="home">
                <h3>{user.username}'s Personal Library</h3>
                
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
