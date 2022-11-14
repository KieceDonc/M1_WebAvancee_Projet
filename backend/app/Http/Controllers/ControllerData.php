<?php 

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Models\Car;

class ControllerData extends Controller 
{
    public function data()
    {
        return response()->json(['dataCar'=> getdata()]);
    }
}

function getdata(){
    return Car::all()->keyBy('id');
}
?>