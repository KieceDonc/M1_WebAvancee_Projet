import React,{useState} from "react";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, createTheme } from "@mui/material";
import "./Header.css";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

    return (
    <AppBar position="fixed" style={{ background: '#42a5f5' }} sx={{ width: "100%" }}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src="./Otto_moto.png" className="max-screen"/>
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

            <img src="./Otto_moto.png" className="min-screen"/>
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