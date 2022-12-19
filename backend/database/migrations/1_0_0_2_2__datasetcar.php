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
            [
              "year"=> 2017,
              "price"=> 19150,
              "nb_doors"=> 5,
              "name"=> "Citroen C4 Cactus",
              "description"=> "La C4 Cactus est une berline compacte, initialement typée crossover, du constructeur automobile français Citroën, présentée le 5 février 20141, date anniversaire d'André Citroën, avant une commercialisation en juin 2014.

              Le 26 octobre 2017, Citroën présente le restylage de la C4 Cactus qui perd son look de crossover pour devenir une berline légèrement typée offroad.
              
              Par la même occasion et à partir du début 2018, elle remplace la C4 II2,3 (dont la production a cessé en 2018 sans remplaçante directe), malgré ses dimensions inférieures (4,17 mètres X 1,73 mètre au lieu de 4,33 mètres X 1,78 mètre) et sa plateforme PF1 destinée aux segment B du groupe PSA.",
              "type"=> "Familiale"
            ],
            [
              "year"=> 2018,
              "price"=> 875,
              "nb_doors"=> 6,
              "name"=> "Fiat Ulysse",
              "description"=> "Les prédécesseurs sortis en 1994 étaient perçus comme manquant de personnalité et ressemblant à des utilitaires. Les deux groupes ont décidé d'y remédier. La ligne des quatre monospaces présentés au Salon de l'automobile de Genève 2002 est désormais moins cubique. En outre, chacun affirme une identité différente2, chaque marque ayant pu dessiner les faces avant et arrière de son modèle2.

              Les quatre intérieurs sont identiques et la qualité est en nette hausse. Seules les selleries et équipements diffèrent. Les quatre monospaces sont vastes et modulables, comme le prouvent les sièges qui peuvent se démonter et se mettre en plusieurs positions. La planche de bord est quasiment identique sur les quatre versions. Celles des Fiat Ulysse et Lancia Phedra sont respectivement recouvertes, sur certaines parties, de tissu et d'alcantara. Les selleries sont différentes. L'instrumentation est centrale. Les trois cadrans circulaires de couleur vert jade sont remplacés par un bloc compteur en cochant l'option GPS. La qualité des matériaux est en progression. La console centrale en surplomb du plancher accueille toujours le levier de vitesses et les commandes de climatisation. Le volume du coffre est de 324 litres en configuration 7 ou 8 places.",
              "type"=> "Familiale"
            ],
            [
              "year"=> 2017,
              "price"=> 19990,
              "nb_doors"=> 5,
              "name"=> "Nissan President",
              "description"=> "La Nissan President ( japonais :日 産 ・ プ レ ジ デ ン ト, Nissan Purejidento ) est une berline de luxe japonaise fabriquée et commercialisée par Nissan de 1965 à 2010 en tant que berline de luxe JDM , le fleuron de la gamme Nissan, commercialisée dans ses concessionnaires Nissan Motor Store .

              Initialement commercialisé dans le JDM, à la fin des années 1980, les exportations ont commencé vers quelques pays, dont Singapour et Hong Kong, bien que les ventes aient été limitées. Lorsque le président a été introduit en 1965, il était commercialisé sous le badge 'Nissan', contrairement aux autres produits Nissan de l'époque, qui étaient commercialisés sous la marque Datsun.",
              "type"=> "Berline"
            ],
            [
              "year"=> 2018,
              "price"=> 5998,
              "nb_doors"=> 5,
              "name"=> "Peugeot 3008",
              "description"=> "La 3008 II est un SUV compact du constructeur automobile français Peugeot produit depuis 2016. La 3008 II est assemblée en France dans l'usine PSA de Sochaux.

              Pour le marché chinois, elle apparaît dans une version agrandie dénommée Peugeot 4008 II, laissant la génération précédente de la 3008 y continuer sa carrière. La version sept places prend le nom de Peugeot 5008 II.
              
              Elle est élue voiture européenne de l'année 2017, trois ans après la Peugeot 308 IINote 1.",
              "type"=> "SUV"
            ],
            [
              "year"=> 2018,
              "price"=> 7000,
              "nb_doors"=> 5,
              "name"=> "Renault Zoe",
              "description"=> "La Renault Zoe est préfigurée par les concept cars Renault Zoé Concept présentés en 2009 au salon de Francfort4 puis au Mondial de l'automobile de Paris 2010 dans une version proche à 95 % du modèle final, et dans sa version définitive au salon international de l'automobile de Genève 2012. Sa commercialisation débute en France en mars 2013. Elle reprend le nom d'un concept-car Renault présenté en 2005.

              Elle utilise uniquement l’énergie électrique stockée dans ses batteries, sans l'aide d'un moteur thermique, contrairement aux voitures hybrides.
              
              Le nom commercial de la Zoe est officiellement ZOE, en lettres capitales, puisqu'il s'agit de l'appellation officiellement déposée par la marque en 19915. Dans les faits, Renault n'écrit pas systématiquement Zoe en lettres capitales dans ses différents supports de communication.",
              "type"=> "Electrique"
            ],
            [
              "year"=> 2018,
              "price"=> 4795,
              "nb_doors"=> 5,
              "name"=> "SEAT Leon",
              "description"=> "La León est une berline compacte produite par le constructeur automobile espagnol Seat à plus de 2,2 millions d'exemplaires depuis 1999 pour les trois premières générations, la quatrième étant lancée en 2020. La seconde génération a été commercialisée en 2005, et la troisième en 2012.",
              "type"=> "Berline"
            ],
            [
              "year"=> 2018,
              "price"=> 12295,
              "nb_doors"=> 5,
              "name"=> "SKODA Octavia",
              "description"=> "La Škoda Octavia est une gamme d'automobile familiale du constructeur tchèque Škoda existant en berline et break et produite à 6,5 millions d'exemplaires avant l'arrivée de la quatrième génération.

              La première Octavia a été fabriquée de 1959 à 1971. La marque a repris le nom en 1996 et créé une familiale sur la base de la plate-forme de la Volkswagen Golf. Depuis, quatre générations se succèdent : lancées en 1996 (Octavia I) puis en 2004 (Octavia II), en 2014 (Octavia III) puis en 2020 pour l'Octavia IV.",
              "type"=> "Familiale"
            ],
        ]);
        DB::table("Car")->insert($dataCar);
    }

    public function down()
    {
     
    }
};