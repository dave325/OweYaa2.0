<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels;
use Illuminate\Http\Request;
use \SplPriorityQueue;
use App\TableModels\Education;
use Illuminate\Support\Facades\DB;

class ProjectDashboardController extends Controller
{
	function editProjectDescription(Request $request) {
	
		if($this->isValid())
		{
            $description = $request->input('description');
            $id = $request->input('id');
            
            //            $credentials = $request->only('contact_info');
          //  TableModels\ContactInfo::where('username', '=', $credentials['contact_info']['username'])->update($credentials['contact_info']);

            $proj = TableModels\CompanyModels\CompanyProject\CompanyProjectJobInfo::where('projid',$id);

            $proj->projdescription=$description;

            $proj->save();
            
            // These actions should be successful, given that the user is a
            // valid user. So, we should expect to return a successful response.
            // The response code is 201.
            return response()->json(['success'=>true],201);
		}




		
		
	}

	private function isValid(){
        try {

            // If the user cannot be authenticated, then the user doesn't
            // exist. The response states that the user is not found.

            //app auth uses the header security token. 
            if (!$userCheck = app('auth')->authenticate()) {

                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            // If the Token expired, the response states that the token has
            // expired, and the exception status code is also returned.
            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            // If the Token is invalid, the response states that the token is
            // invalid, and the exception status code is also returned.
            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            // If the Token is absent, the response states that the token is
            // absent, and the exception status code is also returned.
            return response()->json(['token_absent'], $e->getStatusCode());

        }

        return true;
    }
	
}