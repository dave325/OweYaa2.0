<?php

namespace App\Http\Controllers;
use App\TableModels\ContactInfo;
use App\MilitaryUser;
use App\Skill;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;;
class ValidateUser extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        if($request->input('type') == 0){
            $this->apiCall = "veteran";
        }else{
            $this->apiCall = "company";
        }   
    }

    private function checkUser(){
        try {
            if (! $userCheck = app('auth')->guard($this->apiCall)->authenticate()) {

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

    public function checks(){
        $user = new MilitaryUser();
       if($userInfo = $this->checkUser()){
        $user = MilitaryUser::with('contactInfo','skill' , 'language', 'wantedSkills', 'availability', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals','events', 'bootcamp', 'actionTask', 'programmingSkills', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('name','=',$userCheck->name)->first();
         // the token is valid and we have found the user via the sub claim
         return response()->json(compact('user'));
       }else{
        return response()->json(compact('userInfo'));
       }
    }

    public function updateContact(Request $request){
        $user;
        if($user = $this->checkUser()){
            $credentials = $request->only('contact_info');
            ContactInfo::where('name', '=', $credentials['contact_info']['name'])->update($credentials['contact_info']);
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
}
