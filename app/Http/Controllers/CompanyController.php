<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels\CompanyModels as CModel;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;  
use Illuminate\Support\Facades\Hash;
class CompanyController extends Controller{

    /********
     * updateProject 
     * Used when submitting a project or updating a project
     */
    public function updateProject(Request $request){
        // Create an array of all user information from form
        $credentials = $request->all();
        // Authenticate the user
        if($user = app('auth')->guard()->authenticate()){
            // Store the project id in both job info and project manager array
            $credentials['company_proj_manager_info']['projid'] = $credentials['projid'];
            $credentials['company_proj_job_info']['projid'] = $credentials['projid'];
            try{
                // Search for the job info in database
                // If not found then throw ModelNotFoundException
                $projectInfo = CModel\CompanyProject\CompanyProjectJobInfo::findOrFail($credentials['projid']);
                // If found store all values of job_info into database
                $projectInfo->fill($credentials['company_proj_job_info']);
                // Update the database
                $projectInfo->save();
            }catch(ModelNotFoundException $me){
                // If model not found in database, then create one 
                CModel\CompanyProject\CompanyProjectJobInfo::create($credentials['company_proj_job_info']);
            }
            try{
                // Search for the manager info in database
                // If not found then throw ModelNotFoundException
                $projectManager = CModel\CompanyProject\CompanyProjectManagerInfo::findOrFail($credentials['projid']);
                // If found store all values of manager_info into database
                $projectManager->fill($credentials['company_proj_manager_info']);
                // Update the database
                $projectManager->save();
            }catch(ModelNotFoundException $me){
                // If model not found in database, then create one 
                CModel\CompanyProject\CompanyProjectManagerInfo::create($credentials['company_proj_manager_info']);
            }
            // Prepare to push items onto the delete stack.
            $delete = array();

            // For each of the 'skill' credentials...
            foreach($credentials['company_skills'] as $item){

                // If the 'skill' needs to be deleted...
                if(isset($item['delete']) && $item['delete']){

                    // Push a reference to the skillid, primary key, to the
                    // delete stack.
                    array_push($delete,$item['skillid']);

                }else{

                    // Otherwise, nothing will be deleted.
                    unset($item['delete']);

                    // Add the project id
                    $item['projid'] = $credentials['projid'];

                    try{

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
                    }catch(ModelNotFoundException $me){

                        // Create a new TableModels object for the skill info.
                        $skill = new CModel\CompanyProject\CompanyProjectSkill($item);

                        // Save and commit all changes to the skill variable.
                        $skill->save();

                    }
                }
            }
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }

    public function updateMilestone(Request $request){
        $credentials = $request->all();
        if($user = app('auth')->guard()->authenticate()){
            try{
                $milestone = CModel\Milestone::findOrFail($credentials['milestone']);
                $milestone->fill($credentials);
                $milestone->save();
            }catch(ModelNotFoundException $me){
                CModel\CompanyProject::create($credentials);
            }
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
}
