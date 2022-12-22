import { useEffect } from 'react'
import React, { useState } from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box, Button, Card, IconButton, Typography } from '@mui/material'
import { useAppSelector, useAppDispatch } from './app/hooks.js'

/* Importation des composants */
import Header from './Header'

/* Importation css */
import './HomePage.css'

function HomePage() {
  const data = useAppSelector((state) => state.cardata.cardata)
  let dataTab: any[] = Object.values(data.dataCar)
  const shuffled = dataTab.sort(() => 0.5 - Math.random())
  let selected = shuffled.slice(0, 3)
  const [Search, setSearch] = React.useState('' as string)

  const getFilteredItems = (query: string, items: any) => {
    if (!query) {
      return selected
    }
    return dataTab.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
  }

  const filteredItems = getFilteredItems(Search, selected)

  return (
    <div className="homepage">
      <h1>Bienvenue chez Otto Moto</h1>
      <img src="./Otto_moto.png" />
      <label>Search</label>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {filteredItems.map((item: any) => (
        <Card className="Card-HP" variant="outlined" sx={{ m: '20px', width: '100%' }}>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            {item.name}
          </Typography>
          <div className="div-cara">
            <img
              className="img-center"
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2"
              alt="image"
            />
            <Typography className="typoright">{item.description}</Typography>
          </div>

          <Box sx={{ display: 'flex' }}>
            <Button
              sx={{ ml: 'auto', fontWeight: 600 }}
              component={Link}
              to={"/carPage/"+item.id}
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
