import React from 'react';
import "./App.css"
import {  Route, Routes } from "react-router-dom";
import { UserProvider } from './Components/MyContext'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Library from './Components/Library'
import AddBookForm from './Components/AddBookForm'
import Signup from './Components/Signup'
import Login from './Components/Login'
// import ShowPage from './Components/ShowPage';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
        <Navigation />
        <Routes>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/library" element={<Library />} />
          <Route exact path='/new' element={<AddBookForm />} />
          {/* <Route path='/:id' element={<ShowPage />}/> */}
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;