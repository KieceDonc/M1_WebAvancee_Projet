import './App.css'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import HomePage from './HomePage'
import Data from './Data'
import CharteUtilisation from './CharteUtilisation'
import Button from "@mui/material/Button";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom'

/* Importation des composants */
import Header from "./Header";
import Footer from "./Footer";

function App() {
  
  return (
    <Router>
        <Header/>
        <div className="Routes">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/DataTmp" element={<Data />} />
            <Route path="/CharteUtilisation" element={<CharteUtilisation />} />
          </Routes>
        </div>
        <Footer/>
    </Router>
  )
}

export default App
