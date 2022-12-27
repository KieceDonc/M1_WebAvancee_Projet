/* Importation des composants */
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

/* Importation css */
import './CarPage.css'
import { useAppSelector } from '../app/hooks'
import { Car } from '../models/interface'

function CarPage() {


  let {id} = useParams()
  const data = useAppSelector((state) => state.cardata.cardata)
  let dataTab: Car[] = Object.values(data.dataCar)
  let car:Car = dataTab.filter((item) => item.id == ~~id)[0]

  function addCarToCart():void{
    let cars: Car[] = [];
    let json: string|null =  localStorage.getItem("cars");

    if(json != null){
      cars = JSON.parse(json);
    }
    
    let carClone = JSON.parse(JSON.stringify(car));
    carClone.id = car.id;
    cars = [...cars, carClone]

    localStorage.setItem("cars",JSON.stringify(cars));
  
  }
  
  return (
    <div>
      <Header />
      <div className="CarContainer">
        <div className="CarHeader">
          <h1 className="CarTitle">{car.name}</h1>
          <h2 className="CarTitle">{car.price}€</h2>
        </div>
        <div className="CarCarousel">
          <img
            className="CarCarouselItem"
            src="https://www.largus.fr/images/images/audi-a7-sportback-2-2018-04.jpg"
            alt="Audi A7 photo"
          />
        </div>
        <button className="CarButton" onClick={addCarToCart}>Ajouter au panier</button>
        <div className="CarDescription">
          <h2 className="CarDescriptionTitle">Description</h2>
          <p>{car.description}</p>
        </div>
        <div className="CarDetails">
          <div className="CarDetail">
            <h3 className="CarDetailTitle">Détails</h3>
            <p className="CarDetailText">Année : {car.year}</p>
            <p className="CarDetailText">Nombre de portes : {car.nb_doors}</p>
            <p className="CarDetailText">Type : {car.type}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CarPage
