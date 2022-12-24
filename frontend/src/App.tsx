import './App.css'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import HomePage from './HomePage'
import Data from './Data'
import CharteUtilisation from './CharteUtilisation'
import Contact from './Contact'
import CarPage from './CarPage'
import Catalogue from './Catalogue'
import Cart from './Cart'
import Button from '@mui/material/Button'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* Importation des composants */
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <Header />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/CharteUtilisation" element={<CharteUtilisation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CarPage/:id" element={<CarPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
