<?php

namespace App\Http\Controllers;

use App\MilitaryUser;
use App\TableModels;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

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
        $credentials = $request->only('name', 'email', 'password', 'type', 'username');
        $user = new User();
        $user->username = $credentials['username'];
        $user->email = $credentials['email'];
        $user->password = Hash::make($credentials['password']);
        $user->type = $credentials['type'];
        $user->admin = false;
        if ($user->save()) {
            if ($user->type == 0) {
                MilitaryUser::create(["name" => $credentials['name'], 'username' => $credentials['username'], 'email' => $credentials['email']]);
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
                $daysOfWeek = array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
                for ($i = 0; $i < 7; $i++) {
                    TableModels\Availability::create(['timeid' => $credentials['username'] . $i, 'start_time' => "00:00:00", 'end_time' => "00:00:00", 'username' => $credentials['username'], "dayofweek" => $daysOfWeek[$i]]);
                }
                TableModels\Mentor::create(['username' => $credentials['username']]);
            } else {
                TableModels\CompanyModels\CompanyProject\MembershipToken::create(['username' => $credentials['name']]);
                TableModels\CompanyModels\CompanyInfo::create(["name" => $credentials['name'], 'username' => $credentials['username'], 'email' => $credentials['email']]);
            }
            return response()->json(true);
        } else {
            return response()->json(['error' => 'User not Created'], 500);
        }
    }

    /**
     * checks
     * @params Request $request
     * Checks what type of user the user is
     */

    public static function checks($request)
    {

        // Create a variable to store data about the current user.
        $user = new User();
        try {
            $currUser = AuthController::me()->getData(true, 5);
            var_dump($currUser);
            return;
            return response()->json($currUser['original']);
            // If the type of user specified doesn't exist, or if the user's type
            // doesn't match the type that the database listed for this user,
            // the response states that the user is not found. This is a 404 error.
            if (!in_array('type', $request) || intval($request['type']) != $currUser['original']['type']) {
                return response()->json(['user_not_found2'], 404);
            }

            // If the type of user specified exists and is equal to 0, the user is
            // a Veteran user, and the attributes are filled in for this Veteran user.
            elseif (!in_array('type')  && intval($request->type) == 0) {
                //$user= User::with(['milUser.skill','milUser.contactInfo'])->where('username','=',$userCheck->username)->get();
                $user = User::with('contactInfo', 'skill', 'language', 'wantedSkills', 'availability', 'monthAvailability', 'certifications', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals', 'events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username', '=', $userCheck->username)->first();
                $user['project'] = TableModels\CompanyModels\CompanyProject::where('internid', '=', $currUser->original->username)->first();
                return response()->json(['user' => $user], 200);
            }

            // If the type of user specified exists and is equal to 1, the user is
            // a company, and the attributes are filled in for this company user.
            elseif (!in_array('type') && intval($request->type) == 1) {
                $user = User::with('companyInfo', 'companyFavorite', 'companyProject', 'CompanySearch', 'membershipToken')->where('username', '=', $currUser->original->username)->first();
                return response()->json(['user' => $user], 200);
            }

            // If the type of user specified exists, is equal to 2, and the user has
            // administrator access, the user is an administrator.
            elseif (!in_array('type') && intval($request->type) == 2) {
                $user = User::with('contactInfo')->first();
                return response()->json(['user' => $user], 200);
            }
            // Otherwise, the user doesn't exist. A user not found response will be
            // sent.
            else {
                return response()->json(['user_not_found1'], 404);
            }
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            // do something
        }
    }

}
