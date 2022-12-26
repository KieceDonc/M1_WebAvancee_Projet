import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

import './Devis.css'
import { render } from 'react-dom'
import * as html2pdf from 'html2pdf.js'

function Devis(props) {
  const [user, setUser] = useState(props.user)
  const [cars, setCars] = useState(props.car)
  const [render, setRender] = useState(false)

  useEffect(() => {
    setUser(props.user)
    setCars(props.car)
  }, [props.car, props.user])

  useEffect(() => {
    if (cars != null) {
      var element = document.getElementById('element-to-print')
      var opt = {
        margin: 0,
        filename: 'Devis.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 4},
      }
      html2pdf().set(opt).from(element).save()
    }
  }, [cars])

  const randomNumber = getRandomInt(1, 10000)
  const state = { date: new Date() }


  function totalPriceHT(cars: any) {
    let price = 0
    cars.forEach((car: { price: number }) => {
      price += car.price
    })
    return price
  }

  function totalPriceTTC(cars: any) {
    let price = 0
    cars.forEach((car: { price: number }) => {
      price += car.price
    })
    return price * 1.2
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    // inspired by : https://www.kafeo.com/devis/modele-devis.htm

    <>
      {user != null && cars!=null ? (
        <div id="element-to-print">
          <div className="devis">
            <h1 className="devis-title-1">Otto Moto</h1>
            <h1 className="devis-title-2">DEVIS</h1>

            <div className="infos-societe">
              <p>Ville: Dijon</p>
              <p>Référence: {randomNumber}</p>
              <p>Date: {state.date.toLocaleDateString()}</p>
            </div>

            <div className="infos-client">
              <p>Information concernant le client</p>
              <p>Nom: {user.last_name}</p>
              <p>Prénom: {user.first_name}</p>
              <p>Email: {user.email}</p>
            </div>

            <TableContainer component={Paper} className="tableau-container-devis">
              <Table
                sx={{ minWidth: 650, color: '#fff' }}
                aria-label="simple table"
                className="tableau-devis">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#fff' }}>Marque</TableCell>
                    <TableCell sx={{ color: '#fff' }} align="right">
                      Type
                    </TableCell>
                    <TableCell sx={{ color: '#fff' }} align="right">
                      Prix
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cars.map((car) => (
                    <TableRow
                      key={car.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row" sx={{ color: '#fff' }}>
                        {car.name}
                      </TableCell>
                      <TableCell align="right" sx={{ color: '#fff' }}>
                        {car.type}
                      </TableCell>
                      <TableCell align="right" sx={{ color: '#fff' }}>
                        {car.price} €
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Prix total HT</TableCell>
                  <TableCell align="right">{totalPriceHT(cars)} €</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Prix total TTC</TableCell>
                  <TableCell align="right">{totalPriceTTC(cars)} €</TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </div>

          <div className="devis-end">
            <p>Nous restons à votre dispostion pour toute information complémentaire.</p>
            <p>Cordialement, l'équipe compétente.</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Devis
