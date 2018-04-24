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

    public function updateProject(Request $request){
        $credentials = $request->all();
        if($user = app('auth')->guard()->authenticate()){
            try{
                $projectInfo = CModel\CompanyProjectJobInfo::findOrFail($credentials['projid']);
                $projectSkill = CModel\CompanyProjectSkill::findOrFail($credentials['projid']);
                $projectInfo->fill($credentials['company_proj_job_info']);
                $projectInfo->save();
            }catch(ModelNotFoundException $me){
                CModel\CompanyProject::create($credentials);
            }
            try{
                $projectSkill = CModel\CompanyProjectManagerInfo::findOrFail($credentials['projid']);
                $projectManager->fill(fill($credentials['company_proj_manager_info']));
                $projectManager->save();
            }catch(ModelNotFoundException $me){
                CModel\CompanyProjectManagerInfo::create($credentials['company_proj_manager_info']);
            }
            // Prepare to push items onto the delete stack.
            $delete = array();

            // For each of the 'skill' credentials...
            foreach($credentials['skills'] as $item){

                // If the 'skill' needs to be deleted...
                if(isset($item['delete']) && $item['delete']){

                    // Push a reference to the skillid, primary key, to the
                    // delete stack.
                    array_push($delete,$item['skillid']);

                }else{

                    // Otherwise, nothing will be deleted.
                    unset($item['delete']);

                    // Add or modify contact info and username for the item.
                    $item['username'] = $credentials['username'];

                    try{

                        // Nothing is deleted. Unset the item from deletion.
                        unset($item['delete']);

                        // Add or modify contact info and username for the item.
                        $item['username'] = $credentials['username'];

                        // Search for the 'skill' credentials by skillid, primary key.
                        $skill = TableModels\CopmanyProjectSkill::findOrFail($item['skillid']);

                        // Fill in the information.
                        $skill->fill($item);

                        // Save and commit all changes to the skill variable.
                        $skill->save();

                     // If the skillid is not found...
                    }catch(ModelNotFoundException $me){

                        // Create a new TableModels object for the skill info.
                        $skill = new TableModels\CompanyProjectSkill($item);

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
