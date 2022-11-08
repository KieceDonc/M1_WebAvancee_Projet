<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller 
{
    function register(Request $req)
    {
        $user = new User;
        $user->first_name=$req->input("first_name");
        $user->last_name=$req->input("last_name");
        $user->email=$req->input("email");
        DB::table("Users")->insert([
            "first_name"=>$req->input("first_name"),"last_name"=>$req->input("last_name"),"email"=>$req->input("email"),"password"=>Hash::make($req->input("password"))
        ]);
        return $user;
    }

    function login(Request $req)
    {
        $user=User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password))
        {
            return ["error"=>"Email or password incorrect"];
        }
        return $user;
    }
}
