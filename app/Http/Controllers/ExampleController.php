<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }
    public function loginTest(Request $request){
         // grab credentials from the request
         $credentials = $request->only('username', 'password');
         $user = new User();
         $user->name = $credentials['username'];
                 try {
                     // attempt to verify the credentials and create a token for the user
                     if (! $token = $this->guard()->attempt($credentials)) {
                         return response()->json(['error' => 'invalid_credentials'], 401);
                     }
                 } catch (JWTException $e) {
                     // something went wrong whilst attempting to encode the token
                     return response()->json(['error' => 'could_not_create_token'], 500);
                 }
                 $user->token = JWTAuth::fromUser($user);
                 // all good so return the token
                 return response()->json(compact('user'));
                 
       // return response()->json("reached");
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
    // Adds User
    public function addUser(Request $request){
        // grab credentials from the request
        $credentials = $request->only('name', 'email', 'password', 'type');
        $user = new User();
        $user->name = $credentials['name'];
        $user->email = $credentials['email'];
        $user->password = Hash::make($credentials['password']);
        $user->type = $credentials['type'];
        if($user->save()){
            return response()->json($user);
        }else{
            return response()->json("error");
        }
    }
}
