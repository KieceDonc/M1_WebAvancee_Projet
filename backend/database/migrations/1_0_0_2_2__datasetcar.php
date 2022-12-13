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
              "price"=> 74995,
              "nb_doors"=> 4,
              "name"=> "Chevrolet Camaro",
              "type"=>"Sportive",
              "description"=> "La Chevrolet Camaro est une automobile de type pony car construite par General Motors en quatre générations de 1967 à 2002. La production a repris en 20091 pour une cinquième version, suivie en 2016 par une sixième. La Camaro fut construite pour concurrencer la Ford Mustang.

              Lorsque Ford présente sa Mustang en avril 1964, l'état major de GM ne se montre pas vraiment impressionné, persuadé qu'il n'existe pas de marché pour ce type de véhicule et qu'avec son « petit » coupé le rival de toujours foncerait vers de sinistres destinées. Leurs espoirs seront de courte durée ; quatre mois seulement après son lancement, 100 000 Mustang sont sorties des chaînes de fabrication. L'ambiance au directoire de General Motors se dégradera considérablement. Il leur faut faire mieux, et vite, pour retrouver leur première place sur le marché national. Dans l'urgence, Chevrolet crée le projet XP836 surnommé « Panther ». Ses lignes très pures, exemptes de toute fioriture, combinent harmonieusement volumes et rondeurs avec des éléments plus anguleux.
              
              À sa sortie, Chevrolet précise que le nom du nouveau modèle vient d'un mot français, « camaro », signifiant « camarade » en argot2 mais Ford rétorque ironiquement que c'est le nom d'un type de crevette (« Camarón » veut dire « crevette » en espagnol). Chevrolet dira alors sur le même ton qu'un Camaro était « un petit animal méchant mangeur de Mustang »3.",
             
            ],
            [
              "year"=> 2018,
              "price"=> 6795,
              "nb_doors"=> 5,
              "name"=> "Chrysler 300C",
              "type"=>"Luxe",
              "description"=> "La Chrysler 300 est une automobile produite par le constructeur automobile américain Chrysler, lancée en 2004 et complètement renouvelée en 2011. Sa première génération est appelée 300C, tandis que la deuxième génération est appelée Chrysler 300. En Europe, la seconde génération est commercialisée comme Lancia Thema sauf au Royaume-Uni et en Irlande où elle est vendue par Chrysler.",
             
            ],
            [
              "year"=> 2018,
              "price"=> 995,
              "nb_doors"=> 5,
              "name"=> "Citroen C3",
              "type"=>"Compacte",
              "description"=> "Citroën C3 est le nom donné depuis 2002 aux voitures polyvalentes développées par le constructeur automobile français Citroën. La première génération est dévoilée en 2002. Elle est déclinée en cabriolet C3 Pluriel. La deuxième génération de C3 est présentée en 2009 et se décline dans une version 3 portes appelée DS3. La troisième génération est présentée en 20161.

              La dénomination C3 est aussi utilisée pour désigner un minispace, le C3 Picasso présenté en 2008, ainsi que plusieurs crossovers, le C3 Aircross (qui dérive du C3 Picasso) présenté en 2010 pour le marché sud-américain, le C3-XR, présenté en 2014 et développé pour la Chine, le C3 Aircross présenté en 2017 et destiné prioritairement à l'Europe et enfin la C3L un dérivé tricorps du C3-XR",
             
            ],
            [
              "year"=> 2017,
              "price"=> 106750,
              "nb_doors"=> 2,
              "name"=> "Ferrari 599",
              "type"=>"Sportive",
              "description"=> "La Ferrari 599 GTB Fiorano est une voiture de sport produite par le constructeur italien Ferrari. Apparue en 2006, elle remplace les Ferrari 575M GTC et Ferrari 575M Maranello commercialisées en 2002, et succède, plus généralement, à la lignée des Ferrari 550 Maranello introduite en 1996.

              En 2012, la Ferrari 599 GTB Fiorano est remplacée par la Ferrari F12berlinetta.",
          
            ],
            [
              "year"=> 2018,
              "price"=> 999,
              "nb_doors"=> 6,
              "name"=> "Fiat Multipla",
              "type"=>"Monospace",
              "description"=> "Le Fiat Multipla est un monospace fabriqué par le constructeur italien Fiat de 1998 à 2010",
             
            ],
            [
              "year"=> 2018,
              "price"=> 4490,
              "nb_doors"=> 4,
              "name"=> "Fiat 500",
              "type"=>"Citadine",
              "description"=> "La Fiat 500 (ou Fiat 500 Électrique) est une petite citadine 100 % électrique du constructeur automobile italien Fiat commercialisée à partir de septembre 2020. Elle succède à la troisième génération de Fiat 500e lancée en 2012, dont la version thermique de 2007 reste toutefois au catalogue du constructeur avec 2 motorisations possibles, essence et hybride.",
             
            ],
            [
              "year"=> 2018,
              "price"=> 19695,
              "nb_doors"=> 5,
              "name"=> "Hummer H3",
              "type"=>"SUV",
              "description"=> "Le Hummer H3 est un SUV, conçu par la division Hummer du géant automobile américain General Motors.

              Doté d'un gabarit plus conventionnel que ses aînés, le H3 est présenté par son constructeur comme adapté à une utilisation dans la vie quotidienne. Son gabarit est en effet plus réduit que le H2. Avec sa célèbre calandre à 7 barres et ses grandes ressemblances physiques avec le H2, le H3 conserve toutefois le physique de la famille Hummer. Bien que fonctionnel et plutôt pratique, les critiques ont souvent fait remarquer une qualité de finition moyenne. Bien que ce ne soit pas un véhicule comparable au H1 dérivé du Humvee militaire, le H3 possède des qualités de véhicule tout-terrain plutôt supérieures à la moyenne.
              
              La motorisation du H3 est assurée par un 5 cylindres essence de 220 ch équipé d’une boîte automatique. Une version Diesel était à l'étude pour le marché européen lors de la disparition officielle de la marque Hummer en 2010 à la suite de la crise boursière de 2008 et de la faillite/nationalisation temporaire de GM.
              
              Le Hummer H3 a également été décliné en pick-up nommé Hummer H3-T.",
             
            ],
            [
              "year"=> 2018,
              "price"=> 500,
              "nb_doors"=> 5,
              "name"=> "Kia Picanto",
              "type"=>"Compacte",
              "description"=> "La première génération a été lancée en Europe en avril 20041, basée sur la plateforme raccourcie de la Daihatsu Cuore VI qui servit également pour la Hyundai Atos.

              La Picanto était le modèle le plus vendu de Kia en Europe de 2004 à 2006, représentant un tiers des ventes de la marque durant ces années.
              
              La Picanto disposait de deux moteurs essence à 4 cylindres d'une capacité 1.0 61 ch et 1.1 65 ch, rejoint par un moteur Diesel 1.1 CRDI à l'automne 200511",
             
            ],
            [
              "year"=> 2018,
              "price"=> 1995,
              "nb_doors"=> 4,
              "name"=> "Mazda RX-8",
              "type" => "Sportive",
              "description"=> "La RX-8 est une voiture de sport du constructeur automobile japonais Mazda. Elle marque le retour de cette architecture dans le monde de l'automobile de série après la disparition de la Mazda RX-7 et se distingue de la majorité des automobiles actuelles par son moteur à pistons rotatifs Renesis (une version avancée du moteur Wankel, du nom de l'ingénieur qui l'a conçu et breveté, Felix Wankel).",
             
            ],
            [
              "year"=> 2017,
              "price"=> 157786,
              "nb_doors"=> 2,
              "name"=> "Mercedes-Benz Amg Gt",
              "type"=>"Sportive",
              "description"=> "La Mercedes-AMG GT est une voiture sportive produite par le constructeur automobile allemand Mercedes-AMG de 2014 à 2021. Il s'agit de la seconde voiture de sport développée complètement en interne après la Mercedes-Benz SLS AMG.

              La Mercedes-AMG GT existe en coupé et roadster deux portes à deux places, équipée d'un moteur V8 Bi-turbo de 4,0 litres dont la puissance évolue selon les versions.
              
              Ce modèle n'est plus produit à partir de décembre 20212.",
             
            ],
        ]);
        DB::table("Car")->insert($dataCar);
    }

    public function down()
    {
     
    }
};