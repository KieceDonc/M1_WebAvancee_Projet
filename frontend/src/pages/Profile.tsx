import { Button, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { getAllDevis } from '../helpers/helpers.js'
import Devis from '../components/Devis'
import './Profile.css'
import * as type from '../models/interface'

function Profile() {
  const [newpassword, setNewPassword] = useState<string>('')
  const [secondPassword, setVerifyPassword] = useState<string>('')
  const [IsAdminUser, setIsAdmin] = useState<boolean>(false)
  const [OurDevis, setOurDevis] = useState<type.Devis>()
  const [DevisAdminTab, setDevisAdmin] = useState<type.Devis[]>([])
  const [ActualUser, setActualUser] = useState<type.User>()
  const [DevisSelect, setDevisSelect] = useState<type.Devis>()
  const [AllUser, setAllUser] = useState<type.User[]>()
  const [toPrint, setToPrint] = useState<boolean>(false)
  const [ActualDevisID, setDevisID] = useState<number>(0)

  useEffect(() => {
    isAdmin()
    getDevis()  
  }, [])

  useEffect(() => {
    if (IsAdminUser) {
      DevisAdmin()
    }
  }, [IsAdminUser])

  async function isAdmin(): Promise<void> {
    let toshow: any = JSON.parse(localStorage.getItem('user-info') || '')
    let result: any = await fetch('http://localhost:51001/api/isAdmin?id=' + toshow.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    if(result!=null){
    result = await result.json()
    setIsAdmin(result.isAdmin)
    setActualUser(toshow)
    }
  }

  const getDevis = async (): Promise<any> => {
    let toshow: any = JSON.parse(localStorage.getItem('user-info') || '')
    let result: any = await fetch('http://localhost:51001/api/devis?id=' + toshow.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    result = await result.json()
    setOurDevis(Object.values(result.Devis))
  }

  const DevisAdmin = async (): Promise<any> => {
    let result: any = await fetch('http://localhost:51001/api/alldevis', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    result = await result.json()
    setAllUser(result.User)
    setDevisAdmin(result.Devis)
  }

  async function ChangePassword(): Promise<void> {
    if (newpassword == secondPassword) {
      let password: string = newpassword
      let profile: any = JSON.parse(localStorage.getItem('user-info') || '')
      let id = profile.id;
      let user = { id, password }
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

  async function PrintMyPdf(id: number, isMe: boolean): Promise<void> {
    if (!isMe) {
      let i = OurDevis.filter((item: any) => item.id == id)
      setActualUser(JSON.parse(localStorage.getItem('user-info') || ''))
      setDevisSelect(JSON.parse(i[0].data).CarsList)
      setDevisID(id)
    } else {
      let i: any = Object.values(DevisAdminTab).filter((item: any) => item.id == id)
      let j: any = Object.values(AllUser).filter((item: any) => item.id == i[0].idUtilisateur)
      setActualUser(j[0])
      setDevisSelect(JSON.parse(i[0].data).CarsList)
      setDevisID(id)
    }
    setToPrint(true)
  }

  return (
    <div className="profile-container">
      <div style={{ display: 'none' }}>
        <div id="element-to-print">
          <Devis car={DevisSelect} user={ActualUser} id={ActualDevisID} />
        </div>
      </div>
      <div className="profile-category-container">
        <h2>Mes Devis</h2>
        <table>
          <tbody>
            {OurDevis != null ? (
              OurDevis.map((item: any, index: number) => (
                <tr key={index}>
                  <td>Devis n°{index + 1}</td>
                  <td>
                    <button className="profile-button" onClick={() => PrintMyPdf(item.id, false)}>
                      Imprimer mon pdf
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr />
            )}
          </tbody>
        </table>
      </div>
      {IsAdminUser ? (
        <div className="profile-category-container">
          <h2>Tous les devis</h2>
          <table>
            <tbody>
              {DevisAdminTab != null ? (
                Object.values(DevisAdminTab).map((item: any, index: number) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <button className="profile-button" onClick={() => PrintMyPdf(item.id, true)}>
                        Imprimer mon pdf
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr />
              )}
            </tbody>
          </table>
        </div>
      ) : (
        ''
      )}
      <div className="profile-category-container">
        <h2>Nouveau mot de passe</h2>
        <div className="profile-newpassword">
          <TextField
            className="textField"
            label="Nouveau mot de passe"
            variant="outlined"
            margin="dense"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            className="textField"
            label="Reconfirmer le mot de passe"
            variant="outlined"
            margin="dense"
            type="password"
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
        </div>
        <button className="profile-button" onClick={()=>ChangePassword()}>
          Confirmer
        </button>
      </div>
    </div>
  )
}

export default Profile
