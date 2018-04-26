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
        
        $candidatehours = \App\TableModels\CompanyModels\CompanyProject\InternHours::where('projid','=',$id)->get();
        $usernames = $candidatehours->implode('username',', ');
        $username = explode(', ',$usernames);
        $candidatesInfo = User::with('contactInfo')->whereIn('username',$username)->get();
        $candidates = collect(
            [
                'internHours' => $candidatehours,
                'internInfo' =>$candidatesInfo
            ]
        )->toArray();
        $candidatesInfo = array();
        $i = 0;
        for ($i;i< count($candidates);$i++)
        {
            //var_dump($candidate['internInfo']['username']);
            $user = User::with('contactInfo')->where('username','=',$candidates[$i]['contact_info']['username'])->first();
            array_push($candidatesInfo,  
              [$user['contact_info']['firstname'] + $user['contact_info']['lastname'] ,$user['contact_info']['email'] ,$candidates[$i]['internHours']['hours']]
            );

        }
        return response()->json($candidatesInfo);
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