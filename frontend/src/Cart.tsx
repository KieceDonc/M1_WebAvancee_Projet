import React, { useState } from 'react'

import './Cart.css'

function Cart() {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: 'Mercedes',
      model: 'Classe C',
      image:
        'https://images.caradisiac.com/logos-ref/modele/modele--mercedes-classe-c-5/S7-modele--mercedes-classe-c-5.jpg',
      price: 39999,
    },
    {
      id: 2,
      make: 'Audi',
      model: 'A7',
      image:
        'https://images.caradisiac.com/images/4/9/0/8/164908/S1-nouvelle-audi-a7-prix-a-partir-de-74-000-eur-538907.jpg',
      price: 40000,
    },
  ])

  function addCar(car: any) {
    setCars([...cars, car])
  }

  function removeCar(car: any) {
    setCars(cars.filter((c) => c !== car))
  }

  function totalPrice(cars: any) {
    let price = 0
    cars.forEach((car: { price: number }) => {
      price += car.price
    })
    return price
  }

  return (
    <div className="cart">
      <h1 className="cart-title">Panier</h1>
      {cars.map((car) => {
        if (car) {
          return (
            <div key={car.id} className="cart-item">
              {car.image ? <img src={car.image} alt={car.make + ' ' + car.model} /> : null}
              <div className="cart-item-text">
                <div>{car.make}</div>
                <div>{car.model}</div>
                <div>{car.price} €</div>
              </div>
              <button onClick={() => removeCar(car)} className="cart-item-button">
                Supprimer
              </button>
            </div>
          )
        }
      })}
      <div className="cart-summary">Prix total : {totalPrice(cars)} €</div>
      <button className="cart-continue">Faire le devis</button>
    </div>
  )
}

export default Cart
