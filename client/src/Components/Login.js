import React, { useState, useContext } from 'react'
import { UserContext } from './MyContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {login} = useContext(UserContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, password }),
        })
        .then(res => res.json())
        .then(user => {
            if (!user.error){
                login(user)
                navigate('/')
            } else {
                setUsername("")
                setPassword("")
                setErrorsList(user.error)
            }
        });
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Login to an existing account:</h3>
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
                <br/>
            {errorsList}
        </form>
    </div>
  )
}

export default Login
