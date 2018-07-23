<?php

namespace App\Http\Controllers;

use App\MilitaryUser;
use App\TableModels;
use App\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
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
    }
    // Adds User
    public function addUser(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->all();
        $user = new User();
        $user->username = $credentials['username'];
        $user->email = $credentials['email'];
        $user->password = Hash::make($credentials['password']);
        $user->type = $credentials['type'];
        $user->admin = false;
        if ($user->save()) {
            if ($user->type == 0) {
                TableModels\ContactInfo::create(["firstname" => $credentials['firstname'], "lastname" => $credentials['lastname'], 'username' => $credentials['username'], 'email' => $credentials['email']]);
                for ($i = 0; $i < 2; $i++) {
                    TableModels\Interview::create(['interviewid' => $credentials['username'] . $i, 'username' => $credentials['username']]);
                    TableModels\Event::create(['eventid' => $credentials['username'] . $i, 'username' => $credentials['username']]);
                    TableModels\PreviousCareerField::create(['careerid' => $credentials['username'] . $i, 'username' => $credentials['username']]);
                    TableModels\CareerSearch::create(['careerid' => $credentials['username'] . $i, 'username' => $credentials['username']]);
                }
                TableModels\Social::create(['username' => $credentials['username']]);
                TableModels\Goal::create(['username' => $credentials['username']]);
                TableModels\Education::create(['username' => $credentials['username']]);
                $month= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
                for($i = 0; $i < 12; $i++){
                    TableModels\MonthAvailability::create(['username' => $credentials['username'], 'month' => $month[$i], 'isavailable' => 0, 'monthid' => $credentials['username'] . $i]);
                }
                TableModels\Mentor::create(['username' => $credentials['username']]);
            } else {
                TableModels\CompanyModels\CompanyProject\MembershipToken::create(['username' => $credentials['username'], 'totalhours'=>0,'currenthours'=>0]);
                TableModels\CompanyModels\CompanyInfo::create(["firstname" => $credentials['firstname'],"lastname" => $credentials['lastname'], 'username' => $credentials['username'], 'email' => $credentials['email'],'website'=>$credentials['website'], 'phone' => $credentials['phone'],'compName'=>$credentials['compName']]);
                Mail::send(['html'=> 'email.register'], ['email'=> $credentials['email'],'firstname' => $credentials['firstname'], 'lastname' =>$credentials['lastname']], function($message) use ($credentials){
                    $message->to($credentials['email'], $credentials['firstname'] . ' ' . $credentials['lastname'])->subject('Thank you for registering for OweYaa');
                    $message->from("barika@oweyaa.com", 'OweYaa');
                });
            }
            return response()->json(true);
        } else {
            return response()->json(['error' => 'User not Created'], 500);
        }
    }

    /**
     * Logs user into site and provides a token for them to access
     * @params Request $request
     * Checks what type of user the user is
     */

    public function loginUser(Request $req)
    {
        $request = $req->all();
        $loginInfo = array(
            "username" => $request['username'],
            "password" => $request['password'],
        );
        $currUser = AuthController::login($loginInfo);
        return response()->json($currUser['message'], $currUser['code']);
    }

    public function logoutUser(){
        return AuthController::logout();
    }

    public function getUser(Request $req)
    {
        // Create a variable to store data about the current user.
        $user = new User();
        $request = $req->all();
        $currUser = AuthController::currUser();
        // If the type of user specified doesn't exist, or if the user's type
        // doesn't match the type that the database listed for this user,
        // the response states that the user is not found. This is a 404 error.
        if (!array_key_exists('type', $request) || intval($request['type']) != $currUser['type']) {
            return response()->json(['user_not_found'], 400);
        }

        // If the type of user specified exists and is equal to 0, the user is
        // a Veteran user, and the attributes are filled in for this Veteran user.
        elseif (array_key_exists('type', $request) && $request['type'] == 0) {
            //$user= User::with(['milUser.skill','milUser.contactInfo'])->where('username','=',$userCheck->username)->get();
            $user = User::with('contactInfo', 'skill', 'language', 'wantedSkills', 'availability', 'monthAvailability', 'certifications', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals', 'events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username', '=', $currUser['username'])->first();
            $user['project'] = TableModels\CompanyModels\CompanyProject::where('internid', '=', $currUser['username'])->first();
            return response()->json(['user' => $user], 200);
        }

        // If the type of user specified exists and is equal to 1, the user is
        // a company, and the attributes are filled in for this company user.
        elseif (array_key_exists('type', $request) && intval($request['type']) == 1) {
            $user = User::with('companyInfo', 'companyFavorite', 'CompanySearch','cultureSet', 'membershipToken')->where('username', '=', $currUser['username'])->first();
            $user['company_project'] = User::companyProject($currUser['username']);
            return response()->json(['user' => $user], 200);
        }

        // If the type of user specified exists, is equal to 2, and the user has
        // administrator access, the user is an administrator.
        elseif (array_key_exists('type', $request) && intval($request['type']) == 2) {
            $user = [];
            $user["username"] = $currUser['username'];
            $user["type"] = $currUser['type'];
            $user['candidates'] = User::with('contactInfo', 'skill', 'language', 'wantedSkills', 'availability', 'monthAvailability', 'certifications', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals', 'events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('type', '=', 0)->get();
            foreach($user['candidates'] as $candidate){
                $candidate['project'] = $user['project'] = TableModels\CompanyModels\CompanyProject::where('internid', '=', $candidate['contact_info']['username'])->first();
            }
            $user['companies'] = User::with('companyInfo', 'companyFavorite', 'CompanySearch','cultureSet', 'membershipToken')->where('type', '=', 1)->get();
            foreach($user['companies'] as $company){
                $company['projects'] = $user['company_project'] = User::companyProject($company['username']);
            }
            return response()->json(['user' => $user], 200);
        }
        // Otherwise, the user doesn't exist. A user not found response will be
        // sent.
        else {
            return response()->json(['user_not_found1'], 400);
        }
    }

    public function forgotPassword(Request $rq){
        $user = $rq->only('username');
        $credentials = TableModels\ContactInfo::where("usrname",'=',$user)->first();
        Mail::send(['html'=> 'indexa'], ['email'=> $user], function($message) use ($user){
            $message->to($credentials['email'], $credentials['firstname'] . ' ' . $credentials['lastname'])->subject('Forgot Password');
            $message->from("barika@oweyaa.com", 'OweYaa');
        });
    }
}
