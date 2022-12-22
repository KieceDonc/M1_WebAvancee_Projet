/* Importation des composants */
import Header from "./Header";

/* Importation css */
import "./CarPage.css";

function CarPage(){
    
    return(
      <div>
      <Header />
      <div className="CarContainer">
        <div className="CarHeader">
          <h1 className="CarTitle">Audi A7</h1>
          <h2 className="CarTitle">65 799 €</h2>
        </div>
        <div className="CarCarousel">
          <img className="CarCarouselItem" src="https://www.largus.fr/images/images/audi-a7-sportback-2-2018-04.jpg" alt="Audi A7 photo" />
        </div>  
        <button className="CarButton">
          Ajouter au panier
        </button>
        <div className="CarDescription">
          <h2 className="CarDescriptionTitle">Description</h2>
          <p>
            Crit’air :critair-2(2) <br />
            Première Main :Non <br />
            Date de mise en circulation :14/11/2014 <br />
            Cylindre :2 967 cc <br />
            Puissance fiscale :16 CV <br />
            Puissance din :272 ch <br />
            Véhicule garanti :12 mois <br /> <br />

            27 990 € TTC* <br /> <br />

            Sécurité <br /><br />

            - Airbags latéraux, Aide au démarrage en côte, Assistance au freinage d'urgence, 
            Antipatinage, ESP, 6 airbags, Essuie glace capteur de pluie, Airbags rideaux, 
            Indicateur de sous-gonflage des pneus, Lave-phares, Système détection de collision, 
            ABS Intérieur <br /> <br />

            - Bluetooth inclut musique en streaming, connexion téléphone, Air conditionné auto, 
            Volant multi-fonction, Taille écran multi-fonctions 8 pouces, Système de navigation 
            info trafic, Bouton démarrage, Réglage du volant en hauteur, électrique, en profondeur, 
            Siège avant électrique, Système de navigation, Régulateur de vitesse, Bluetooth, 
            Pré-équipement téléphone, Réseau Wifi, 14 haut-parleurs, Accoudoir central arrière,
            avant, Siège avant chauffant, Reconnaissance vocale, Ouverture du coffre à distance, 
            Smart card / Smart key, Fermerture électrique du coffre, Taille écran navigation 8 
            pouces, Système audio inclut DVD, Tapis de sol, Volant cuir, Système audio lecteur 
            CD et MP3, Rétroviseur jour/nuit, Aide au stationnement arrière, Système audio carte 
            digitale, CD, Air conditionné 4 zones, Ordinateur de bord, DVD/VCD <br /> <br />

            Extérieur et Chassis <br /> <br />

            - Phares à allumage automatique, Freins régénérateurs, Ampoules de phares led, 
            Feux arrières à LED, Rétroviseurs extérieurs réglage électrique, Rétroviseurs 
            rabattables électriquement, Rétroviseurs extérieurs chauffants, Roue de secours
          </p>
        </div>
        <div className="CarDetails">
          <div className="CarDetail">
            <h3 className="CarDetailTitle">Détails</h3>
            <p className="CarDetailText">Année : 2016</p>
            <p className="CarDetailText">Nombre de portes : 5</p>
            <p className="CarDetailText">Carburant : Diesel</p>
          </div>
        </div>
      </div>
    </div>
    )
}
export default CarPage;

