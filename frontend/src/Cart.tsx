import React, { useEffect, useState } from 'react'

import './Cart.css'

function Cart() {

  const [cars, setCars] = useState([]);
  const defaultImgUrl = "https://images.caradisiac.com/logos-ref/modele/modele--mercedes-classe-c-5/S7-modele--mercedes-classe-c-5.jpg";

  useEffect(() => {
    // Récupération des voitures enregistrées dans le localStorage au chargement du composant
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
      setCars(JSON.parse(storedCars));
    }
  }, []);

  function removeCar(car: any) {
    setCars(cars.filter((c) => c !== car))
    localStorage.setItem('cars',JSON.stringify(cars));
  }

  function totalPrice(cars: any): Number {
    let price = 0
    cars.forEach((car: { price: String }) => {
      price += Number(car.price)
    })
    return price
  }

  return (
    <div className="cart">
      <h1 className="cart-title">Panier</h1>
      {cars.map((car: any) => {
        if (car) {
          return (
            <div key={car.id} className="cart-item">
              {car.image ? <img src={car.image} alt={car.name + ' ' + car.type} /> : <img src={defaultImgUrl} alt={car.name + ' ' + car.type} /> }
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
      <div className="cart-summary">Prix total : {''+totalPrice(cars)} €</div>
      <button className="cart-continue">Faire le devis</button>
    </div>
  )
}

export default Cart
