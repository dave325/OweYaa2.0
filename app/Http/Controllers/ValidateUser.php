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
        array_push($user->profile,$userCheck->name);
        array_push($user->profile,$userCheck->mos);
        array_push($user->profile,$userCheck->location);
        array_push($user->profile,$userCheck->branch);
        array_push($user->profile,$userCheck->imgurl);
        array_push($user->profile,$userCheck->bio);
        $user->name = $userCheck->name;
        $user->email = $userCheck->email;
        $user->mos = $userCheck->mos;
        $user->location = $userCheck->location;
        $user->phone = $userCheck->phone;
        array_push($user->carrer,$userCheck->career1);
        array_push($user->carrer,$userCheck->career2);
        array_push($user->carrer,$userCheck->prev1);
        array_push($user->carrer,$userCheck->prev2);
        array_push($user->carrer,$userCheck->desired1);
        array_push($user->carrer,$userCheck->desired2);
        //$user->career1 = $userCheck->career1;
        //$user->career2 = $userCheck->career2;
        //$user->prev1 = $userCheck->prev1;
        //$user->prev2 = $userCheck->prev2;
        $user->bio = $userCheck->bio;
        $user->course = $user::find($user->name)->course;
        $user->skill = $user::find($user->name)->skill;
        $user->language = $user::find($user->name)->language;
        $user->social = $user::find($user->name)->social;
        $user->mentor = $user::find($user->name)->mentor;
        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }
}
