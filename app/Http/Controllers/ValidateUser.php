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
            $delete = array();
            $insert = array();
            foreach($credentials['bootcamp'] as $item){
                if($item['delete']){
                    array_push($delete,$item['bootcampid']);
                }else{
                    $insert= array(
                        'bootcampid' => $item['bootcampid'],
                        'bootcamp' => $item['bootcamp'],
                        'name' => $credentials['contact_info']['name']
                    );
                    try{
                        $bootcamp = TableModels\Bootcamp::findOrFail($item['bootcampid']);
                        $bootcamp->fill($insert);
                        $bootcamp->save();
                    }catch(ModelNotFoundException $me){
                        $bootcamp = new TableModels\Bootcamp($insert);
                        $bootcamp->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Bootcamp::destroy($delete);
            }
            unset($destroy, $insert);
            $delete = array();
            $insert = array();
            foreach($credentials['course'] as $item){
                if($item['delete']){
                    array_push($delete,$item['courseid']);
                }else{
                    $insert = array(
                        'courseid' => $item['courseid'],
                        'course' => $item['course'],
                        'name' => $credentials['contact_info']['name'],
                        'completed' => $item['completed']
                    );
                    try{
                        $course = TableModels\Course::findOrFail($item['courseid']);
                        $course->fill($insert);
                        $course->save();
                    }catch(ModelNotFoundException $me){
                        $course = new TableModels\Course($insert);
                        $course->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Course::destroy($delete);
            }
            unset($delete,$insert);
            $delete = array();
            $insert = array();
            foreach($credentials['certifications'] as $item){
                if($item['delete']){
                    array_push($delete,$item['certid']);
                }else{
                    $insert = array(
                        'certid' => $item['certid'],
                        'certification' => $item['certification'],
                        'name' => $credentials['contact_info']['name']
                    );
                    try{
                        $course = TableModels\Certification::findOrFail($item['certid']);
                        $course->fill($insert);
                        $course->save();
                    }catch(ModelNotFoundException $me){
                        $course = new TableModels\Certification($insert);
                        $course->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Course::destroy($delete);
            }
            unset($delete,$insert);
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
     * updateSkill
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateSkill(Request $request){
        if(app('auth')->guard($this->apiCall)->authenticate()){
            $credentials = $request->only('contact_info','skill','language','wanted_skills');
            foreach($credentials['skill'] as $item){
                try{
                    $skill = TableModels\Skill::findOrFail($item['skillid']);
                    $skill->fill($item);
                    $skill->name = $credentials['contact_info']['name'];
                    $skill->save();
                }catch(ModelNotFoundException $me){
                    $skill = new TableModels\Skill($item);
                    $skill->name = $credentials['contact_info']['name'];
                    $skill->save();
                }
            }
            foreach($credentials['wanted_skills'] as $item){
                try{
                    $skill = TableModels\WantedSkill::findOrFail($item['skillid']);
                    $skill->fill($item);
                    $skill->name = $credentials['contact_info']['name'];
                    $skill->save();
                }catch(ModelNotFoundException $me){
                    $skill = new TableModels\WantedSkill($item);
                    $skill->name = $credentials['contact_info']['name'];
                    $skill->save();
                }
            }
            foreach($credentials['language'] as $item){
                try{
                    $language = TableModels\Language::findOrFail($item['langid']);
                    $language->fill($item);
                    $language->name = $credentials['contact_info']['name'];
                    $language->save();
                }catch(ModelNotFoundException $me){
                    $language = new TableModels\Language($item);
                    $language->name = $credentials['contact_info']['name'];
                    $language->save();
                }
            }
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
}
