<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');
        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = AuthController::login($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        // all good so return the token
        return response()->json(['token' => $token], 200);
    }
    private function isValid()
    {
        try {
            if (!$userCheck = app('auth')->authenticate()) {

                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent'], $e->getStatusCode());

        }

        return true;
    }
    public function retrieveAllVet()
    {
        if ($this->isValid()) {
            $vet = User::with('contactInfo')->where("type", "=", "0")->get();
            $vets = array();
            foreach ($vet as $name) {
                $user = User::with('contactInfo', 'skill', 'language', 'wantedSkills', 'availability', 'certifications', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals', 'events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username', '=', $name['username'])->first();
                array_push($vets, $user);
            }
            return response()->json(['users' => $vets], 200);
        }
    }

    public function retrieveVet(Request $rq)
    {
        $username = $rq->only('username');
        try {
            $user = User::findOrFail($username);
            $user = User::with('contactInfo', 'skill', 'language', 'wantedSkills', 'availability', 'certifications', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals', 'events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username', '=', $username)->first();
        } catch (ModelNotFoundException $me) {
            return response()->json(['error' => "User not found"], 404);
        }
        return response()->json(['user' => $user], 200);
    }

    public function retrieveComp()
    {
        $username = User::with('company')->get();
        $companies = array();
        foreach ($username as $name) {
            $user = User::with('company', 'companyFavorite', 'companyProject', 'CompanySearch')->where('username', '=', $name['username'])->first();
            array_push($companies, $user);
        }
        return response()->json(['user' => compact('companies')], 200);
    }
    public function activateComp(Request $rq){
        $username = $rq->only('username');
        App\TableModels\CompanyModels\CompanyInfo::where('username', '=',$username)->update(['initiated'=>1]);
        return response()->json(['success'=>true],200);
    }
}
