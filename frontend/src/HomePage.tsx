import { useEffect } from "react";
import React,{useState} from "react";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Button } from "@mui/material";
import "./HomePage.css";

function HomePage(){
    
    return(
        <div className="homepage">
            <h1>Home Page TODO</h1>
            <Button component={Link} to="/login" variant="contained">Login</Button>
            <Button component={Link} to="/register" variant="contained">Register</Button>
            <Button component={Link} to="/profile" variant="contained">Profile</Button>
            <Button component={Link} to="/DataTmp" variant="contained">DataTempory</Button>
        </div>
    )
}

export default HomePage;