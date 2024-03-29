import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter as Router, Route, Routes, NavigateFunction } from 'react-router-dom'
import { Button, createTheme } from '@mui/material'
import './Header.css'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  /* const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget)
  } */
  const [profile, setProfile] = useState<string>('')
  const [IsLog, setIsLogin] = useState<boolean>(false)
  const navigate: NavigateFunction = useNavigate()
  useEffect(() => {
    let user = localStorage.getItem('user-info') || ''
    setProfile(user)
    if (user != '') {
      setIsLogin(true)
    }
  })

  const Disconnect = (): void => {
    localStorage.removeItem('user-info')
    setIsLogin(false)
    navigate('/')
  }
  return (
    <AppBar
      position="fixed"
      className="header-container"
      style={{ background: '#42a5f5' }}
      sx={{ width: '100%' }}>
      <Toolbar disableGutters>
        <img src="/Otto_moto.png" className="header-photo" />
        <Typography
          className="header-href"
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
            <Button component={Link} to="/Login" variant="contained" data-testid="login-button">
              Se connecter
            </Button>
          ) : (
            <Button component={Link} onClick={Disconnect} to="/" variant="contained" data-testid="logout-button">
              Se déconnecter
            </Button>
          )}
          {!IsLog ? (
            <Button component={Link} to="/Register" variant="contained" data-testid="register-button">
              S'enregistrer
            </Button>
          ) : (
            <Button component={Link} to="/profile" variant="contained" data-testid="profil-button">
              Profil
            </Button>
          )}
          <Button component={Link} to="/Catalogue" variant="contained" data-testid="catalogue-button">
            Catalogue
          </Button>
          <Button component={Link} to="/cart" variant="contained" data-testid="cart-button">
            Panier
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
