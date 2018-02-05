<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;  
class AdminController extends Controller{

    public function login(Request $request){
        $credentials = $request->input("username","password");
        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = app('auth')->guard()->attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        // all good so return the token
        return response()->json(compact('token'));
    }

    public function retrieveAllVet(){
        $vets = User::with('company','companyFavorite','companyProject','CompanySearch')->where("type","=","0")->get();
        return response()->json(compact('vets'));
    }

    public function retrieveVet(Request $rq){
        $username = $rq->only('username');
        try{
            $user = User::findOrFail($username);
        }catch(ModelNotFoundException $me){
            return response()->json(['error' => "User not found"], 400);
        }
        return response()->json(['user' => $user], 200);
    }

    public function retrieveComp(){
        $comps = User::where("type","=","1")->get();
        return response()->json(compact('comps'));
    }
}
