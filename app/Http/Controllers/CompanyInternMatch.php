<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\TableModels\CompanyModels\CompanyProject as Project;
use \App\TableModels\CompanyModels\CompanyProject\CompanyProjectSkill as Skill;
use \SplPriorityQueue;

/*
TODO authenticate
 */

class CompanyInternMatch extends Controller
{

    private $skillsList;
    private $pq;
    private $companyLocation;

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
    public function match(Request $request)
    {
       // if ($isValid = $this->isValid()) {
           $temp = AuthController::currUser();
            //$user = User::with('membershipToken')->where("username", "=",$temp['username'])->first();
            //if($user['membership_token']['stripetoken'] === null){
                //return response()->json(['success' => false]);
            //}


            
            $this->pq = new SplPriorityQueue();

            // Use this to get project ids 
            // Then create another variable to look for project skills based on ids
            //$u = User::where('username','=','dave1')->first();
            //$compProjects = $u->companyProjectJobInfo;// $u->companyProjectJobInfo;
            //$su = User::with('companypr')
            //return response()->json($compProjects);
            //foreach($compProjects as $compProj){}
            $u = Project\CompanyProjectJobInfo::where('username','=','dave1')->first();
            foreach($u as $compProj){}
            
     
            
            /*
            $usr = User::where('username','=',$temp['username'])->get();
            $skills = $usr->companyProjectSkills;
            foreach($skills as $sk)
            {
               
                print($sk->skill);
            }



            */

            $this->skillsList = array("php", "nodejs", "agile");

            
            $this->skillsList = array();
            $infos = Project\CompanyProjectJobInfo::where('username','=','dave1')->get();
            foreach($infos as $info)
            {
                $id = $info->projid;
                $skills = Project\CompanyProjectSkill::where('projid','=',$id)->get()->toArray();
                $this->skillsList = array_merge($this->skillsList,$skills);
            }     
            
            
        
           
            return $filtered = $this->filter(true, 500, $request->all());


            for ($i = 0; $i < count($filtered); $i++) {
                $this->pq->insert($filtered[$i], $this->getSkillPoints($filtered[$i]->skill->pluck('skill')->toArray()));
            }

            $ret = array();
            while (!$this->pq->isEmpty()) {
                $user =$this->pq->extract();               
                array_push( $ret, $user );
            }

            return json_encode($ret);
       // }else{
         //   return response()->json(compact($ret));
        //}
    }

    private function getSkillPoints($internSkills)
    {
        $points = 0;

        for ($i = 0; $i < count($this->skillsList); $i++) {
            $hasSkill = array_search($this->skillsList[$i], $internSkills);
            if ($hasSkill !== false) {
                switch ($i) {
                    case 0:$points += 4;
                        break;
                    case 1:$points += 3;
                        break;
                    case 2:$points += 2;
                        break;
                    default:$points += 1;
                        break;
                }
            }

        }

        return $points;

    }

    private function filter( $attendedCollFlag, $maxDistance, $rq)
    {
        $location = $rq['company_info'];
        $compLatitude = $location['latitude'];
        $compLongitude = $location['longitude'];
        $users = NULL;
        if($compLatitude == NULL && $compLongitude ==NULL)
        {
            //$users = User::with('education', 'contactInfo', 'skill')->get();
            return "EBR";
        }
        else
        {
          $users = User::with('education', 'contactInfo', 'skill')

            ->whereHas('contactinfo',
                function ($query) use ($compLatitude, $compLongitude, $maxDistance) {
                    $query->whereRaw("
            6371 * 2 * ASIN(SQRT(
            POWER(SIN(($compLatitude - abs(latitude)) * pi()/180 / 2),
            2) + COS($compLatitude * pi()/180 ) * COS(abs(latitude) *
            pi()/180) * POWER(SIN(($compLongitude - longitude) *
            pi()/180 / 2), 2) )) < $maxDistance * 1.60934
            ");
                })

            ->whereHas('education',
                function ($query) use ($attendedCollFlag) {
                    if (!$attendedCollFlag) {
                        return;
                    }
                    $query->where('attendedcollege', '=', '$attendedCollFlag');

                })->get();
                
        }

        return $users;
        

        /*
        var_dump(DB::select(DB::raw("
        SELECT d AS  6371 * 2 * ASIN(SQRT(
        POWER(SIN(($compLatitude - abs(latitude)) * pi()/180 / 2),
        2) + COS($compLatitude * pi()/180 ) * COS(abs(latitude) *
        pi()/180) * POWER(SIN(($compLongitude - longitude) *
        pi()/180 / 2), 2) )) FROM contactinfo
        ")));
         */
    }
}
