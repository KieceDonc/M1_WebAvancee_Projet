<?php 

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Models\data;

class ControllerData extends Controller 
{
    public function data()
    {
        return response()->json(['data'=> getdata()]);
    }
}

function getdata(){
    return data::all()->keyBy('code');
}
?>