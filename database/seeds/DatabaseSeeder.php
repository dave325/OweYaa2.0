<?php

use Illuminate\Database\Seeder;
use App\MilitaryUser;
use App\ContectInfo;
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
            $contact->longitude = $faker-> latitude(25,50);
            $contact->latitude = $faker-> longitude(120,70);
            $contact->save();
        }



        /*
        for($i = 0; $i < 300; $i++)
        {
            $intern = MilitaryUser::create(array(
                'name'         => $faker->username,
                'email'         => $faker->email,
                'username' => $faker->username,
                'password'         => "password",
            ));

            $skills = ["css","javascript","php","c++","html","nodejs","react","angular","agile"];
            
            for($j = 0; $j < 3; $j++)
            {
                $skill = Skill::create(array(
                    'username'         => $intern->username,
                    'skillid'           => $intern->username.$j,
                    'skill' => $skills[array_rand($skills,1)],
                    'amount' => rand ( 1 , 5 )
                ));

               

            }
           
            $contactInfo = ContactInfo::create(array(
                'username' => $intern->username,
                'location' => $faker-> latitude(25,50) ." ".$faker->longitude(120,70)
            ));
           
        }
        */
    
    }
}
