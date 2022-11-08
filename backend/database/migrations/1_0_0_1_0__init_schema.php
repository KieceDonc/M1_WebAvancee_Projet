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
      $table->primary('id');
      $table->string('first_name');
      $table->string('last_name');
      $table->string('email');
      $table->date('account_creation');
      $table->date("account_modified");
  });

    Schema::create('Car',function(Blueprint $table) {
      $table->primary('id');
      $table->string('name');
      $table->float("price");
      $table->enum('Sportive','SUV','Coupe');
      $table->integer('nb_doors');
      $table->integer('year');
      $table->string('description');
    }); 

    Schema::create('Panier',function(Blueprint $table){
      $table->primary('id');
      $table->integer('idUtilisateur')->references("id")->on("Users");
      $table->json("data");
    })
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::drop("Users");
    Schema::drop('Car');
    Schema::drop("Panier");
  }
};
