<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels;
use App\DB;
use Illuminate\Http\Request;

class CompanyInternMatch extends Controller
{


    public function test()
    {
        $skills2 = array('css','javascript,html5,mysql');
        $wantedSkills = array('linux','c#');
        $users = $this->filter();


        $interns = array();
        foreach($users as $user)
        {
            $interns[$user->username]= $this->count($skills2,$wantedSkills) ;
        }

        return $interns; 
    }

    private function filter()
    {
        //make procedural database calls
        //with laravel's cusom call.
          return User::with('skill','contactInfo')->get();
       

    }

    private function count($skills,$wantedskills)
    {
       //procedural sequel call 
       return 10;
        
    }




}