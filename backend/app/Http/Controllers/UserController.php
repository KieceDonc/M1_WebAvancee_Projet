<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\isEmpty;

class UserController extends Controller
{
    function register(Request $req)
    {
        $user = new User;
        $user->first_name = $req->input("first_name");
        $user->last_name = $req->input("last_name");
        $user->email = $req->input("email");
        $requestVerify = DB::table("Users")->get()->where('email', $req->input("email"));
        if ($requestVerify->isEmpty() == 1) {
            DB::table("Users")->insert([
                "first_name" => $req->input("first_name"), "last_name" => $req->input("last_name"), "email" => $req->input("email"), "password" => Hash::make($req->input("password")), "isAdmin" => false
            ]);
            return $user;
        } else {
            return ["error" => "Votre email n'est pas valide ou dejà utilisé"];
        }
    }

    function login(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password, $user->password)) {
            return ["error" => "Email or password incorrect"];
        }
        $userReturn = new User;
        $userReturn->first_name = $user->first_name;
        $userReturn->last_name = $user->last_name;
        $userReturn->email = $user->email;
        return $userReturn;
    }

    function changePassword(Request $req)
    {
        DB::table("Users")->where('email', $req->email)->update(['password' => Hash::make($req->input("password"))], ["account_modified" => date("d/m/Y H:i:s")]);
        return ["Success" => "Password changed"];
    }

    function isAdmin(Request $req)
    {
        $isAdmin = DB::table("Users")->where('email', $req->email)->first();
        return $isAdmin->isAdmin;
    }
}
