<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
class ExampleController extends Controller
{
    private $apiCall;
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
    public function loginTest(Request $request){
         // grab credentials from the request
         $credentials = $request->only('username', 'password');
                 try {
                     // attempt to verify the credentials and create a token for the user
                     if (! $token = app('auth')->guard($this->apiCall)->attempt($credentials)) {
                         return response()->json(['error' => 'invalid_credentials'], 401);
                     }
                 } catch (JWTException $e) {
                     // something went wrong whilst attempting to encode the token
                     return response()->json(['error' => 'could_not_create_token'], 500);
                 }
                 // all good so return the token
                 return response()->json(compact('token'));
    }
    // Adds User
    public function addUser(Request $request){
        // grab credentials from the request
        $credentials = $request->only('name', 'email', 'password', 'type', 'username');
        // Creates user based on what type is submitted
        if($credentials['type'] == 0){
            $user = new MilitaryUser();
        }else{
            $user = new CompanyUser();
            $user->compid = Hash::make($credentials['email']);
        }
        $user->name = $credentials['name'];
        $user->username = $credentials['username'];
        $user->email = $credentials['email'];
        $user->password = Hash::make($credentials['password']);
        $user->type = $credentials['type'];
        if($user->save()){
            TableModels\ContactInfo::create(["name"=> $credentials['name'], ['username' =>$credentials['username']], ['email'=>$credentials['email']]]);
            for($i = 0; $i < 2; $i++){
                TableModels\Interview::create(['interviewid'=> $credentials['username'] . $i]);
                TableModels\Event::create(['eventid'=> $credentials['username'] . $i]);
                TableModels\PreviousCareerFields::create(['careerid'=> $credentials['username'] . $i]);
            }
            TableModels\Social::create(['username'=> $credentials['username']]);
            TableModels\Goal::create(['username'=> $credentials['username']]);
            TableModels\ActionTask::create(['username'=> $credentials['username']]);
            for($i = 0; $i < 7; $i++){
                TableModels\Availability::create(['timeid'=> $credentials['username'] . $i, 'start_time' => "00:00:00", 'end_time' => "00:00:00"]);
            }
            TableModels\Mentor::create(['username'=> $credentials['username']]);
            return response()->json("success");
        }else{
            return response()->json("error");
        }
    }
}
