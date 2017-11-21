<?php

namespace App\Http\Controllers;
use App\TableModels;
use App\MilitaryUser;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;;
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
    public function updateEducation(Request $request){
        if(app('auth')->guard($this->apiCall)->authenticate()){

            $credentials = $request->only('contact_info', 'education', 'bootcamp', 'course','certifications', 'focusArea');
            // return response()->json(compact('credentials'));
            TableModels\Education::where('name', '=', $credentials['contact_info']['name'])->update($credentials['education']);
            
            foreach($credentials['bootcamp'] as $bootcamp){
                if($bootcamp['delete']){
                    TableModels\Bootcamp::where('name', '=', $credentials['contact_info']['name'])->where("bootcamp", "=" ,$bootcamp['bootcamp'])->delete();   
                }else if ($bootcamp['update']){
                    TableModels\Bootcamp::where('name', '=', $credentials['contact_info']['name'])->where("bootcamp", "=" ,$bootcamp['bootcamp'])->updateOrCreate(['bootcamp' =>$bootcamp['updatedCamp']]);
                }
            }
            /*
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
     * updateCareer
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateCareer(Request $request){
        $user = new MilitaryUser();
        $user->fill($request->all());
        if(app('auth')->guard($this->apiCall)->authenticate()){
            $credentials = $request->only('contact_info','prev_career_fields');
            $user->prevCareerFields()->saveMany([
                new TableModels\PreviousCareerField($credentials['prev_career_fields'][0]),
                new TableModels\PreviousCareerField($credentials['prev_career_fields'][1]),
            ]);
            //TableModels\PreviousCareerFields::where('name', '=', $credentials['contact_info']['name'])->save($credentials['contact_info']);
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
}
