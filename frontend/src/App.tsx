import './App.css'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import HomePage from './HomePage'
import Data from './Data'
import Button from "@mui/material/Button";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Catalogue from './Catalogue.js'


function App() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/DataTmp" element={<Data />} />
          <Route path="/Catalogue" element={<Catalogue />} />
        </Routes>
    </Router>
  )
}

export default App
