<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;  
class AdminController extends Controller{

    public function login(Request $request){
        $credentials = $request->all();
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
        return response()->json(['token' => $token],200);
    }

    public function retrieveAllVet(){
        $vet = User::with('contactInfo')->where("type","=","0")->get();
        $vets = array();
        foreach($vet as $name){
            $user = User::with('contactInfo','skill' , 'language', 'wantedSkills', 'availability', 'certifications','mentor', 'course', 'social', 'education', 'careerSearch', 'goals','events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username','=',$name['username'])->first();
            array_push($vets,$user);
        }
        return response()->json(['users' => $vets],200);
    }

    public function retrieveVet(Request $rq){
        $username = $rq->only('username');
        try{
            $user = User::with('contactInfo','skill' , 'language', 'wantedSkills', 'availability', 'certifications','mentor', 'course', 'social', 'education', 'careerSearch', 'goals','events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username','=',$username)->first();
        }catch(ModelNotFoundException $me){
            return response()->json(['error' => "User not found"], 400);
        }
        return response()->json(['user' => $user], 200);
    }

    public function retrieveComp(){
        $username = User::with('company')->get();
        $companies = array();
        foreach($username as $name){
            $user = User::with('company','companyFavorite','companyProject','CompanySearch')->where('username','=',$name['username'])->first();
            array_push($companies, $user);
        }
        return response()->json(['user' => compact('companies')], 200);
    }
}
