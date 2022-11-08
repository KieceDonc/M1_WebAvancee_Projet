import React,{useState} from "react";

function Register()
{
    const [first_name,setFirst_name]=useState("");
    const [last_name,setLast_name]=useState("");
    const [password,setPassWord]=useState("");
    const [email,setEmail]=useState("");
    async function signup()
    {
        let user={first_name,last_name,password,email};

        let result=await fetch("http://localhost:51001/api/register",{
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
            console.log(result.error);
        }
    }
    return (    
        <div>
            <h1>Inscription</h1>
            <input type="text" onChange={(e)=>setFirst_name(e.target.value)} className="form-control" placeholder="Prénom"></input>
            <input type="text" onChange={(e)=>setLast_name(e.target.value)} className="form-control" placeholder="Nom"></input>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}className="form-control" placeholder="Email"></input>
            <input type="text" onChange={(e)=>setPassWord(e.target.value)}className="form-control" placeholder="Mot de passe"></input>
            <button onClick={signup} className="btn btn-primary">S'inscrire</button>
        </div>
    )
}

export default Register;