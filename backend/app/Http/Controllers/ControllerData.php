<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Car;
use App\Models\Devis;
use App\Models\Pictures;
use App\Models\User;

class ControllerData extends Controller
{
    public function data()
    {
        return response()->json(['dataCar' => getdata()]);
    }

    public function devis(Request $request)
    {
        $id = $request->id;
        $id = DB::table("Users")->where("id", $id)->first();
        $data = DB::table("Devis")->where('idUtilisateur', $id->id)->get();
        return response()->json(["Devis" => $data]);
    }

    public function postDevis(Request $request)
    {
        PostDevis($request);
    }

    public function alldevis()
    {
        return response()->json(["Devis" => getAllDevis(), 'User' => getAllUser()]);
    }

    public function allphotos()
    {
        return response()->json(getdatapictures());
    }
}

function getdata()
{
    return Car::all()->keyBy('id');
}

function getdatapictures()
{
    return Pictures::all()->keyBy("idCar");
}

function PostDevis(Request $request)
{
    $id = DB::table("Users")->where("id", $request->input("id"))->first();
    DB::table("Devis")->insert(["idUtilisateur" => $id->id, "data" => $request->input("JSONDevis")]);
}

function getAllDevis()
{
    return Devis::all()->keyBy('id');
}

function getAllUser()
{
    return User::all()->keyBy("id");
}
