import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import HomePage from './pages/HomePage'
import CharteUtilisation from './pages/CharteUtilisation'
import Contact from './pages/Contact'
import CarPage from './pages/CarPage'
import Catalogue from './pages/Catalogue'
import Cart from './pages/Cart'
import Devis from './components/Devis'

import Button from '@mui/material/Button'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import React from 'react'

/* Importation des composants */
import Header from './components/Header'
import Footer from './components/Footer'

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
