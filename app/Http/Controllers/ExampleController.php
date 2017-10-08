<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Auth\Factory as Auth;
class ExampleController extends Controller
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
    public function loginTest(Request $request){
         // grab credentials from the request
         $credentials = $request->only('username', 'password');
         $user = new User();
         $user->name = $credentials['username'];
                 try {
                     // attempt to verify the credentials and create a token for the user
                     if (! $token = JWTAUTH::attempt($credentials)) {
                         return response()->json(['error' => 'invalid_credentials'], 401);
                     }
                 } catch (JWTException $e) {
                     // something went wrong whilst attempting to encode the token
                     return response()->json(['error' => 'could_not_create_token'], 500);
                 }
                 // all good so return the token
                 return response()->json(compact('token'));
                 
       // return response()->json("reached");
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
