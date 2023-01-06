import React, { useState } from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Footer.css'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FacebookIcon from '@mui/icons-material/Facebook'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const Footer = () => {
  const [value, setValue] = React.useState<number>(0)
  
  return (
    <div>
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        left: 0,
        bottom: 0,
      }}>
      <BottomNavigation
        style={{ background: '#42a5f5' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}>
        <BottomNavigationAction
          label="Adresses de contact"
          icon={<ContactMailIcon />}
          component={Link}
          to="/Contact"
        />
        <BottomNavigationAction
          label="Charte d'utilisation"
          icon={<FavoriteIcon />}
          component={Link}
          to="/CharteUtilisation"
        />
        <BottomNavigationAction
          label="Lien réseaux sociaux"
          icon={<FacebookIcon />}
          href="https://fr-fr.facebook.com/"
        />
      </BottomNavigation>
    </Box>
    </div>
  )
}

export default Footer
