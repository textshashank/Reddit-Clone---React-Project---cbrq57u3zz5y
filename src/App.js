import SideNav from './components/SideNav';
import './App.css';
import Main from './components/Main';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import Login from './backend/Login';
import Signup from './backend/Signup';
import Addpost from './backend/Addpost';

const Appstate = createContext();

function App() {
  const [login, setlogin] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <Appstate.Provider value={{ login, setlogin, username, setUsername }}>
      {/* <div className="App">
        <div className='container'>
          <SideNav />
          <Main />
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<div className="App">
          <div className='container'>
            <SideNav />
            <Main />
          </div>
        </div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<Addpost />} />
      </Routes>
    </Appstate.Provider>
  );
}

export default App;

export { Appstate }
