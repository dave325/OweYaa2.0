<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
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
    public function checks(){
        $user = new MilitaryUser();
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
        $user->profile['name'] = $userCheck->name;
        $user->profile['email'] = $userCheck->email;
        $user->profile['mos'] = $userCheck->mos;
        $user->profile['location'] = $userCheck->location;
        $user->profile['branch'] = $userCheck->branch;
        $user->phone = $userCheck->phone;
        $user->career1 = $userCheck->career1;
        $user->career2 = $userCheck->career2;
        $user->prev1 = $userCheck->prev1;
        $user->prev2 = $userCheck->prev2;
        $user->bio = $userCheck->bio;
        $user->course = $user::find($userCheck->name)->course;
        $user->skill = $user::find($userCheck->name)->skill;
        $user->language = $user::find($userCheck->name)->language;
        $user->social = $user::find($userCheck->name)->social;
        $user->mentor = $user::find($userCheck->name)->mentor;
        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }
}
