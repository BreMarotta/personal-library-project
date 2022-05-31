import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext} from './MyContext'


const AddCategoryForm = () => {
    const {loggedIn, categories, addCategory} = useContext(UserContext)
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
                // console.log(data)
                navigate('/library')
                addCategory(data)
            } else {
                const errorsLis = data.errors.map(e => <li>{e}</li>)
                setErrorsList(errorsLis)
            }
        })
    }

    const categoryLis = categories.map(x => <li key={x.id}><strong>{x.name}</strong> ({x.user_total} {x.user_total === 1 ? "library" : "libraries"})</li>)

    if (loggedIn) {
        return (
            <div> 
                <div className="additionalContainer">
                    <h3>Available Genres: </h3>
                    <ul>
                        {categoryLis}
                    </ul>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Add New Genre:</h3>
                    <hr/>
                    <label>New Genre Name: </label>
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
