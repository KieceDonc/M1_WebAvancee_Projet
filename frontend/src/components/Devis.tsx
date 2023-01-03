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
import { Car, User } from '../models/interface'




function Devis(props: any) {
  const [user, setUser] = useState<User>(props.user)
  const [cars, setCars] = useState<Car[]>(props.car)
  const [render, setRender] = useState<boolean>(false)

  useEffect(() => {
    setUser(props.user)
    setCars(props.car)
  }, [props.car, props.user])

  useEffect(() => {
    if (cars != null) {
      var element: HTMLElement | null = document.getElementById('element-to-print')
      var opt = {
        margin: 0,
        filename: 'Devis.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 4 },
      }
      try {
        html2pdf().set(opt).from(element).save()
      } catch (e) {
        // Pour que jest ne plante pas car il ne trouve pas le document
      }
    }
  }, [cars])

  const state = { date: new Date() }


  function totalPriceHT(cars: Car[]): number {
    let price = 0
    cars.forEach((car: Car) => {
      price += ~~car.price
    })
    return price
  }

  function totalPriceTTC(cars: Car[]): number {
    let price = 0
    cars.forEach((car: Car) => {
      price += ~~car.price
    })
    return price * 1.2
  }


  return (
    // inspired by : https://www.kafeo.com/devis/modele-devis.htm

    <>
      {user != null && cars != null ? (
        <div id="element-to-print" data-testid="render">
          <div className="devis">
            <h1 className="devis-title-1">Otto Moto</h1>
            <h1 className="devis-title-2">DEVIS</h1>

            <div className="infos-societe">
              <p>Ville: Dijon</p>
              <p>Référence: {props.id}</p>
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
                  {cars.map((car: Car, index: number) => (
                    <TableRow
                      data-testid={`car-${index}`}
                      key={index}
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
                  <TableCell align="right" data-testid="totalpriceHT">{totalPriceHT(cars)} €</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Prix total TTC</TableCell>
                  <TableCell align="right" data-testid="prixTTC">{totalPriceTTC(cars)} €</TableCell>
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
      )
      }
    </>
  )
}

export default Devis
