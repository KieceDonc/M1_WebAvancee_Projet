import { useEffect } from "react";
import React,{useState} from "react";
import { Link,BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Button } from "@mui/material";

/* Importation des composants */
import Header from "./Header";

/* Importation css */
import "./HomePage.css";

function HomePage(){
    
    return(
        <div className="homepage">
            <Header/>
            <h1>Home Page TODO</h1>
        </div>
    )
}

export default HomePage;