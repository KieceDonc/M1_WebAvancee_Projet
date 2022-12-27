import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { getAllDevis } from '../helpers/helpers.js'
import Devis from '../components/Devis'

function Profile() {
  const [newpassword, setNewPassword] = useState('')
  const [secondPassword, setVerifyPassword] = useState('')
  const [IsAdminUser, setIsAdmin] = useState(false)
  const [OurDevis, setOurDevis] = useState<any>(null)
  const [DevisAdminTab, setDevisAdmin] = useState(null)
  const [ActualUser, setActualUser] = useState(null)
  const [DevisSelect, setDevisSelect] = useState(null)
  const [AllUser, setAllUser] = useState()
  const [toPrint, setToPrint] = useState(false)

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
    let toshow = JSON.parse(localStorage.getItem('user-info') || '')
    let result: any = await fetch('http://localhost:51001/api/isAdmin?id=' + toshow.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    result = await result.json()
    setIsAdmin(result.isAdmin)
    setActualUser(toshow)
  }

  const getDevis = async (): Promise<any> => {
    let toshow = JSON.parse(localStorage.getItem('user-info') || '')
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

  async function ChangePassword() {
    if (newpassword === secondPassword) {
      let password = newpassword
      let profile = JSON.parse(localStorage.getItem('user-info') || '')
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

  async function PrintMyPdf(id: number, isMe: boolean) {
    if (!isMe) {
      let i = OurDevis.filter((item: any) => item.id == id)
      setActualUser(JSON.parse(localStorage.getItem('user-info') || ''))

      setDevisSelect(JSON.parse(i[0].data).CarsList)
    } else {
      let i: any = Object.values(DevisAdminTab).filter((item: any) => item.id == id)
      let j: any = Object.values(AllUser).filter((item: any) => item.id == id)
      setActualUser(j[0])
      setDevisSelect(JSON.parse(i[0].data).CarsList)
    }
    setToPrint(true)
  }

  return (
    <div>
      <div style={{display:"none"}}>
        <div id="element-to-print">
          <Devis car={DevisSelect} user={ActualUser} />
        </div>
      </div>
      <div>Mes Devis</div>
      <table>
        <tbody>
          {OurDevis != null
            ? OurDevis.map((item: any, index: number) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <button onClick={() => PrintMyPdf(item.id, true)}>Imprimer mon pdf</button>
                  </td>
                </tr>
              ))
            : ''}
        </tbody>
      </table>
      {IsAdminUser ? (
        <div>
          <div>Tous les devis</div>
          <table>
            <tbody>
              {DevisAdminTab != null
                ? Object.values(DevisAdminTab).map((item: any, index: number) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <button onClick={() => PrintMyPdf(item.id, true)}>Imprimer mon pdf</button>
                      </td>
                    </tr>
                  ))
                : ''}
            </tbody>
          </table>
        </div>
      ) : (
        ''
      )}
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
    </div>
  )
}

export default Profile
