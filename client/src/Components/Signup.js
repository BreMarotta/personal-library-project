import React, { useContext, useState } from 'react'
import { UserContext } from './MyContext'

const Signup = () => {
    const {signup} = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: { "Content-Type": 'application/json'},
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(user => {
                signup(user)
                })
            } else {
                res.json()
                .then((err) => setErrorsList(err.errors));
            }            
        })
    }

    const errorsLis = errorsList.map(x => <li>{x}</li>)
  return (
    <div>
        <form onSubmit={handleSubmit}>
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
            {errorsLis}
        </ul>
    </div>
  )
}

export default Signup