import React, { useContext } from 'react'
import { UserContext } from './MyContext'

const ShowPage = () => {
  const {loggedIn} = useContext(UserContext)

  if (loggedIn) {
    return (
      <div>ShowPage</div>
    )
  } else {
    return (
      <h3>Not Authorized - Please Login or Signup</h3>
    )
  }
  
}

export default ShowPage
