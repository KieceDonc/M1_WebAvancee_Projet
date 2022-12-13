import React,{useState} from "react";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, createTheme } from "@mui/material";
import "./Header.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

    return (
    <AppBar position="static" style={{ background: '#42a5f5' }}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src="./Otto_moto.png" className="ching-chong"/>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none"
            }}
            >
            Otto Moto
            </Typography>

            <img src="./Otto_moto.png" className="chong-ching"/>
            <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none"
            }}
            >
            Otto Moto
            </Typography>
            <div className="header-button">
                <Button component={Link} to="/login" variant="contained">Login</Button>
                <Button component={Link} to="/register" variant="contained">Register</Button>
                <Button component={Link} to="/profile" variant="contained">Profile</Button>
                <Button component={Link} to="/DataTmp" variant="contained">DataTempory</Button>
                <Button component={Link} to="/DataTmp" variant="contained">Panier</Button>
            </div>
        </Toolbar>
        </Container>
    </AppBar>
    )
};

export default Header;