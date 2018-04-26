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
        $filtered= $this->filter(true,5); 
        

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
       
    

    private function getDistance($lat,$long,$minDistance)
    {       
       
        return
        
        sqrt(pow($lat - $this->companyLocation[0],2) + pow($long - $this->companyLocation[1],2)) <= $minDistance;
        
    }

    
    private function filter($attendedCollFlag,$distance)
    {

     $ret = array();


     $circle_radius = 3959;
     $max_distance = $distance;
     $lat = $this->companyLocation[0];
     $lon = $this->companyLocation[1];

     $users=MilitaryUser::with('education','contactinfo','skill')->
     whereHas('education', function($query) use ($attendedCollFlag)
     {
         if(!$attendedCollFlag)
         {
             return;
         }
        $query->where('attendedcollege','=','$attendedCollFlag');
     })-> select(
        'SELECT * FROM
             (SELECT id, name, address, phone, latitude, longitude, (' . $circle_radius . ' * acos(cos(radians(' . $lat . ')) * cos(radians(latitude)) *
             cos(radians(longitude) - radians(' . $lng . ')) +
             sin(radians(' . $lat . ')) * sin(radians(latitude))))
             AS distance
             FROM candidates) AS distances
         WHERE distance < ' . $max_distance . '
         ORDER BY distance
         OFFSET 0
         LIMIT 20;
     ')->get();





    
     
     
     /*chunk(100,
     function ($milUsers) use (&$ret,$distance) 
     {
        foreach ($milUsers as $u) {
            $latlong = explode(" ",$u->contactinfo->location);
        
            if($this->getDistance($latlong[0],$latlong[1],$distance))
            {
                array_push($ret,$u);

            }  
        }
        
     });
     */
     
     return $ret;
        
    }

} 
