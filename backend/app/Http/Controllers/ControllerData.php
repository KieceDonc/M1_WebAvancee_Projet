<?php 

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Car;
use App\Models\Devis;

class ControllerData extends Controller 
{
    public function data()
    {
        return response()->json(['dataCar'=> getdata()]);
    }

    public function devis(Request $request)
    {
        $id = $request->id;
        return response()->json(getDevis($id));
    }

    public function postDevis(Request $request)
    {
        PostDevis($request);
    }

    public function alldevis()
    {
        return response()->json([getAllDevis()]);
    }
}

function getdata(){
    return Car::all()->keyBy('id');
}

function PostDevis(Request $request){
    $Devis = new Devis;
    $Devis->idUtilisateur=$request->input("id_utilsateur");
    $Devis->data=$request->input("data");
    DB::table("Devis")->insert(["idUtilisateur"=>$request->input("id_utilsateur"),"data"=>$request->input("data")]);
}

function getdevis(int $key){
    return DB::table("Devis")->where('idUtilisateur',$key);
}

function getAllDevis(){
    return Devis::all()->keyBy('id');
}