<?php

namespace App\Http\Controllers;
use App\TableModels\ContactInfo;
use App\TableModels\Education;
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
            ContactInfo::where('name', '=', $credentials['contact_info']['name'])->update($credentials['contact_info']);
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
    public function updateEducation(Request $request){
        if(app('auth')->guard($this->apiCall)->authenticate()){
            $credentials = $request->only('contact_info', 'education', 'bootcamp', 'courses','certifications', 'focusArea');
            return response()->json(compact('credentials'));
            Education::where('name', '=', $credentials['contact_info']['name'])->update($credentials['education']);
            foreach($credentials['bootcamp'] as $bootcamp){
                if($bootcamp['delete']){
                    TableModels\Bootcamp::where('name', '=', $credentials['contact_info']['name'])->where("bootcamp", "=" ,$bootcamp['bootcamp'])->delete();   
                }else{
                    TableModels\Bootcamp::where('name', '=', $credentials['contact_info']['name'])->where("bootcamp", "=" ,$bootcamp['bootcamp'])->update(['bootcamp' =>$bootcamp['updatedCamp']]);
                }
            }
            return response()->json(true);
        }else{
            return response()->json(compact('user'));
        }
    }
}
