import React, { useState, useContext } from 'react'
import { UserContext } from './MyContext'

const Login = () => {
    const {login} = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }),
        }).then(r => {
            if (r.ok) {
                (r => r.json())
                .then((user) => login(user));
            } else {
                (r => r.json())
                .then((err) => setErrors(err.error));
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
            {errors.map((error) => (<li key={error}>{error}</li>))}
        </form>
    </div>
  )
}

export default Login
