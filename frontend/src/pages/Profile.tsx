
import React, { useState, useEffect } from 'react'

function Profile() {
  const [newpassword, setNewPassword] = useState('')
  const [secondPassword, setVerifyPassword] = useState('')
  const [IsAdminUser, setIsAdmin] = useState(false)
  const [result, isResult] = useState(false)

  useEffect(()=>{
    isAdmin()
  },[])

  async function isAdmin(): Promise<void> {
    let toshow = JSON.parse(localStorage.getItem("user-info")|| "");
    let result: any = await fetch('http://localhost:51001/api/isAdmin?email=' + toshow.email, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    result = await result.json()
    setIsAdmin(result.isAdmin)
  }

  async function ChangePassword() {
    if (newpassword === secondPassword) {
      let password = newpassword
      let profile = JSON.parse(localStorage.getItem("user-info")|| "");
      let user = { profile, password }
      let result: any = await fetch('http://localhost:51001/api/profile', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      result = await result.json()
    }
  }
  return (
    <div>
      <div>Mes Devis</div>
      {/* // TODO : Rajouter les devis de l'utilisateur */}
      <div>
        <h1>Nouveau password</h1>
        <input
          type="text"
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
          placeholder="Nouveau mot de passe"></input>
        <input
          type="text"
          onChange={(e) => setVerifyPassword(e.target.value)}
          className="form-control"
          placeholder="Reconfirmer le mot de passe"></input>
        <button onClick={ChangePassword} className="btn btn-primary">
          Confirmer
        </button>
      </div>
      {IsAdminUser ? <div>Autres devis</div> : ''}
    </div>
  )
}

export default Profile
