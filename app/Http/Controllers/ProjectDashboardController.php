<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels\CompanyModels\CompanyProject as Project;
use Illuminate\Http\Request;
use \SplPriorityQueue;
use App\TableModels\Education;
use Illuminate\Support\Facades\DB;

class ProjectDashboardController extends Controller
{
    //Mass update function, every modal calls this.
    function updateAll(Request $request) {
        $userInfo = $request->all();
        try{
            $info = TableModels\CompanyModels\CompanyProject\CompanyProjectJobInfo::where('projid','=',$id)->first();
            $manager = TableModels\CompanyModels\CompanyProject\CompanyProjectManagerInfo::where('projid','=',$id)->first();
        }catch(ModelNotFoundException $me){

        }
        
        $skills = TableModels\CompanyModels\CompanyProject\CompanyProjectSkill::where('projid','=',$id)->get()->toArray();

    
        $proj = \App\TableModels\CompanyModels\CompanyProject\CompanyProjectJobInfo::where('projid','=',$id)->first();
        $proj->projdescription=$description;
        $proj->title=$title;
        $proj->save();
        return response()->json(['success'=>true],201);
		
    }

    function getProjects(Request $request) {
       

        if($this->isValid())
        {


          //first get all the projects associated with the user
          $name = $request->input('username');
          $projectIDs = Project::where('username','=',$name)->pluck('projid')->toArray();
          
          $allProjectInfo = array();
          foreach($projectIDs as $id)
          {

            $candidates = Project\InternHours::where('projid','=',$id)->get()->toArray();
            
            foreach($candidates as &$candidate)
            {
                $candidateUName = $candidate['username'];
                $contactInfo = \App\TableModels\ContactInfo::where('username','=',$candidateUName)->first();
                $firstName = $contactInfo->firstname;
                $lastName = $contactInfo->lastname;
                $email = $contactInfo->email;
                $contactAddenium = array('email'=>$email,'firstName'=>$firstName,'lastName'=>$lastName);
                $candidate = array_merge($candidate,$contactAddenium);   
            }

            array_push($allProjectInfo,

             array(
              'id' => $id,
              'info' => Project\CompanyProjectJobInfo::where('projid','=',$id)->first(),
              'managerInfo'=>Project\CompanyProjectManagerInfo::where('projid','=',$id)->first(),
              'skills'=>Project\CompanyProjectSkill::where('projid','=',$id)->get()->toArray(),
              'milestones'=>Project\Milestone::where('projid','=',$id)->get()->toArray(),
              'candidates'=>$candidates
             
             )
                
          );
            
        
          }
          
          return json_encode($allProjectInfo);

        }
    
    
    
    /*    $info = Project\CompanyProjectJobInfo::where('projid','=',$id)->first();
        $managerInfo = Project\CompanyProjectManagerInfo::where('projid','=',$id)->first();
        $skills = Project\CompanyProjectSkill::where('projid','=',$id)->get()->toArray();
        $milestones = Project\Milestone::where('projid','=',$id)->get()->toArray();
        $candidatehours = Project\InternHours::where('username','=',$id)->get();
        $usernames = $candidatehours->implode('username',', ');
        $username = explode(', ',$usernames);
        $candidatesUser = User::with('contactInfo')->whereIn('username',$username)->get();
        $candidates = collect(
            [
            'internHours' => $candidatehours,
            'internInfo' => $candidatesUser
            ]
        )->toArray();
        $candidatesInfo = collect();
        $project = collect();
        for ($i = 0;$i< count($candidates) - 1;$i++)
        {
            $user = User::with('contactInfo')->where('username','=',$candidates['internInfo'][$i]['contact_info']['username'])->first();
            $tempCollection = collect(
                [
                'user' => $user,
                'hours' => $candidates['internHours'][$i]['hours'],
                'projid' => $candidates['internHours'][$i]['projid'],
                ]
            );
            $candidatesInfo->push($tempCollection);
        }
        $project->push(
            [
            "info"=>$info, 
            "managerInfo"=>$managerInfo, 
            "skills"=>$skills,
            "milestones" =>$milestones,
            "candidates"=>$candidatesInfo->toArray()
            ]
        )->toJson();
        return response()->json($project);	
        */	
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