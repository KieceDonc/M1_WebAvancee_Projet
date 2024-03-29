import { useEffect } from 'react'
import React, { useState } from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box, Button, Card, Typography } from '@mui/material'

import { useAppSelector, useAppDispatch } from '../app/hooks'

/* Importation des composants */
import Header from '../components/Header.js'

/* Importation css */
import './HomePage.css'
import { Car } from '../models/interface'

function HomePage() {
  const data = useAppSelector((state) => state.cardata.cardata)
  const pictures = useAppSelector((state) => state.cardata.picturesdata)
  let dataTab: Car[] = Object.values(data.dataCar)
  const shuffled: Car[] = dataTab.sort(() => 0.5 - Math.random())
  let selected: Car[] = shuffled.slice(0, 3)
  const [Search, setSearch] = React.useState<string>('')

  const getFilteredItems = (query: string, items: Car[]): Car[] => {
    if (!query) {
      return selected
    }
    return dataTab.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
  }

  const filteredItems: Car[] = getFilteredItems(Search, selected)

  return (
    <div className="homepage">
      <h1>Bienvenue chez Otto Moto</h1>
      <img src="./Otto_moto.png" />
      <input
        placeholder="Recherche rapide de voiture"
        type="text"
        className="homepage-searchbar"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredItems.map((item: Car, index: number) => (
        <Card key={index} className="Card-HP" variant="outlined" sx={{ m: '20px', width: '100%' }}>
          <Typography variant="h6" sx={{ mt: '10px', mb: '10px', ml: '20px' }}>
            {item.name}
          </Typography>
          <div className="div-cara">
            <img className="img-center" src={'/' + pictures[item.id].srcPicturesCar} alt="image" />
            <Typography className="typoright" sx={{ mr: '20%', ml: '20px' }}>
              {item.description}
            </Typography>
          </div>

          <Box className="homepage-goto-container" sx={{ display: 'flex' }}>
            <Button
              sx={{ fontWeight: 600 }}
              component={Link}
              to={'/carPage/' + item.id}
              variant="contained">
              Voir la page
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  )
}
export default HomePage
