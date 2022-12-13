import React,{useState} from "react";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, createTheme } from "@mui/material";
import "./Footer.css";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

const Footer = () => {
    const [value, setValue] = React.useState(0);
    return (
        
    <Box sx={{ 
        width: "100%",
        position: "fixed",
        left: 0,
        bottom: 0,
    }}>
      <BottomNavigation style={{ background: '#42a5f5' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <img src="./Otto_moto.png" className="logo"/>
        <BottomNavigationAction label="Adresses de contact" icon={<ContactMailIcon />} />
        <BottomNavigationAction label="Charte d'utilisation" icon={<FavoriteIcon />} component={Link} to="/CharteUtilisation" />
        <BottomNavigationAction label="Lien réseaux sociaux" icon={<FacebookIcon />} href="https://fr-fr.facebook.com/" />
      </BottomNavigation>
    </Box>
    )
};

export default Footer;