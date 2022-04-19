import React, { useContext, useState } from 'react'
import { UserContext } from './MyContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const {signup} = useContext(UserContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup',{
            method: 'POST',
            headers: { "Content-Type": 'application/json'},
            body: JSON.stringify({
                username: username, 
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors){
                signup(user)
                navigate('/books')
            } else {
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const errorsLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorsLis)
            }
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Create a new account: </h3>
            <label>Username: </label>
            <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/> 
                <br/>
            <label>Password: </label>
            <input 
                type="text" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/> 
                <br/>
            <label>Confirm Password: </label>
            <input 
                type="text" 
                id="passwordConfirmation" 
                value={passwordConfirmation} 
                onChange={(e) => setPasswordConfirmation(e.target.value)}/> 
                <br/>
                <input type="submit"/>
        </form>
        <ul>
            {errorsList}
        </ul>
    </div>
  )
}

export default Signup