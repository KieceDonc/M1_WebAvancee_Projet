/* Importation des composants */
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

/* Importation css */
import './CarPage.css'
import { useAppSelector } from '../app/hooks'
import { Car } from '../models/interface'
import { useState } from 'react'
import Popup from '../components/PopUp'

function CarPage() {


  let {id} = useParams()
  const data = useAppSelector((state) => state.cardata.cardata)
  const pictures = useAppSelector((state)=>state.cardata.picturesdata)
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [textPopup,setTextPopup]=useState<string>("");
  
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
    setTextPopup("Vous avez ajouter la voiture a votre panier")
    setShowPopup(true)
  
  }
  
  return (
    <div>
      <Popup text={textPopup} show={showPopup} onSort={(i:boolean)=>setShowPopup(false)}/>
      <div className="CarContainer">
        <div className="CarHeader">
          <h1 className="CarTitle">{car.name}</h1>
          <h2 className="CarTitle">{car.price}€</h2>
        </div>
        <div className="CarCarousel">
          <img
            className="CarCarouselItem"
            src={"/"+pictures[car.id].srcPicturesCar}
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
