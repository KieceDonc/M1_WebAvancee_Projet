import React, { useEffect, useState } from 'react'

import './Cart.css'
import { PostDevis } from '../helpers/helpers'
import { Car, Car_Photos } from '../models/interface'
import { useAppSelector } from '../app/hooks'
import Popup from '../components/PopUp'

function Cart() {
  const [cars, setCars] = useState<Car[]>([])
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [textPopup, setTextPopup] = useState<string>('')
  const defaultImgUrl =
    'https://images.caradisiac.com/logos-ref/modele/modele--mercedes-classe-c-5/S7-modele--mercedes-classe-c-5.jpg'
  const pictures = useAppSelector((state) => state.cardata.picturesdata)

  useEffect(() => {
    // Récupération des voitures enregistrées dans le localStorage au chargement du composant
    const storedCars = localStorage.getItem('cars')
    if (storedCars) {
      setCars(JSON.parse(storedCars))
    }
  }, [])

  function removeCar(car: Car): void {
    setCars(cars.filter((c) => c !== car))
    localStorage.setItem('cars', JSON.stringify(cars))
  }

  function totalPrice(cars: Car[]): Number {
    let price: number = 0
    cars.forEach((car) => {
      price += Number(car.price)
    })
    return price
  }

  async function CreateDevis(): Promise<void> {
    const client: string = localStorage.getItem('user-info') || ''
    if (client != '' && totalPrice(cars) != 0) {
      let user = JSON.parse(client)
      localStorage.removeItem('cars')
      await PostDevis(user.id, cars, totalPrice(cars))
      setCars([])
      setTextPopup('Vous avez confirmer votre panier ! Consultez votre devis sur votre profile')
      setShowPopup(true)
    } else if (totalPrice(cars) == 0) {
      setTextPopup('Votre panier est vide')
      setShowPopup(true)
    } else {
      setTextPopup('Connectez-vous')
      setShowPopup(true)
    }
  }

  return (
    <div className="cart">
      <Popup text={textPopup} show={showPopup} onSort={(i: boolean) => setShowPopup(false)} />
      <h1 className="cart-title">Panier</h1>
      {cars.map((car: Car, index: number) => {
        if (car) {
          return (
            <div key={index} className="cart-item">
              {pictures[car.id].srcPicturesCar ? (
                <img src={'/' + pictures[car.id].srcPicturesCar} alt={car.name + ' ' + car.type} />
              ) : (
                <img src={defaultImgUrl} alt={car.name + ' ' + car.type} />
              )}
              <div className="cart-item-text">
                <div>{car.name}</div>
                <div>{car.type}</div>
                <div>{car.price} €</div>
              </div>
              <button onClick={() => removeCar(car)} className="cart-item-button">
                Supprimer
              </button>
            </div>
          )
        }
      })}
      <div className="cart-summary">Prix total : {'' + totalPrice(cars)} €</div>
      <button onClick={CreateDevis} className="cart-continue" data-testid="devis-button">
        Faire le devis
      </button>
    </div>
  )
}

export default Cart
