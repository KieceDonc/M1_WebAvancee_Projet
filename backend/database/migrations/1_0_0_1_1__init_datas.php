<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    /**
     * Run the migrations
     * @return void
     */
    public function up() {

      $dataUsers = ([
        [
            "id"=>Str::uuid(),
            'first_name'=>"Hugo",
            "last_name"=>"Admin",
            "email"=>"admin@admin.test",
            "isAdmin"=>true,
            "password"=>Hash::make("admin"),
            "account_creation"=>null,
            "account_modified"=>null,
        ],
        [
            "id"=>Str::uuid(),
            'first_name'=>"Hugo",
            "last_name"=>"Users",
            "email"=>"users@admin.test",
            "isAdmin"=>false,
            "password"=>Hash::make("users"),
            "account_creation"=>null,
            "account_modified"=>null,  
        ]
     ]);
        DB::table("Users")->insert($dataUsers);

     $dataCar = ([
        [
            "name"=>"Maruti 800 AC",
            "price"=>60000,
            "type"=>"Citadine",
            "nb_doors"=>5,
            "year"=>2007,
            "description"=>"Maruti 800 AC Uniq est le modèle haut de gamme de la gamme 800 et le prix du modèle haut de gamme 800 est de 2,19 ₹ Lakh.Il renvoie un kilométrage certifié de 14,22 kmpl. Cette variante AC Uniq est livrée avec un moteur produisant respectivement 37 @ 5000 et 59 @ 2500 de puissance maximale et de couple maximal. Maruti 800 AC Uniq est disponible en transmission manuelle et proposé en 2 couleurs : Wine Red et Pearl Silver."
        ],
        [
            "name"=>"Renault KWID RXT",
            "price"=>315000,
            "type"=>"SUV",
            "nb_doors"=>5,
            "year"=>2017,
            "description"=>"Renault Kwid RXT 1.0 est la variante essence de la gamme Renault Kwid et est au prix de ₹ 5,34 Lakh. Il renvoie un kilométrage certifié de 21,7 kmpl. Cette variante RXT 1.0 est livrée avec un moteur développant respectivement 67 ch à 5500 tr/min et 91 Nm à 4250 tr/min de puissance maximale et de couple maximal. Renault Kwid RXT 1.0 est disponible en boîte manuelle et proposé en 5 coloris : Zanskar Blue, Outback Bronze, Moonlight Silver, Fiery Red et Ice Cool White."
        ],
        [
            "name"=>"Ford Figo Diesel Titanium",
            "price"=>170000,
            "type"=>"Familiale",
            "nb_doors"=>5,
            "year"=>2010,
            "description"=>"description"
        ],
        [
            "name"=>"Audi Q8 Etron",
            "price"=>86700,
            "type"=>"SUV",
            "nb_doors"=>5,
            "year"=>2022,
            "description"=>"Avec la Nouvelle Audi Q8 e-tron, Audi présente sa vision de l’électromobilité. Modèle pionnier du 100% électrique Audi, la nouvelle version du SUV se dote d’une plus grande autonomie jusqu’à 532 km et d’une recharge encore plus rapide allant jusqu’à 170 kW. La Nouvelle Audi Q8 e-tron incarne l’évolution des modèles électriques e-tron, encore plus dynamiques avec un design marqué par une signature lumineuse unique, une allure plus athlétique que jamais et une toute nouvelle Calandre Singleframe rétro-éclairée équipée des anneaux noirs totalement réinventés."
        ],
    ]);

    DB::table('Car')->insert($dataCar);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
     
    }
};
