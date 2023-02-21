import React from 'react'
import Header from './Header';
import Login from './Login';
import Posts from './Posts';
import Signup from './Signup';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import '../styles/App.css';
import Addpost from './Addpost';

const Appstate = createContext();
const App = () => {

  const [login, setlogin] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <Appstate.Provider value={{ login, setlogin, username, setUsername }}>
      <Header />

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<Addpost />} />
      </Routes>

    </Appstate.Provider>
  )
}


export default App;
export { Appstate }
