import { describe, expect, test } from '@jest/globals'
import { getByTestId, render, act, fireEvent, screen, prettyDOM } from '@testing-library/react'

import { mockCarType, mockCarTabData } from '../__mocks__/objectsMock'

import React from 'react'
import TriType from '../components/TriType'
import { Car } from '../models/interface'


import ReactDOM from 'react-dom/client'
import App from '../App'
import './index.css'
import { Provider } from 'react-redux'
import CharteUtilisation from '../pages/CharteUtilisation'

import Footer from '../components/Footer'
import Header from '../components/Header'
import TriPrix from '../components/TriPrix'

import Contact from '../pages/Contact'
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '../pages/Profile'
import { user1 } from '../__mocks__/objectsMock'
import { store } from '../__mocks__/storeMock'
import Catalogue from '../pages/Catalogue'
import Register from '../pages/Register'
import { Login } from '@mui/icons-material'


afterEach(() => {
  jest.restoreAllMocks()
})

describe('Tests à compléter', () => {
  it("affiche à l'écran le composant Charte", () => {
    render(
      <Router>
        <CharteUtilisation />
      </Router>
    )
  })

  it("affiche à l'écran le composant  Contact", () => {
    render(
      <Router>
        <Contact />
      </Router>
    )
  })

  it("affiche à l'écran le composant Footer", () => {
    render(
      <Router>
        <Footer />
      </Router>
    )
  })

  it("affiche à l'écran le composant Catalogue", () => {

    render(
      <Router>
        <Provider store={store}>
          <Catalogue />
        </Provider>
      </Router>
    )
  })

  it("affiche à l'écran le composant Login", () => {

    render(
      <Router>
        <Provider store={store}>
          <Register />
        </Provider>
      </Router>
    )
  })

  it("affiche à l'écran le composant Register", () => {

    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    )
  })

  it("affiche à l'écran le composant TriPrix", () => {
    render(<TriPrix />)
  })
});
