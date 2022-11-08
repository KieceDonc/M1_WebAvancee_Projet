import { useEffect } from "react";
import React,{useState} from "react";

function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    useEffect(()=>{
        if (localStorage.getItem("user-info"))
        {
            console.log("Already login");
            //Clean local storage => localStorage.clear()
        }
    })

    async function connexion()
    {
        let user={email,password};
        let result:any = await fetch("http://localhost:51001/api/login",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }) 
        result = await result.json();
        
        if(!result.error) 
        {
            localStorage.setItem("user-info",JSON.stringify(result));
        }
        else{
            console.log("error mot de passe ou email incorrect");
        }
    }
    return(
        <div>
            <h1>Connexion</h1>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}className="form-control" placeholder="Email"></input>
            <input type="text" onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="Mot de passe"></input>
            <button onClick={connexion} className="btn btn-primary">S'inscrire</button>
        </div>
    )
}

export default Login;