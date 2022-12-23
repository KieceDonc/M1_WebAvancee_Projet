import React, { useState } from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Button, createTheme } from '@mui/material'
import './Header.css'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
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
          <Button component={Link} to="/login" variant="contained">
            Login
          </Button>
          <Button component={Link} to="/register" variant="contained">
            Register
          </Button>
          <Button component={Link} to="/profile" variant="contained">
            Profile
          </Button>
          <Button component={Link} to="/DataTmp" variant="contained">
            Panier
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
