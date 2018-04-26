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
    //TODO IMMEDIATELY, UNAUTHENTICATED

    function getProjects(Request $request) {
       
        $id = $request->input('id');
        $info = \App\TableModels\CompanyModels\CompanyProject\CompanyProjectJobInfo::all()->toArray();
        $managerInfo = \App\TableModels\CompanyModels\CompanyProject\CompanyProjectManagerInfo::where('projid','=',$id)->get()->toArray();
        $skills = \App\TableModels\CompanyModels\CompanyProject\CompanyProjectSkill::where('projid','=',$id)->get()->toArray();
        
        $candidates = \App\TableModels\CompanyModels\CompanyProject\InternHours::where('projid','=',$id)->get();
        $candidatesInfo = array();

        foreach($candidates as $candidate)
        {
            var_dump($candidate->username());
            $user = MilitaryUser::where('username','=',$candidate->username)->first();
            
            array_push($candidatesInfo,  
              [$user->name,$user->email,$candidate->hours]
            );

        }
        

        $ret = array("info"=>$info, "managerInfo"=>$managerInfo, "skills"=>$skills,"candidates"=>$candidates);
        return json_encode($ret);
		
    }
 

	function editProjectDescription(Request $request) {
        $description = $request->input('description');
        $id = $request->input('id');
        $title = $request->input('title');

        $proj = TableModels\CompanyModels\CompanyProject\CompanyProjectJobInfo::where('projid','=',$id)->first();
        $proj->projdescription=$description;
        $proj->title=$title;
        $proj->save();
        return response()->json(['success'=>true],201);
		
	}

	
}