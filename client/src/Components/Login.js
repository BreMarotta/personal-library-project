import React, { useState, useContext } from 'react'
import { UserContext } from './MyContext'

const Login = () => {
    const {login} = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <br/>
            <label>Password: </label>
            <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <input type="submit"/>
        </form>
    </div>
  )
}

export default Login
