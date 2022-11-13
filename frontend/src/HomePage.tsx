import { useEffect } from "react";
import React,{useState} from "react";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Button } from "@mui/material";

function HomePage(){
    
    return(
        <div>
            <h1>Home Page TODO</h1>
            <Button component={Link} to="/login" variant="contained">Login</Button>
        <Button component={Link} to="/register" variant="contained">Register</Button>
            
        </div>
    )
}

export default HomePage;