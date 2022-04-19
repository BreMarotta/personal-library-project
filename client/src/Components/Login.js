import React, { useState, useContext } from 'react'
import { UserContext } from './MyContext'

const Login = () => {
    const {login} = useContext(UserContext)
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
                // history.pushState('/')
            } else {
                setUsername("")
                setPassword("")
                // const errorsLis = user.error.map(e => <li>{e}</li>)
                setErrorsList(user.error)
            }
        });
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
                <br/>
            {errorsList}
        </form>
    </div>
  )
}

export default Login
