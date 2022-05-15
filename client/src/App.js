import React from 'react';
import "./App.css"
import {  Route, Routes } from "react-router-dom";
import { UserProvider } from './Components/MyContext'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Library from './Components/Library'
import AddBookForm from './Components/AddBookForm'
import AddCategoryForm from './Components/AddCategoryForm';
import Signup from './Components/Signup'
import Login from './Components/Login'
import ShowPage from './Components/ShowPage';
import Category from './Components/Category';

function App() {
  return (
    <div className="App">

      <UserProvider>
        {/* <Home /> */}
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/library" element={<Library />} />
          <Route exact path='/library/new' element={<AddBookForm />} />
          <Route exact path='/library/genres/new' element={<AddCategoryForm />} />
          <Route path='/library/genres/:id' element={<Category />} />
          <Route path='library/:id' element={<ShowPage />}/>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;