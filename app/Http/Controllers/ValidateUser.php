<?php

namespace App\Http\Controllers;
use App\TableModels;
use App\MilitaryUser;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;  
class ValidateUser extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        if($request->input('type') == 0){
            $this->apiCall = "veteran";
        }else{
            $this->apiCall = "company";
        }   
    }
    public function checks(){
        $user = new MilitaryUser();
        try {
            if (!$userCheck = app('auth')->guard($this->apiCall)->authenticate()) {

                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
    
            return response()->json(['token_expired'], $e->getStatusCode());
    
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
    
            return response()->json(['token_invalid'], $e->getStatusCode());
    
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
    
            return response()->json(['token_absent'], $e->getStatusCode());
    
        }
        $user = MilitaryUser::with('contactInfo','skill' , 'language', 'wantedSkills', 'availability', 'mentor', 'course', 'social', 'education', 'careerSearch', 'goals','events', 'bootcamp', 'actionTask', 'programmingSkills', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('name','=',$userCheck->name)->first();
       
        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }

    public function updateContact(Request $request){
        if(app('auth')->guard($this->apiCall)->authenticate()){
            $credentials = $request->only('contact_info');
            TableModels\ContactInfo::where('name', '=', $credentials['contact_info']['name'])->update($credentials['contact_info']);
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
    /**
     * updateEducation
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateEducation(Request $request){
        if(app('auth')->guard($this->apiCall)->authenticate()){

            $credentials = $request->only('contact_info', 'education', 'bootcamp', 'course','certifications', 'focusArea');
            TableModels\Education::where('name', '=', $credentials['contact_info']['name'])->update($credentials['education']);
            /*
            foreach($credentials['bootcamp'] as $bootcamp){
                if($bootcamp['delete']){
                    TableModels\Bootcamp::where('name', '=', $credentials['contact_info']['name'])->where("bootcamp", "=" ,$bootcamp['bootcamp'])->delete();   
                }else if ($bootcamp['update']){
                    TableModels\Bootcamp::where('name', '=', $credentials['contact_info']['name'])->where("bootcamp", "=" ,$bootcamp['bootcamp'])->updateOrCreate(['bootcamp' =>$bootcamp['updatedCamp']]);
                }
            }
            foreach($credentials['course'] as $course){
                if($course['delete']){
                    TableModels\Course::where('name', '=', $credentials['contact_info']['name'])->where("course", "=" ,$bootcamp['course'])->delete();   
                }else{
                    TableModels\Course::where('name', '=', $credentials['contact_info']['name'])->where("course", "=" ,$bootcamp['course'])->update(['course' =>$bootcamp['updatedCourse']]);
                }
            }*/
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
    
    /**
     * updateJournal
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateJournal(Request $request){
        if(app('auth')->guard($this->apiCall)->authenticate()){
            $credentials = $request->only('contact_info','interviews', 'events','mentor');
            foreach($credentials['interviews'] as $item){
                try{
                    $interview = TableModels\Interview::findOrFail($item['interviewid']);
                    $interview->fill($item);
                    $interview->save();
                }catch(\ModelNotFoundException $me){
                    $interview = new TableModels\Interview($item);
                    $interview->save();
                }
            }
            foreach($credentials['events'] as $item){
                try{
                    $event = TableModels\Event::findOrFail($item['eventid']);
                    $event->fill($item);
                    $event->save();
                }catch(\ModelNotFoundException $me){
                    $event = new TableModels\Event($item);
                    $event->save();
                }
            }
            try{
                $mentor = TableModels\Mentor::findOrFail($credentials['contact_info']['name']);
                $mentor->fill($credentials['mentor']);
                $mentor->save();
            }catch(\ModelNotFoundException $me){
                $mentor = new TableModels\Mentor($credentials['mentor']);
                $mentor->save();
            }
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }

    /**
     * updateCareer
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateCareer(Request $request){
        if(app('auth')->guard($this->apiCall)->authenticate()){
            $credentials = $request->only('contact_info','prev_career_fields');
            foreach($credentials['prev_career_fields'] as $field){
                    $career = TableModels\PreviousCareerField::find($field['careerid']);
                    $career->fill($field);
                    $career->save();
            }
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }

    /**
     * updateJournal
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateSkill(Request $request){
        if(app('auth')->guard($this->apiCall)->authenticate()){
            $credentials = $request->only('contact_info','skill','language','wanted_skill');
            foreach($credentials['skill'] as $item){
                try{
                    $skill = TableModels\Skill::findOrFail($item['skillid']);
                    $skill->fill($item);
                    $skill->save();
                }catch(ModelNotFoundException $me){
                    $skill = new TableModels\Skill($item);
                    $skill->save();
                }
            }
            foreach($credentials['wanted_skill'] as $item){
                try{
                    $skill = TableModels\WantedSkill::findOrFail($item['skillid']);
                    $skill->fill($item);
                    $skill->save();
                }catch(\ModelNotFoundException $me){
                    $skill = new TableModels\SKill($item);
                    $skill->save();
                }
            }
            foreach($credentials['language'] as $item){
                try{
                    $language = TableModels\Language::findOrFail($item['langid']);
                    $language->fill($item);
                    $language->save();
                }catch(\ModelNotFoundException $me){
                    $language = new TableModels\Language($item);
                    $language->save();
                }
            }
        }
    }
}
