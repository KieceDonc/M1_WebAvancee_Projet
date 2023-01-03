import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import './index.css'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import CharteUtilisation from '../pages/CharteUtilisation'
import { render } from '@testing-library/react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TriPrix from '../components/TriPrix'
import TriType from '../components/TriType'
import Contact from '../pages/Contact'
import { BrowserRouter as Router } from 'react-router-dom';


xdescribe('Environnement de test', () => {
    it("should render Charte", () => {
        render(
            <Router>
                <CharteUtilisation />
            </Router>
        )
    })

    it("should render Contact", () => {
        render(
            <Router>
                <Contact />
            </Router>
        )
    })

    it("should render Footer", () => {
        render(
            <Router>
                <Footer />
            </Router>
        )
    })

    it("should render Header", () => {
        render(
            <Router>
                <Header />
            </Router>
        )
    })

    it("should render TriPrix", () => {
        render(<TriPrix />)
    })

    it("should render TriType", () => {
        render(<TriType />)
    })
});