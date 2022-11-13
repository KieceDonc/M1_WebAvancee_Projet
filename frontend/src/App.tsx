import './App.css'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import HomePage from './HomePage'
import Button from "@mui/material/Button";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom'


function App() {

  return (
    <Router>
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App
