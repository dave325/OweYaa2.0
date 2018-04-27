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
    //TODO IMMEDIATELY, UNAUTHENTICATED

    function getProjects(Request $request) {
       
        $id = $request->input('id');
        $info = Project\CompanyProjectJobInfo::where('projid','=',$id)->first();
        $managerInfo = Project\CompanyProjectManagerInfo::where('projid','=',$id)->first();
        $skills = Project\CompanyProjectSkill::where('projid','=',$id)->get()->toArray();
        $milestones = Project\Milestone::where('projid','=',$id)->get()->toArray();
        $candidatehours = Project\InternHours::where('username','=','davetest')->get();
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