<?php

namespace App\Http\Controllers;

use App\TableModels\CompanyModels as CModel;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class CompanyController extends Controller
{

    /**
     * isValid
     *
     * Check if the user is a valid user
     */

    private function isValid()
    {
        try {

            // If the user cannot be authenticated, then the user doesn't
            // exist. The response states that the user is not found.

            //app auth uses the header security token.
            if (AuthController::currUser() == null) {

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
    /********
     * updateProject
     * Used when submitting a project or updating a project
     */
    public function updateProject(Request $request)
    {
        // Create an array of all user information from form
        $credentials = $request->all();
        // Authenticate the user
        if ($user = $this->isValid()) {

            // Store the project id in both job info and project manager array
            $credentials['company_proj_manager_info']['projid'] = $credentials['projid'];
            $credentials['company_proj_job_info']['projid'] = $credentials['projid'];
            try {
                // Search for the job info in database
                // If not found then throw ModelNotFoundException
                $projectInfo = CModel\CompanyProject\CompanyProjectJobInfo::findOrFail($credentials['projid']);
                // If found store all values of job_info into database
                $projectInfo->fill($credentials['company_proj_job_info']);
                // Update the database
                $projectInfo->save();
            } catch (ModelNotFoundException $me) {
                // If model not found in database, then create one
                CModel\CompanyProject\CompanyProjectJobInfo::create($credentials['company_proj_job_info']);
            }
            try {
                // Search for the manager info in database
                // If not found then throw ModelNotFoundException
                $projectManager = CModel\CompanyProject\CompanyProjectManagerInfo::findOrFail($credentials['projid']);
                // If found store all values of manager_info into database
                $projectManager->fill($credentials['company_proj_manager_info']);
                // Update the database
                $projectManager->save();
            } catch (ModelNotFoundException $me) {
                // If model not found in database, then create one
                CModel\CompanyProject\CompanyProjectManagerInfo::create($credentials['company_proj_manager_info']);
            }
            // Prepare to push items onto the delete stack.
            $delete = array();

            // For each of the 'skill' credentials...
            foreach ($credentials['company_skills'] as $item) {

                // If the 'skill' needs to be deleted...
                if (isset($item['delete']) && $item['delete']) {

                    // Push a reference to the skillid, primary key, to the
                    // delete stack.
                    array_push($delete, $item['skillid']);

                } else {

                    // Otherwise, nothing will be deleted.
                    unset($item['delete']);

                    // Add the project id
                    $item['projid'] = $credentials['projid'];

                    try {

                        // Nothing is deleted. Unset the item from deletion.
                        unset($item['delete']);

                        // Add the project id
                        $item['projid'] = $credentials['projid'];

                        // Search for the 'skill' credentials by skillid, primary key.
                        $skill = CModel\CompanyProject\CompanyProjectSkill::findOrFail($item['skillid']);

                        // Fill in the information.
                        $skill->fill($item);

                        // Save and commit all changes to the skill variable.
                        $skill->save();

                        // If the skillid is not found...
                    } catch (ModelNotFoundException $me) {

                        // Create a new TableModels object for the skill info.
                        $skill = new CModel\CompanyProject\CompanyProjectSkill($item);

                        // Save and commit all changes to the skill variable.
                        $skill->save();

                    }
                }
            }
            return response()->json(true);
        } else {
            return response()->json(compact('user'));
        }
    }

    public function updateMilestone(Request $request)
    {
        $credentials = $request->all();
        if ($user = app('auth')->guard()->authenticate()) {
            try {
                $milestone = CModel\Milestone::findOrFail($credentials['milestone']);
                $milestone->fill($credentials);
                $milestone->save();
            } catch (ModelNotFoundException $me) {
                CModel\CompanyProject::create($credentials);
            }
            return response()->json(true);
        } else {
            return response()->json(compact('user'));
        }
    }

    /**
     * updateCompanySettings
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function addProj(Request $request)
    {
        // Create an array of all user information from form
        $credentials = $request->all();
        // Authenticate the user
        if ($user = $this->isValid()) {
            // Store the project id in both job info and project manager array
            $credentials['company_proj_manager_info']['projid'] = $credentials['projid'];
            $credentials['company_proj_job_info']['projid'] = $credentials['projid'];
            CModel\CompanyProject\CompanyProjectJobInfo::create($credentials['company_proj_job_info']);

            // If model not found in database, then create one
            CModel\CompanyProject\CompanyProjectManagerInfo::create($credentials['company_proj_manager_info']);

            // Prepare to push items onto the delete stack.
            $delete = array();

            // For each of the 'skill' credentials...
            foreach ($credentials['company_skills'] as $item) {

                // Add the project id
                $item['projid'] = $credentials['projid'];

                // Create a new TableModels object for the skill info.
                $skill = CModel\CompanyProject\CompanyProjectSkill::create($item);

            }
            return response()->json(true);
        } else {
            return response()->json(compact('user'));
        }
    }
    /**
     * updateCompanySettings
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateCompanySettings(Request $request)
    {

        // In order to update task info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if ($isValid = $this->isValid()) {

            // The only credentials necessary are contact info, and action task.
            $credentials = $request->only('company_info');

            // Search for contact info, and username that corresponds to the
            // Social TableModel.
            $companyInfo = CModel\CompanyInfo::findOrFail($credentials['company_info']['username']);

            // Fill in contact info.
            $companyInfo->fill($credentials['company_info']);

            // Save and commit changes to the contact variable.
            $companyInfo->save();

            // If able to update task, return a success response.
            return response()->json(['user' => $companyInfo, 'success' => true], 200);

        } else {

            // If not, return an 'error' response.
            return response()->json(['error' => true], 201);

        }
    }

    public function retrieveProj(Request $request)
    {
        // Retrieve Company projects where ismatched != true.
        $projects = array();
        $candidates = array();
        $compid = CModel\CompanyInfo::all();
        foreach ($compid as $cid) {
            $projId = CModel\CompanyProject\CompanyProjectJobInfo::where('username', '=', $cid['username'])->get();
            foreach ($projId as $id) {
                $cList = CModel\CompanyProject\InternHours::where('projid', '=', $id['projid'])->get()->toArray();
                //could be that there are no interns yet
                
                if (isset($cList)) {
                    unset($candidates);
                    $candidates = array();
                    foreach ($cList as $candidate) {
                        $candidateUName = $candidate['username'];
                        $contactInfo = \App\TableModels\ContactInfo::where('username', '=', $candidateUName)->first();
                        $firstName = $contactInfo->firstname;
                        $lastName = $contactInfo->lastname;
                        $email = $contactInfo->email;
                        $username = $contactInfo->username;
                        $hours = $candidate['hours'];
                        $checkin = $candidate['checkin'];
                        $matchid = $candidate['matchid'];
                        $contactAddenium = array('username' => $username, 'email' => $email, 'firstName' => $firstName, 'lastName' => $lastName, 'hours' => $hours, 'checkin' => $checkin, 'matchid' => $matchid);
                        array_push($candidates, $contactAddenium);
                    }
                }
                $project = collect(
                    [
                        'jobInfo' => $id,
                        'managerInfo' => CModel\CompanyProject\CompanyProjectManagerInfo::where('projid', '=', $id['projid'])->first(),
                        'skills' => CModel\CompanyProject\CompanyProjectSkill::where('projid', '=', $id['projid'])->get(),
                        'milestones' => CModel\CompanyProject\Milestone::where('projid', '=', $id['projid'])->get(),
                        'candidates' => $candidates,
                    ]
                )->toArray();
                array_push($projects, $project);
            }
        }
        return response()->json($projects,200);
    }
    /**
     * retrieveProj
     * @params Request $request
     * retrieves all the projects from the database that are not matched
     */
    public function retrieveFavUsers(Request $request)
    {
        $userInfo = $request->all();
        // In order to retrieve project info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if ($isValid = $this->isValid()) {
            $internInfo = collect();
            // Retrieve Company projects where ismatched != true.
            $projects = \App\TableModels\CompanyModels\CompanyFavorite::where('username', '=', $userInfo['company_info']['username'])->get();
            foreach ($projects as $proj) {
                $temp = User::with('contactInfo', 'skill', 'education', 'availability', 'monthAvailability')->where('username', '=', $proj['internid'])->first();
                $temp1 = collect(
                    ['user' => $temp, 'favid' => $proj['favid']]
                );
                $internInfo->push($temp1);
            }
            // If successful, return a success response.
            return response()->json(['projects' => $internInfo, 'success' => true], 200);

        } else {

            // Otherwise, if there was an error, return an 'error' message.
            return $isValid;

        }
    }
    /**
     * retrieveProj
     * @params Request $request
     * retrieves all the projects from the database that are not matched
     */
    public function addFavUser(Request $request)
    {
        $userInfo = $request->all();
        // In order to retrieve project info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if ($isValid = $this->isValid()) {
            \App\TableModels\CompanyModels\CompanyFavorite::create($userInfo);
            // If successful, return a success response.
            return response()->json(['success' => true], 200);

        } else {

            // Otherwise, if there was an error, return an 'error' message.
            return $isValid;

        }
    }

    /**
     * retrieveProj
     * @params Request $request
     * retrieves all the projects from the database that are not matched
     */
    public function removeFavUser(Request $request)
    {
        $userInfo = $request->all();
        // In order to retrieve project info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if ($isValid = $this->isValid()) {
            \App\TableModels\CompanyModels\CompanyFavorite::destroy($userInfo['favid']);
            // If successful, return a success response.
            return response()->json(['success' => true], 200);

        } else {

            // Otherwise, if there was an error, return an 'error' message.
            return $isValid;

        }
    }

    public function returnUser(Request $rq){
        $temp = User::with('contactInfo', 'skill', 'language', 'wantedSkills', 'availability', 'certifications', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals', 'events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username', '=', $rq->input['username'])->first();
        return response()->json(['user'=>$temp],200);
    }   

    public function returnAllUsers()
    {
        $user = User::with('contactInfo', 'skill', 'language', 'wantedSkills', 'availability', 'certifications', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals', 'events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('type', '=', 0)->get();
        return response()->json(compact('user'));
    }

    public function addInternToProject(Request $req)
    {
        $info = $req->all();
        
        // In order to retrieve project info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if ($isValid = $this->isValid()) {
            try{
                \App\TableModels\CompanyModels\CompanyProject\InternHours::create($info);
                $cList= \App\TableModels\CompanyModels\CompanyProject\InternHours::where('projid','=',$info['projid'])->where('username','=',$info['username'])->first();
                //could be that there are no interns yet
    
                if(isset($cList))
                {
                    $candidateUName = $info['username'];
                    $contactInfo = \App\TableModels\ContactInfo::where('username','=',$candidateUName)->first();
                    $contactInfo->inproj = true;
                    $contactInfo->save();
                    $firstName = $contactInfo->firstname;
                    $lastName = $contactInfo->lastname;
                    $email = $contactInfo->email;
                    $username = $contactInfo->username;

                    $hours = $cList['hours'];
                    $checkin = $cList['checkin'];
                    $matchid = $cList['matchid'];
                    $user = array('username' => $username,'email'=>$email,'firstName'=>$firstName,'lastName'=>$lastName, 'hours'=>$hours, 'checkin' =>$checkin,'matchid'=>$matchid);
                }
                return response()->json(['success'=> true,'user'=> $user], 200);
            }catch(ModelNotFoundException $me){
                return response()->json(['success'=> false], 500);
            }
            /*
            $internFavProj = App\TableModels\FavProject::findOrFail($info['username'])->get();
            foreach($proj as $internFavProj){
                if($info['projid'] === $proj['projid']){
                    try {
                        \App\TableModels\CompanyModels\CompanyProject\InternHours::create($info);
                        $contactInfo = \App\TableModels\ContactInfo::findOrFail($info['username']);
                        $contactInfo->ismatched = 1;
                        $contactInfo->save();
                        $firstName = $contactInfo->firstname;
                        $lastName = $contactInfo->lastname;
                        $email = $contactInfo->email;
                        $username = $contactInfo->username;
                        $hours = $info['hours'];
                        $user = array('username' => $username, 'email' => $email, 'firstName' => $firstName, 'lastName' => $lastName, 'hours' => $hours);
                    } catch (ModelNotFoundException $me) {
                        return response()->json(['error' => true], 500);
                    }
                    // If successful, return a success response.
                    return response()->json(['user' => $user], 200);
                }
            }
            */

        } else {

            // Otherwise, if there was an error, return an 'error' message.
            return $isValid;

        }
    }
}
