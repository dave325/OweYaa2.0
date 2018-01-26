<?php

namespace App\Http\Controllers;
use App\TableModels;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;  
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
class ValidateUser extends Controller
{
    private $apiCall;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
    }
    public function checks(Request $request){
        $user = new User();
        try {
            if (!$userCheck = app('auth')->guard()->authenticate()) {

                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
    
            return response()->json(['token_expired'], $e->getStatusCode());
    
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
    
            return response()->json(['token_invalid'], $e->getStatusCode());
    
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
    
            return response()->json(['token_absent'], $e->getStatusCode());
    
        }
        if($request->input('type') != $userCheck->type){
            return response()->json(['user_not_found'], 404);
        }
        if($request->input('type') == 0){
            
            $user = User::with('milUser');
            //$user = User::with('contactInfo','skill' , 'language', 'wantedSkills', 'availability', 'certifications','mentor', 'course', 'social', 'education', 'careerSearch', 'goals','events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username','=',$userCheck->username)->first();
        }
        elseif($request->input('type') == 1){
            $user = User::with('company','companyFavorite','companyProject','CompanySearch')->where('username','=',$userCheck->username)->first();
            $user['stripe_key'] = env('publishable_api');
        }else{
            return response()->json(['user_not_found'], 404);
        }
        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }

    // look into sotirng files in the cloud
    public function uploadFiles(Request $request){
        $credentials = $request->only('username');
        //$pic = $request->file('file')->storeAs('resources/profile_pics', $credentials['username'] . 'doc');
        
        Storage::disk('s3')->putFileAs('/', $request->file('file'), $credentials['username'] . $request->photo->extension());
        $directories = Storage::disk('s3');
        return response()->json($directories);
    }

    public function updateContact(Request $request){
        if(app('auth')->guard()->authenticate()){
            $credentials = $request->only('contact_info');
            TableModels\ContactInfo::where('username', '=', $credentials['contact_info']['username'])->update($credentials['contact_info']);
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
        if(app('auth')->guard()->authenticate()){

            $credentials = $request->only('contact_info', 'education', 'bootcamp', 'course','certifications', 'focusArea');
            try{
                $education = TableModels\Education::findOrFail($credentials['contact_info']['username']);
                $education->fill($credentials['education']);
                $education->save();
            }catch(ModelNotFoundException $me){
                respone()->json("Not Found!");
            }
            TableModels\Education::where('username', '=', $credentials['contact_info']['username'])->update($credentials['education']);
            $delete = array();
            foreach($credentials['bootcamp'] as $item){
                if($item['delete']){
                    array_push($delete,$item['bootcampid']);
                }else{
                    unset($item['delete']);
                    $item['username'] = $credentials['contact_info']['username'];
                    try{
                        $bootcamp = TableModels\Bootcamp::findOrFail($item['bootcampid']);
                        $bootcamp->fill($item);
                        $bootcamp->save();
                    }catch(ModelNotFoundException $me){
                        $bootcamp = new TableModels\Bootcamp($item);
                        $bootcamp->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Bootcamp::destroy($delete);
                unset($delete);
                $delete = array();
            }
            foreach($credentials['course'] as $item){
                if($item['delete']){
                    array_push($delete,$item['courseid']);
                }else{
                    unset($item['delete']);
                    $item['username'] = $credentials['contact_info']['username'];
                    try{
                        $course = TableModels\Course::findOrFail($item['courseid']);
                        $course->fill($item);
                        $course->save();
                    }catch(ModelNotFoundException $me){
                        $course = new TableModels\Course($item);
                        $course->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Course::destroy($delete);
                unset($delete);
                $delete = array();
            }

            foreach($credentials['certifications'] as $item){
                if($item['delete']){
                    array_push($delete,$item['certid']);
                }else{
                    unset($item['delete']);
                    $item['username'] = $credentials['contact_info']['username'];
                    try{
                        $course = TableModels\Certification::findOrFail($item['certid']);
                        $course->fill($item);
                        $course->save();
                    }catch(ModelNotFoundException $me){
                        $course = new TableModels\Certification($item);
                        $course->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Course::destroy($delete);
                unset($delete);
                $delete = array();
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
    public function updateJournal(Request $request){
        if(app('auth')->guard()->authenticate()){
            $credentials = $request->only('contact_info','interviews', 'events','mentor');
            $delete = array();
            foreach($credentials['interviews'] as $item){
                if(isset($item['delete']) && $item['delete']){
                    array_push($delete,$item['interviewid']);
                }else{
                    unset($item['delete']);
                    $item['name'] = $credentials['contact_info']['name'];
                    try{
                        $interview = TableModels\Interview::findOrFail($item['interviewid']);
                        $interview->fill($item);
                        $interview->save();
                    }catch(ModelNotFoundException $me){
                        $interview = new TableModels\Interview($item);
                        $interview->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Interview::destroy($delete);
                unset($delete);
                $delete = array();
            }
            foreach($credentials['events'] as $item){
                if(isset($item['delete']) && $item['delete']){
                    array_push($delete,$item['interviewid']);
                }else{
                    unset($item['delete']);
                    $item['name'] = $credentials['contact_info']['name'];
                    try{
                        $event = TableModels\Event::findOrFail($item['eventid']);
                        $event->fill($item);
                        $event->save();
                    }catch(ModelNotFoundException $me){
                        $event = new TableModels\Event($item);
                        $event->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Event::destroy($delete);
                unset($delete);
                $delete = array();
            }
            try{
                $mentor = TableModels\Mentor::findOrFail($credentials['contact_info']['username']);
                $mentor->fill($credentials['mentor']);
                $mentor->save();
            }catch(ModelNotFoundException $me){
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
        if(app('auth')->guard()->authenticate()){
            $credentials = $request->only('contact_info','prev_career_fields');
            
            foreach($credentials['prev_career_fields'] as $field){
                try{
                    $career = TableModels\PreviousCareerField::findOrFail($field['careerid']);
                    $career->fill($field);
                    $career->save();
                }catch(ModelNotFoundException $me){
                    $career = new TableModels\PreviousCareerField($field);
                    $career->save();
                }
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
        if(app('auth')->guard()->authenticate()){
            $credentials = $request->only('contact_info','skill','language','wanted_skills');
            $delete = array();
            foreach($credentials['skill'] as $item){
                if(isset($item['delete']) && $item['delete']){
                    array_push($delete,$item['skillid']);
                }else{
                    unset($item['delete']);
                    $item['username'] = $credentials['contact_info']['username'];
                    try{
                        unset($item['delete']);
                        $item['name'] = $credentials['contact_info']['name'];
                        $skill = TableModels\Skill::findOrFail($item['skillid']);
                        $skill->fill($item);
                        $skill->save();
                    }catch(ModelNotFoundException $me){
                        $skill = new TableModels\Skill($item);
                        $skill->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Skill::destroy($delete);
                unset($delete);
                $delete = array();
            }
            foreach($credentials['wanted_skills'] as $item){
                if(isset($item['delete']) && $item['delete']){
                    array_push($delete,$item['sklilid']);
                }else{
                    unset($item['delete']);
                    $item['username'] = $credentials['contact_info']['username'];
                    try{
                        $skill = TableModels\WantedSkill::findOrFail($item['skillid']);
                        $skill->fill($item);
                        $skill->save();
                    }catch(ModelNotFoundException $me){
                        $skill = new TableModels\WantedSkill($item);
                        $skill->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\WantedSkill::destroy($delete);
                unset($delete);
                $delete = array();
            }
            foreach($credentials['language'] as $item){
                if(isset($item['delete']) && $item['delete']){
                    array_push($delete,$item['langid']);
                }else{
                    unset($item['delete']);
                    $item['username'] = $credentials['contact_info']['username'];
                    try{
                        $language = TableModels\Language::findOrFail($item['langid']);
                        $language->fill($item);
                        $language->save();
                    }catch(ModelNotFoundException $me){
                        $language = new TableModels\Language($item);
                        $language->save();
                    }
                }
            }
            if(isset($delete)){
                TableModels\Language::destroy($delete);
            }
            unset($delete);
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }

     /**
     * updateAvailability
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateAvailability(Request $request){
        if(app('auth')->guard()->authenticate()){
            $credentials = $request->only('contact_info','availability');
            foreach($credentials['availability'] as $item){
                $item['name'] = $credentials['contact_info']['name'];
                try{
                    $availability = TableModels\Availability::findOrFail($item['timeid']);
                    $availability->fill($item);
                    $availability->save();
                }catch(\ModelNotFoundException $me){
                    $availability = new TableModels\Availability($item);
                    $availability->save();
                }
            }
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }

    /**
     * updateAvailability
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateSocial(Request $request){
        if(app('auth')->guard()->authenticate()){
            $credentials = $request->only('contact_info','social');
            try{
                $contact = TableModels\ContactInfo::findOrFail($credentials['contact_info']['username']);
                $social = TableModels\Social::findOrFail($credentials['contact_info']['username']);
                $contact->fill($credentials['contact_info']);
                $social->fill($credentials['social']);
                $contact->save();
                $social->save();
            }catch(\ModelNotFoundException $me){
                return response()->json('Not Found!');
            }
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }

    /**
     * updateTask
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateTask(Request $request){
        if(app('auth')->guard()->authenticate()){
            $credentials = $request->only('contact_info','action_task');
            
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
}
