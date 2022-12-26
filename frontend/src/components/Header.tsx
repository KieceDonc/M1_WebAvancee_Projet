import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Button, createTheme } from '@mui/material'
import './Header.css'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const [profile, setProfile] = useState('')
  const [IsLog, setIsLogin] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    let user = localStorage.getItem('user-info') || ''
    setProfile(user)
    if (user != '') {
      setIsLogin(true)
    }
  })

  const Disconnect = () => {
    localStorage.removeItem('user-info');
    setIsLogin(false);
    navigate("/")
  }
  return (
    <AppBar position="fixed" style={{ background: '#42a5f5' }} sx={{ width: '100%' }}>
      <Toolbar disableGutters>
        <img src="/Otto_moto.png" className="header-photo" />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
          Otto Moto
        </Typography>

        <div className="header-button">
          {!IsLog ? (
            <Button component={Link} to="/Login" variant="contained">
              Sign In
            </Button>
          ) : (
            <Button component={Link} onClick={Disconnect} to="/" variant="contained">
              Log Out
            </Button>
          )}
          {!IsLog ? (
            <Button component={Link} to="/Register" variant="contained">
              Register
            </Button>
          ) : (
            <Button component={Link} to="/profile" variant="contained">
              Profile
            </Button>
          )}
          <Button component={Link} to="/Catalogue" variant="contained">
            Catalogue
          </Button>
          <Button component={Link} to="/cart" variant="contained">
            Panier
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
