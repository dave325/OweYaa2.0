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
    // Adds User
    public function addUser(Request $request){
        // grab credentials from the request
        $credentials = $request->only('email', 'password', 'type', 'username');
        // Creates user based on what type is submitted
        if($credentials['type'] == 0){
            $user = new User();
        }else{
            $user = new User();
            $user->compid = Hash::make($credentials['email']);
        }
        $user->username = $credentials['username'];
        $user->email = $credentials['email'];
        $user->password = Hash::make($credentials['password']);
        $user->type = $credentials['type'];
        if($user->save()){
            TableModels\ContactInfo::create(["name"=> $credentials['name'], 'username' =>$credentials['username'],'email'=>$credentials['email']]);
            for($i = 0; $i < 2; $i++){
                TableModels\Interview::create(['interviewid'=> $credentials['username'] . $i,'username' => $credentials['username']]);
                TableModels\Event::create(['eventid'=> $credentials['username'] . $i,'username' =>$credentials['username']]);
                TableModels\PreviousCareerField::create(['careerid'=> $credentials['username'] . $i,'username' =>$credentials['username']]);
                TableModels\CareerSearch::create(['careerid'=> $credentials['username'] . $i,'username'=> $credentials['username']]);
            }
            TableModels\Social::create(['username'=> $credentials['username']]);
            TableModels\Goal::create(['username'=> $credentials['username']]);
            TableModels\ActionTask::create(['username'=> $credentials['username']]);
            TableModels\Education::create(['username'=> $credentials['username']]);
            $daysOfWeek = array("Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
            for($i = 0; $i < 7; $i++){
                TableModels\Availability::create(['timeid'=> $credentials['username'] . $i, 'start_time' => "00:00:00", 'end_time' => "00:00:00",'username' =>$credentials['username'], "dayofweek" => $daysOfWeek[$i]]);
            }
            TableModels\Mentor::create(['username'=> $credentials['username']]);
            return response()->json("success");
        }else{
            return response()->json("error");
        }
    }
}
