<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Contracts\Auth;
class ValidateUser extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $type = $request->input('type');
        if($type = 0){
            Auth::shouldUse('veteran');
        }elseif($type = 1){
            Auth::shouldUse('copmany');
        }else{
            $apiCall = "";
        }
    }
    public function checks(){
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
    
            return response()->json(['token_expired'], $e->getStatusCode());
    
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
    
            return response()->json(['token_invalid'], $e->getStatusCode());
    
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
    
            return response()->json(['token_absent'], $e->getStatusCode());
    
        }
    
        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }
}
