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


    public function test(Request $request)
    {
     
        $this->pq = new SplPriorityQueue();
        
        $this->skillsList = array("php","nodejs","agile");
        $this->wantedSkills = array('linux','c#');


        $filtered= $this->filter(false,50000); 
        
       

        for($i = 0; $i < count($filtered);  $i++ )
        {

          $this->pq -> insert($filtered[$i]->username,$this->getSkillPoints($filtered[$i]->skill->pluck('skill')->toArray()));

        }

        var_dump($this->pq);
        
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
       
    

    private function getDistance($lat,$long,$minDistance)
    {
        $companyLocation = array(40,74);
       
        return
        
        sqrt(pow($lat - $companyLocation[0],2) + pow($long - $companyLocation[1],2)) <= $minDistance;
        
    }

    
    private function filter($attendedCollFlag,$distance)
    {
        //job wanted
        //age
        //mos branch

     $users=MilitaryUser::with('education','contactinfo','skill')->get();
     $ret = array();

     for($i = 0; $i < count($users);  $i++ )
     {
        $latlong = explode(" ",$users[$i]->contactinfo->location);

         if($attendedCollFlag)
         {
            if($users[$i]->education->attendedcollege && $this->getDistance($latlong[0],$latlong[1],$distance))
            {
                array_push($ret,$users[$i]);
            }
            else
             continue;
         }

         if(!$attendedCollFlag)
         {
            if($this->getDistance($latlong[0],$latlong[1],$distance))
            {
                array_push($ret,$users[$i]);
            }
         }
       
     }

     return $ret;
    
    }

} 
