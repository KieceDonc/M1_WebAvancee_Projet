<?php 

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


return new class extends Migration {
    public function up() {
        $dataCar = ([
              [
                "year"=> 2018,
                "price"=> 12950,
                "nb_doors"=> 2,
                "name"=> "Nissan 370 Z",
                "type"=>"Sportive",
                "description"=> "La 370Z est une voiture de sport du constructeur automobile japonais Nissan, remplaçante de la Nissan 350Z.",
               
              ],
              [
                "year"=> 2018,
                "price"=> 795,
                "nb_doors"=> 5,
                "name"=> "Peugeot 306",
                "type"=>"Citadine",
                "description"=> "La Peugeot 306 est une automobile compacte du constructeur français Peugeot, commercialisée de 1993 à 2002 (1997 à 2002 pour le break et 1994 à 2002 pour le cabriolet et la berline). Elle a été produite à près de 3 millions d'exemplaires",
               
              ],
              [
                "year"=> 2018,
                "price"=> 16495,
                "nb_doors"=> 5,
                "name"=> "Porsche Cayenne",
                "type"=>"SUV",
                "description"=> "Le Porsche Cayenne est un SUV haut de gamme fabriqué par la firme allemande Porsche. Lancée en décembre 2002 (955 puis 957 - Type 9PA), elle est renouvelée en mai 2010 (958 Type 92A) avant l'arrivée de la troisième génération présentée en septembre 2017 (Type PO536) ainsi que sa version Coupé. En décembre 2020, le constructeur annonce la production du millionième exemplaire de la Porsche Cayenne",
               
              ],
              [
                "year"=> 2018,
                "price"=> 5495,
                "nb_doors"=> 5,
                "name"=> "Renault Clio",
                "type"=>"Citadine",
                "description"=> "La Renault Clio est une gamme d'automobile polyvalente du constructeur français Renault. Elle est lancée en 1990 (Clio I) et remplace la Renault Supercinq, puis en 1998 (Clio II), en 2005 (Clio III), renouvelée en 2012 (Clio IV) et en 2019 (Clio V).",
               
              ],
              [
                "year"=> 2018,
                "price"=> 4685,
                "nb_doors"=> 5,
                "name"=> "SEAT Ibiza",
                "type"=>"Citadine",
                "description"=> "La Seat Ibiza est une citadine produite depuis 1984 par le constructeur automobile espagnol Seat, filiale du groupe allemand Volkswagen. La Seat Ibiza est un modèle très important pour la marque espagnole car elle représente près de 40 % de ses ventes annuelles.

                Au vu de son succès, une version tricorps est développée en 1994 sur base du modèle de série. Pour la différencier de sa petite sœur, elle est dotée du nom de Cordoba.
                
                Aujourd'hui, la petite citadine de Seat compte déjà 5 versions à son actif, dont chacune a fait l'objet de restylage.",
              ],
              [
                "year"=> 2017,
                "price"=> 19999,
                "nb_doors"=> 5,
                "name"=> "Audi A7",
                "type"=>"Berline",
                "description"=> "L'A7, dite A7 Sportback, est une berline haut de gamme produite par le constructeur automobile allemand Audi à partir de 2018. Elle remplace la première génération d'A7 Sportback produite de 2010 à 2017.",
               
              ],
              [
                "year"=> 2018,
                "price"=> 3490,
                "nb_doors"=> 5,
                "name"=> "BMW 5 Series",
                "type"=>"Break",
                "description"=> "La BMW Série 5 est une gamme de voitures berlines et breaks conçus par le constructeur allemand BMW. Cette série prend la succession en 1972 des 1500, 1800 et 2000 (E115).",
               
              ],
              [
                "year"=> 2018,
                "price"=> 12995,
                "nb_doors"=> 4,
                "name"=> "Toyota GT86",
                "type"=>"Sportive",
                "description"=> "La Toyota GT86 est un coupé sportif à propulsion et moteur atmosphérique, produit par le constructeur automobile japonais Toyota à partir de 2012, en collaboration avec Subaru, qui la commercialise sous le nom de Subaru BRZ. Il a également été vendu sur certains marchés sous le nom de Toyota 86, ou Scion FR-S.",
               
              ],
              [
                "year"=> 2018,
                "price"=> 29925,
                "nb_doors"=> 2,
                "type"=>"Sportive",
                "name"=> "Toyota Supra",
                "description"=> "La Toyota Supra (ou 'トヨタスープラ' en japonais) est une voiture de grand tourisme produite par le constructeur automobile japonais Toyota, de 1979 jusqu'en 2002, puis à partir de 2019. La voiture a connu quatre générations successives et une cinquième plus tardivement, communément appelées MK1, MK2, MK3, MK4 et MK5 (MK étant l'abréviation de mark).",
               
              ],
              ]);
              DB::table("Car")->insert($dataCar);
    }

    public function down(){

    }
};