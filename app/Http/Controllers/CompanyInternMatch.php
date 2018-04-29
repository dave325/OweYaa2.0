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



class CompanyInternMatch extends Controller
{

    private $skillsList;
    private $wantedSkills;
    private $pq;
    private $companyLocation = array(40,74);


    public function test(Request $request)
    {
     
        $this->pq = new SplPriorityQueue();
        $this->skillsList = array("php","nodejs","agile");
        $this->wantedSkills = array('linux','c#');
        $filtered= $this->filter(true,5000); 
        

        for($i = 0; $i < count($filtered);  $i++ )
        {
          $this->pq -> insert($filtered[$i]->username,$this->getSkillPoints($filtered[$i]->skill->pluck('skill')->toArray()));
        }


        $ret = array();
        while(!$this->pq->isEmpty()){ 
            array_push($ret,$this->pq->extract());
        } 


        return json_encode($ret);
        
    }

    private function getSkillPoints($internSkills)
    {
        $points = 0;

        for($i = 0; $i < count($this->skillsList); $i++)
        {
            $hasSkill = array_search($this->skillsList[$i],$internSkills);
            if($hasSkill !== false)
            {
                switch($i)
                {
                    case 0: $points+= 4; break;
                    case 1: $points+= 3; break;
                    case 2: $points+= 2; break;
                    default: $points+=1; break;
                }
            }

        }

        return $points;
        
    }
    
    private function filter($attendedCollFlag,$maxDistance)
    {

     $compLatitude = $this->companyLocation[0];
     $compLongitude = $this->companyLocation[1];

     $users=MilitaryUser::with('education','contactinfo','skill')
       ->whereHas('contactinfo',
       function($query) use ($compLatitude,$compLongitude,$maxDistance)
       {
            $query->whereRaw("
            6371 * 2 * ASIN(SQRT(
            POWER(SIN(($compLatitude - abs(latitude)) * pi()/180 / 2),
            2) + COS($compLatitude * pi()/180 ) * COS(abs(latitude) *
            pi()/180) * POWER(SIN(($compLongitude - longitude) *
            pi()/180 / 2), 2) )) < $maxDistance * 1.60934
            ");
       })
       ->whereHas('education', function($query) use ($attendedCollFlag)
       {
         if(!$attendedCollFlag)
         {
             return;
         }
        $query->where('attendedcollege','=','$attendedCollFlag');
        
       })->get();


            /*
            var_dump(DB::select(DB::raw("
                SELECT d AS  6371 * 2 * ASIN(SQRT(
                    POWER(SIN(($compLatitude - abs(latitude)) * pi()/180 / 2),
                    2) + COS($compLatitude * pi()/180 ) * COS(abs(latitude) *
                    pi()/180) * POWER(SIN(($compLongitude - longitude) *
                    pi()/180 / 2), 2) )) FROM contactinfo 
            ")));
            */
        return $users;
    }
} 



 