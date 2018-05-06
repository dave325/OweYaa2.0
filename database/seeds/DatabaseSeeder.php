<?php

use Illuminate\Database\Seeder;
use App\MilitaryUser;
use App\ContectInfo;
use App\TableModels\Education;
use App\User;

use App\TableModels\Skill;
use App\TableModels\ContactInfo;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        $faker = Faker\Factory::create();

        $contacts = ContactInfo::all();
        foreach($contacts as $contact)
        {
           
            $contact->location = $faker->address;
              
          
            $contact->save();
           

        }
    

        /*
        $skills = ["css","javascript","php","c++","html","nodejs","react","angular","agile","graphic design","communications"];
        $indices = range(0, count($skills) - 1);
        
        for($i = 0; $i < 50; $i++)
        {
            $intern = User::create(array(
                'email'         => $faker->email,
                'username'       =>$faker->username,
                'password'        => "password",
                'admin'        => 0,
            ));

            shuffle($indices);

            for($j = 0; $j < 3; $j++)
            {
                

                $skill = Skill::create(array(
                    'username'=> $intern->username,
                    'skillid'=> $intern->username.$j,
                    'skill' => $skills[$indices[$j]],
                    'amount' => rand ( 1 , 5 )
                ));


            }
        
            $contactInfo = ContactInfo::create(array(
                'username' =>$intern->username,
                'firstname'=>$faker->firstName(),
                'lastname'=>$faker->lastName(),
                'latitude' =>$faker-> latitude(25,45),
                'longitude' =>$faker->longitude(-125,-70)
            ));

            $education = Education::create(array(
                'username' =>$intern->username,
                'degree'=>"Psychology",
                'attendedcollege'=>rand(0,1)
            ));
           
        }
        */

    
    }
}
