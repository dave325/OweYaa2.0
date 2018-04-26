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
        
        $candidatehours = \App\TableModels\CompanyModels\CompanyProject\InternHours::where('username','=','davetest')->get();
        $usernames = $candidatehours->implode('username',', ');
        $username = explode(', ',$usernames);
        $candidatesInfo = User::with('contactInfo')->whereIn('username',$username)->get();
        $candidatesInfo = collect();
        for ($i = 0;$i< count($candidates);$i++)
        {
            $tempCollection = collect();
            //var_dump($candidate['internInfo']['username']);
            $user = User::with('contactInfo')->where('username','=',$candidates['internInfo'][$i]['contact_info']['username'])->first()->toArray();
            $candidatesInfo->push(
                [
                'user' => $user,
                'hours' => $candidates['internHours'][$i]['hours'],
                'projid' => $candidates['internHours'][$i]['projid']
                ]
            );
            /*
            array_push($candidatesInfo,  
              [$user['internInfo'][$i]['contact_info']['firstname'] + $user['internInfo'][$i]['contact_info']['lastname'] ,$user['internInfo'][$i]['contact_info']['email'] ,$candidates['internHours'][$i]['hours']]
            );
            */
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