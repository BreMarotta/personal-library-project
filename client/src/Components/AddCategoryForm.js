import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext} from './MyContext'


const AddCategoryForm = () => {
    const {loggedIn, addCategory} = useContext(UserContext)
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/categories', {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({name: name})
        })
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                console.log(data)
                navigate('/library')
            } else {
                const errorsLis = data.errors.map(e => <li>{e}</li>)
                setErrorsList(errorsLis)
            }
        })
    }

    if (loggedIn) {
        return (
            <div className="form">AddCategoryForm 

                <form onSubmit={handleSubmit}>
                    <h3>Add New Category:</h3>
                    <hr/>
                    <label>Category Name: </label>
                    <input  
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    <input type="submit" />
                </form>
                <ul>
                    {errorsList}
                </ul>
            </div>
        )
    } else {
        return (
            <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
          )
    }
}

export default AddCategoryForm
