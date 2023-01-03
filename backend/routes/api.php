<?php

use App\Http\Controllers\ControllerData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("register",[UserController::class,'register']);
Route::post("login",[UserController::class,"login"]);
Route::post("profile",[UserController::class,"changePassword"]);
Route::get("carModel",[ControllerData::class,"data"]); 
Route::post("Postdevis",[ControllerData::class,"postDevis"]);
Route::get("devis",[ControllerData::class,"devis"]);
Route::get("alldevis",[ControllerData::class,"alldevis"]);
Route::get("isAdmin",[UserController::class,"isAdmin"]);
Route::get("picturesCar",[ControllerData::class,"allphotos"]);