<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserController extends Controller
{
    function register(Request $req)
    {
        $user = new User;
        $user->first_name = $req->input("first_name");
        $user->last_name = $req->input("last_name");
        $user->email = $req->input("email");
        $requestVerify = DB::table("Users")->get()->where('email', $req->input("email"));
        $id=Str::uuid();
        $user->id=$id;
        if ($requestVerify->isEmpty() == 1) {
            DB::table("Users")->insert(["id"=>$id,
                "first_name" => $req->input("first_name"), "last_name" => $req->input("last_name"), "email" => $req->input("email"), "password" => Hash::make($req->input("password")), "isAdmin" => false
            ]);
            return $user;
        } else {
            return ["error" => "Votre email n'est pas valide ou dejà utilisé"];
        }
    }

    function login(Request $req)
    {
        $user = DB::table("Users")->where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password, $user->password)) {
            return ["error" => "Email or password incorrect"];
        }
        $userReturn = new User;
        $userReturn->id = $user->id;
        $userReturn->first_name = $user->first_name;
        $userReturn->last_name = $user->last_name;
        $userReturn->email = $user->email;
        return $userReturn;
    }

    function changePassword(Request $req)
    {
        DB::table("Users")->where('id', $req->id)->update(['password' => Hash::make($req->input("password"))], ["account_modified" => date("d/m/Y H:i:s")]);
        return ["Success" => "Password changed"];
    }

    function isAdmin(Request $req)
    {
        $isAdmin = DB::table("Users")->where('id', $req->id)->first();
        return $isAdmin;
    }
}
