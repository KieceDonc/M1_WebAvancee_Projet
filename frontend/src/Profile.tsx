import React,{useState,useEffect} from "react";

function Profile(){

    const [newpassword,setNewPassword]=useState("");
    const [secondPassword,setVerifyPassword]=useState("");
    const [profile,setProfile]=useState("");
    const [IsLogin,setIsLogin]=useState(false);
    useEffect(()=>{
        setProfile(localStorage.getItem("user-info") || "");
        if(profile != "")
        {
            setIsLogin(true);
        }
    })

    async function ChangePassword()
    {
        if (newpassword === secondPassword)
        {
            let password = newpassword;
            let user={profile,password};
            let result:any = await fetch("http://localhost:51001/api/profile",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }) 
        result = await result.json();
        }
    }
    if(IsLogin)
    {
    return (
        <div>
            <h1>Nouveau password</h1>
            <input type="text" onChange={(e)=>setNewPassword(e.target.value)} className="form-control" placeholder="Nouveau mot de passe"></input>
            <input type="text" onChange={(e)=>setVerifyPassword(e.target.value)} className="form-control" placeholder="Reconfirmer le mot de passe"></input>
            <button onClick={ChangePassword} className="btn btn-primary">Confirmer</button>
        </div>)
    }
    else {
        return (<div> Vous n'êtes pas connecte</div>)
    }
}

export default Profile;