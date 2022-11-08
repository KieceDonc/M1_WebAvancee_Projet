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
        $user->first_name=$req->input("first_name");
        $user->last_name=$req->input("last_name");
        $user->email=$req->input("email");
        $requestVerify= DB::table("Users")->get()->where('email',$req->input("email"));
        if(filter_var($req->input("email"),FILTER_VALIDATE_EMAIL) && $requestVerify->isEmpty()){
            DB::table("Users")->insert([
                "first_name"=>$req->input("first_name"),"last_name"=>$req->input("last_name"),"email"=>$req->input("email"),"account_creation"=>date("d/m/Y H:i:s"),"password"=>Hash::make($req->input("password"))
            ]);
            return $user;
        }
        else 
        {
            return ["error"=>"Votre email n'est pas valide ou dejà utilisé"];
        }
       
        
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

    function changePassword(Request $req)
    {
        DB::table("users")->where('email',$req->email)->update(['password'=>Hash::make($req->input("password"))],["account_modified"=>date("d/m/Y H:i:s")]);
        return ["Success"=>"Password changed"];
    }
}
