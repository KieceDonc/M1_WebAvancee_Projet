<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations
   * @return void
   */
  public function up() {
    Schema::create('Users', function (Blueprint $table) {
      $table->increments('id');
      $table->string('first_name');
      $table->string('last_name');
      $table->string('email');
      $table->string("password");
      $table->boolean("isAdmin");
      $table->date('account_creation')->nullable();
      $table->date("account_modified")->nullable();
    });

    Schema::create('Car',function(Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->float("price"); 
      $table->string("type")->nullable();
      $table->integer('nb_doors');
      $table->integer('year');
      $table->string('description',35000);
    }); 

    Schema::create('Devis',function(Blueprint $table){
      $table->increments('id');
      $table->integer("idUtilisateur");
      $table->foreign('idUtilisateur')->references("id")->on("Users");
      $table->json("data");
    });

    Schema::create("Car_Photos", function(Blueprint $table){
      $table->integer("idCar");
      $table->foreign('idCar')->references("id")->on('Car');
      $table->string("srcPicturesCar",10000);
    });
  }

  /**
   * Reverse the migrations.
  *
   * @return void
   */
  
  public function down() {
    Schema::drop("Users");
    Schema::drop('Car');
    Schema::drop("Devis");
    Schema::drop("Car_Photos");
  }
};
