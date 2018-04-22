<?php

namespace App\Http\Controllers;
use App\TableModels;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

/**
 * The class that will validate all users. This class extends from the
 * Controller class.
 */

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

    /**
     * checks
     * @params Request $request
     * Checks what type of user the user is
     */

    public static function checks(Request $request){

        // Create a variable to store data about the current user.
        $user = new User();
        try {

            // If the user cannot be authenticated, then the user doesn't
            // exist. The response states that the user is not found.
            if (!$userCheck = app('auth')->authenticate()) {

                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            // If the Token expired, the response states that the token has
            // expired, and the exception status code is also returned.
            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            // If the Token is invalid, the response states that the token is
            // invalid, and the exception status code is also returned.
            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            // If the Token is absent, the response states that the token is
            // absent, and the exception status code is also returned.
            return response()->json(['token_absent'], $e->getStatusCode());

        }

        // If the type of user specified doesn't exist, or if the user's type
        // doesn't match the type that the database listed for this user,
        // the response states that the user is not found. This is a 404 error.
        if(!$request->has('type') || $request->input('type') != $userCheck->type){
            return response()->json(['user_not_found'], 404);
        }

        // If the type of user specified exists and is equal to 0, the user is
        // a Veteran user, and the attributes are filled in for this Veteran user.
        elseif($request->has('type') && $request->input('type') == 0){
            //$user= User::with(['milUser.skill','milUser.contactInfo'])->where('username','=',$userCheck->username)->get();
            $user = User::with('contactInfo','skill' , 'language', 'wantedSkills', 'availability', 'monthAvailability','certifications','mentor', 'course', 'social', 'education', 'careerSearch', 'goals','events', 'bootcamp', 'actionTask', 'prevCareerFields', 'careerGoals', 'hobbies', 'interviews')->where('username','=',$userCheck->username)->first();
            $user['project'] =TableModels\CompanyModels\CompanyProject::where('internid', '=',$userCheck->username)->first();
            return response()->json(['user' => $user], 200);
        }

        // If the type of user specified exists and is equal to 1, the user is
        // a company, and the attributes are filled in for this company user.
        elseif($request->has('type') && $request->input('type') == 1){
            $user = User::with('companyInfo','companyFavorite','companyProject','CompanySearch','membershipToken')->where('username','=',$userCheck->username)->first();
            return response()->json(['user' => $user], 200);
        }

        // If the type of user specified exists, is equal to 2, and the user has
        // administrator access, the user is an administrator.
        elseif($request->has('type') && $request->input('type') == 2 && $request->has('admin')){
            $user = User::with('info')->first();
            return response()->json(['user' => $user], 200);
        }

        // Otherwise, the user doesn't exist. A user not found response will be
        // sent.
        else{
            return response()->json(['user_not_found'], 404);
        }
    }

    /**
     * isValid
     *
     * Check if the user is a valid user
     */

    private function isValid(){
        try {

            // If the user cannot be authenticated, then the user doesn't
            // exist. The response states that the user is not found.
            if (!$userCheck = app('auth')->authenticate()) {

                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            // If the Token expired, the response states that the token has
            // expired, and the exception status code is also returned.
            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            // If the Token is invalid, the response states that the token is
            // invalid, and the exception status code is also returned.
            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            // If the Token is absent, the response states that the token is
            // absent, and the exception status code is also returned.
            return response()->json(['token_absent'], $e->getStatusCode());

        }

        return true;
    }
    // look into sorting files in the cloud
    public function uploadFiles(Request $request){

        // In order to upload files, make sure that the user is a valid user.
        // If the user is a valid user...
        if($this->isValid()){

            // The only credentials needed from the user is the username.
            $credentials = $request->only('username');

            // Prepare to store the uploaded files into the database.
            // The file is to be saved as '/' + the name of the file + the
            // user's username + the extension of the photo (for photos only).
            Storage::disk('s3')->putFileAs('/', $request->file('file'), $credentials['username'] . $request->photo->extension());

            // Store the Storage::disk('s3') data in a variable, $directories.
            $directories = Storage::disk('s3');

            // These actions should be successful, given that the user is a
            // valid user. So, we should expect to return a successful response.
            // The response code is 201.
            return response()->json(['success'=>true],201);
        }
    }

    /**
     * updateContact
     * @params Request $request
     * update/delete/add information into database based on user input
     */

    public function updateContact(Request $request){

        // In order to update contact info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){

            // The only credentials necessary here is the user's contact info,
            // since this function will update contact info for the user.
            $credentials = $request->only('contact_info');
            TableModels\ContactInfo::where('username', '=', $credentials['contact_info']['username'])->update($credentials['contact_info']);

            // These actions should be successful, given that the user is a
            // valid user. So, we should expect to return a successful response.
            // The response code is 201.
            return response()->json(['success'=>true],201);
        }
    }

    /**
     * updateEducation
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateEducation(Request $request){

        // In order to update education info for the user, make sure that the
        // user is a valid user. If the user is a valid user...
        if($this->isValid()){
            $credentials = $request->only('contact_info', 'education', 'bootcamp', 'course','certifications', 'focusArea');
            try{
                unset($credentials['education']['grad']);
              /* Look for username and find it in the table / database */
                $education = TableModels\Education::findOrFail($credentials['contact_info']['username']);

                /* Fill the info with the education credentials */
                $education->fill($credentials['education']);

                /* Save the education data to this variable */
                $education->save();
            }catch(ModelNotFoundException $me){
              // If the model is not found, the response will state that the
              // model was not found. The error code is 404.
                return response()->json(['error'=> "Not Found!"],404);
            }

            // Within the Education table, where the username matches a contact_info
            // and username pair, education credentials will be updated.
            TableModels\Education::where('username', '=', $credentials['contact_info']['username'])->update($credentials['education']);

            // An array will be placed into a variable called "delete", which
            // specifies that this data is to be removed from the database.
            $delete = array();

            // Each of the bootcamp credentials will be referenced as an "item".
            // Thus, for each "item", if that item needs to be deleted, that $item
            // will be pushed onto the "delete" stack. Each "item" is referenced
            // by it's "bootcampid", a primary key.
            foreach($credentials['bootcamp'] as $item){
                if(isset($item['delete']) && $item['delete']){
                    array_push($delete,$item['bootcampid']);
                }else{

                  // If the item is not going to be deleted, it is unset and will
                  // not be deleted.
                    unset($item['delete']);

                    // Match the item's username with the username from the list
                    // of credentials. Then, the contact_info will be saved for
                    // the item.
                    $item['username'] = $credentials['contact_info']['username'];

                    try{
                        // Search for the item with the corresponding "bootcampid".
                        $bootcamp = TableModels\Bootcamp::findOrFail($item['bootcampid']);

                        // Fill in the information for the item.
                        $bootcamp->fill($item);

                        // Save and commit all changes to "bootcamp".
                        $bootcamp->save();

                    }catch(ModelNotFoundException $me){

                        // If the item is not found, create a new TableModels
                        // object for the item.
                        $bootcamp = new TableModels\Bootcamp($item);

                        // Save and commit all changes to "bootcamp".
                        $bootcamp->save();
                    }
                }
            }

            // If there are items to be deleted...
            if(isset($delete)){

                // Delete everything in the delete variable.
                TableModels\Bootcamp::destroy($delete);

                // Remove all references from the delete variable.
                unset($delete);

                // Put a new array into the delete variable, to push items to
                // be deleted.
                $delete = array();
            }

            // Each of the "course" credentials will be referenced as an "item".
            // For each "item", or set of "course" credentials...
            foreach($credentials['course'] as $item){

                // If the "course" credentials need to be deleted...
                if(isset($item['delete']) && $item['delete']){

                    // Push the course to the delete stack. Courses are referenced
                    // by a "courseid", the primary key for courses.
                    array_push($delete,$item['courseid']);

                }else{

                    // Otherwise, the "course" credentials will not be deleted.
                    unset($item['delete']);

                    // Contact info will be saved for the item.
                    $item['username'] = $credentials['contact_info']['username'];

                    try{
                        // Search for a course by courseid.
                        $course = TableModels\Course::findOrFail($item['courseid']);

                        // Fill in the information for the course.
                        $course->fill($item);

                        // Save the commit all changes.
                        $course->save();

                     // If the course is not found...
                    }catch(ModelNotFoundException $me){

                        // Create a new TableModels object for the new course.
                        $course = new TableModels\Course($item);

                        // Save and commit all changes.
                        $course->save();

                    }
                }
            }

            // If there are items that need to be deleted...
            if(isset($item['delete']) && $item['delete']){

                // Delete all of the items in the "delete" stack, search and
                // delete them from the database.
                TableModels\Course::destroy($delete);

                // Remove the references in the delete stack.
                unset($delete);

                // The stack will contain a new array, ready to push new items
                // to be deleted.
                $delete = array();

            }

            // Each of the "certifications" credentials will be referenced as an "item".
            // For each "item", or set of "certifications" credentials...
            foreach($credentials['certifications'] as $item){

                // If the "certifications" credentials need to be deleted...
                if(isset($item['delete']) && $item['delete']){

                    // Place an id reference for that "item" into the delete stack.
                    // This way, the program will know to delete this "item" from
                    // the database.
                    array_push($delete,$item['certid']);

                }else{

                    // Otherwise, the "item" is not going to be deleted.
                    unset($item['delete']);

                    // Add or update the contact info that corresponds to the
                    // username.
                    $item['username'] = $credentials['contact_info']['username'];

                    try{

                        // Attempt to search for the certification credentials by
                        // the primary key, certid.
                        $course = TableModels\Certification::findOrFail($item['certid']);

                        // Fill in the information for "certification".
                        $course->fill($item);

                        // Save and commit all changes to the course variable.
                        $course->save();

                     // If the certification id is not found...
                    }catch(ModelNotFoundException $me){

                        // Create a new item with certification credentials.
                        $course = new TableModels\Certification($item);

                        // Save and commit all changes to the course variable.
                        $course->save();

                    }
                }
            }

            // If there are items that need to be deleted from the database...
            if(isset($item['delete']) && $item['delete']){

                // Search for them by their reference to certid and delete them
                // from the database.
                TableModels\Course::destroy($delete);

                // Remove the reference from the delete variable.
                unset($delete);

                // Prepare the array to push more items to be deleted onto the
                // delete stack.
                $delete = array();
            }

            // If everything was successful, return a message saying 'success'.
            // The success code is 201.
            return response()->json(['success'=>true],201);

        }else{

            // Otherwise, return a message saying "error". There was an error,
            // and something failed along the way. The error code is 400.
            return response()->json(['error'=> true],400);

        }
    }

    /**
     * updateJournal
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateJournal(Request $request){

        // In order to update journal info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){

            // The only credentials needed here are the information for contact
            // info, interviews, events, and mentor.
            $credentials = $request->only('contact_info','interviews', 'events','mentor');

            // Prepare an array for the delete stack.
            $delete = array();

            // For each of the set of credentials for "interviews"...
            foreach($credentials['interviews'] as $item){

                // If those credentials needs to be deleted...
                if(isset($item['delete']) && $item['delete']){

                    // Place a reference to the interviewid into the delete stack.
                    array_push($delete,$item['interviewid']);

                }else{

                    // Otherwise, the "interviews" credentials will not be deleted.
                    unset($item['delete']);

                    // Add or update the contact info for the name of the person.
                    $item['name'] = $credentials['contact_info']['name'];

                    try{

                        // Search for an interviewid, containing "interviews"
                        // credentials.
                        $interview = TableModels\Interview::findOrFail($item['interviewid']);

                        // Fill in the "interviews" credentials information.
                        $interview->fill($item);

                        // Save and commit all changes to the interview variable.
                        $interview->save();

                     // If the interviewid is not found...
                    }catch(ModelNotFoundException $me){

                        // Create a new TableModels object and add "interviews"
                        // credentials.
                        $interview = new TableModels\Interview($item);

                        // Save and commit all changes to the interview variable.
                        $interview->save();

                    }
                }
            }

            // If there is data that needs to be deleted from the database...
            if(isset($delete)){

                // Delete that data, using references to the primary key to find
                // the data in the database.
                TableModels\Interview::destroy($delete);

                // Remove all references from the "delete" stack.
                unset($delete);

                // Reset the stack.
                $delete = array();

            }

            // For each of the "events" credentials...
            foreach($credentials['events'] as $item){

                // If the "events" credentials need to be deleted...
                if(isset($item['delete']) && $item['delete']){

                    // Place a reference to the primary key, interviewid, to the
                    // delete stack.
                    array_push($delete,$item['interviewid']);

                }else{

                    // Otherwise, the "events" credentials will not be deleted.
                    unset($item['delete']);

                    // Add or update the contact info for the person.
                    $item['name'] = $credentials['contact_info']['name'];

                    try{

                        // Search for event information by eventid, primary key.
                        $event = TableModels\Event::findOrFail($item['eventid']);

                        // Fill in the "events" credentials information.
                        $event->fill($item);

                        // Save and commit all changes to the event variable.
                        $event->save();

                     // If the eventid is not found...
                    }catch(ModelNotFoundException $me){

                        // Create a new TableModels object for the "event"
                        // credentials information, and add the new information.
                        $event = new TableModels\Event($item);

                        // Save and commit all changes to the event variable.
                        $event->save();

                    }
                }
            }

            // If there are items that need to be deleted from the database...
            if(isset($delete)){

                // Search for those items by primary key, eventid, and delete
                // them from the database.
                TableModels\Event::destroy($delete);

                // Remove all references from the delete stack.
                unset($delete);

                // Reset the delete stack.
                $delete = array();

            }

            try{

                // Search for contact info and usernames.
                $mentor = TableModels\Mentor::findOrFail($credentials['contact_info']['username']);

                // Fill in the credentials for the mentor.
                $mentor->fill($credentials['mentor']);

                // Save and commit all changes to the mentor variable.
                $mentor->save();

             // If the contact info or the username is not found...
            }catch(ModelNotFoundException $me){

                // Create a new TableModels object to add credentials for a new
                // mentor.
                $mentor = new TableModels\Mentor($credentials['mentor']);

                // Save and commit all changes to the mentor variable.
                $mentor->save();

            }

            // If everything was successful, return a 'success' message.
            return response()->json(['success'=>true],201);

        }else{

            // Otherwise, if there was an error, return an 'error' message.
            return response()->json(['error'=>true], 400);

        }
    }

    /**
     * updateCareer
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateCareer(Request $request){

        // In order to update career info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){

            // The only credentials necessary here are contact info, and previous
            // career fields for the person.
            $credentials = $request->only('contact_info','prev_career_fields');

            // For each of the previous career field credentials...
            foreach($credentials['prev_career_fields'] as $field){

                try{

                    // Search for a careerid.
                    $career = TableModels\PreviousCareerField::findOrFail($field['careerid']);

                    // Fill in the previous career fields information.
                    $career->fill($field);

                    // Save and commit all changes to the career variable.
                    $career->save();

                 // If the careerid is not found...
                }catch(ModelNotFoundException $me){

                    // Create a new TableModel for the previous career field
                    // information.
                    $career = new TableModels\PreviousCareerField($field);

                    // Save and commit all changes to the career variable.
                    $career->save();

                }
            }

            // If everything was successful, return a success response.
            return response()->json(['success'=>true],201);

        }else{

            // Otherwise, if there was an error, return an error response.
            return response()->json(['error'=>true],400);

        }
    }

    /**
     * updateSkill
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateSkill(Request $request){

        // In order to update skill info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){

            // The only credentials needed here are contact info, skill, language,
            // and wanted skills.
            $credentials = $request->only('contact_info','skill','language','wanted_skills');

            // Prepare to push items onto the delete stack.
            $delete = array();

            // For each of the 'skill' credentials...
            foreach($credentials['skill'] as $item){

                // If the 'skill' needs to be deleted...
                if(isset($item['delete']) && $item['delete']){

                    // Push a reference to the skillid, primary key, to the
                    // delete stack.
                    array_push($delete,$item['skillid']);

                }else{

                    // Otherwise, nothing will be deleted.
                    unset($item['delete']);

                    // Add or modify contact info and username for the item.
                    $item['username'] = $credentials['contact_info']['username'];

                    try{

                        // Nothing is deleted. Unset the item from deletion.
                        unset($item['delete']);

                        // Add or modify contact info and name for the item.
                        $item['name'] = $credentials['contact_info']['name'];

                        // Search for the 'skill' credentials by skillid, primary key.
                        $skill = TableModels\Skill::findOrFail($item['skillid']);

                        // Fill in the information.
                        $skill->fill($item);

                        // Save and commit all changes to the skill variable.
                        $skill->save();

                     // If the skillid is not found...
                    }catch(ModelNotFoundException $me){

                        // Create a new TableModels object for the skill info.
                        $skill = new TableModels\Skill($item);

                        // Save and commit all changes to the skill variable.
                        $skill->save();

                    }
                }
            }

            // If there are items to be deleted...
            if(isset($delete)){

                // Delete the items that are related to the Skill TableModels,
                // within the delete stack.
                TableModels\Skill::destroy($delete);

                // Remove all of the references within the delete stack.
                unset($delete);

                // Reset the delete stack.
                $delete = array();

            }

            // For each 'wanted_skills' credentials...
            foreach($credentials['wanted_skills'] as $item){

                // If the 'wanted_skills' credentials need to be deleted for this
                // person...
                if(isset($item['delete']) && $item['delete']){

                    // Push a reference to skillid to the delete stack.
                    array_push($delete,$item['skillid']);

                }else{

                    // Otherwise, nothing will be deleted.
                    unset($item['delete']);

                    // Add or modify contact info and username for the person.
                    $item['username'] = $credentials['contact_info']['username'];

                    try{

                        // Search for the skillid.
                        $skill = TableModels\WantedSkill::findOrFail($item['skillid']);

                        // Fill information for the item.
                        $skill->fill($item);

                        // Save and commit all changes to the skill variable.
                        $skill->save();

                     // If the skillid is not found...
                    }catch(ModelNotFoundException $me){

                        // Create a new TableModels object for the "Wanted Skill".
                        $skill = new TableModels\WantedSkill($item);

                        // Save and commit all changes to the skill variable.
                        $skill->save();

                    }
                }
            }

            // If there is data that needs to be deleted...
            if(isset($delete)){

                // Delete the data.
                TableModels\WantedSkill::destroy($delete);

                // Empty the delete stack.
                unset($delete);

                // Reset the delete stack.
                $delete = array();

            }

            // For each 'language' credentials item...
            foreach($credentials['language'] as $item){

                // If the 'language' credentials need to be deleted...
                if(isset($item['delete']) && $item['delete']){

                    // Push a reference to the langid to the delete stack.
                    array_push($delete,$item['langid']);

                }else{

                    // Otherwise, nothing will be deleted.
                    unset($item['delete']);

                    // Add or update contact info and username.
                    $item['username'] = $credentials['contact_info']['username'];

                    try{

                        // Search for a Language using langid, primary key.
                        $language = TableModels\Language::findOrFail($item['langid']);

                        // Fill in the information for the Language.
                        $language->fill($item);

                        // Save and commit all changes to the language variable.
                        $language->save();

                     // If the langid is not found...
                    }catch(ModelNotFoundException $me){

                        // Create a new TableModels object for the language.
                        $language = new TableModels\Language($item);

                        // Save and commit all changes to the language variable.
                        $language->save();

                    }
                }
            }

            // If there are items that need to be deleted...
            if(isset($delete)){

                // Delete the items, from Language TableModel.
                TableModels\Language::destroy($delete);
            }

            // Empty the delete stack.
            unset($delete);

            // If everything was successful, return a 'success' response.
            return response()->json(['success'=>true],201);

        }else{

            // If not, return an 'error' response.
            return response()->json(['error'=>true],400);

        }
    }

     /**
     * updateAvailability
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateAvailability(Request $request){

        // In order to update availability info for the user, make sure that the
        // user is a valid user. If the user is a valid user...
        if($this->isValid()){

            // The only credentials needed are contact info, and availability.
            $credentials = $request->only('contact_info','availability');

            // For each of the Availability credentials...
            foreach($credentials['availability'] as $item){

                // Add or modify contact info and name.
                $item['name'] = $credentials['contact_info']['name'];

                try{

                    // Check for Availability credentials from timeid, primary key.
                    $availability = TableModels\Availability::findOrFail($item['timeid']);

                    // Fill in the information for availability.
                    $availability->fill($item);

                    // Save and commit all changes to the availability variable.
                    $availability->save();

                 // If the timeid, primary key, is not found...
                }catch(\ModelNotFoundException $me){

                    // Create a new TableModels object for the Availability
                    // credentials.
                    $availability = new TableModels\Availability($item);

                    // Save and commit all changes to the availability variable.
                    $availability->save();

                }
            }

            // If everything was successful, return a 'success' response.
            return response()->json(['success'=>true],201);

        }else{

            // Otherwise, return an 'error' response.
            return response()->json(['error'=>true],201);

        }
    }

    /**
     * updateSocial
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateSocial(Request $request){

        // In order to update social info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){

            // The only credentials needed are contact info, and social.
            $credentials = $request->only('contact_info','social');

            try{

                // Search for contact info, and username that corresponds to the
                // ContactInfo TableModel.
                $contact = TableModels\ContactInfo::findOrFail($credentials['contact_info']['username']);

                // Search for contact info, and username that corresponds to the
                // Social TableModel.
                $social = TableModels\Social::findOrFail($credentials['contact_info']['username']);

                // Fill in contact info.
                $contact->fill($credentials['contact_info']);

                // Fill in social info.
                $social->fill($credentials['social']);

                // Save and commit changes to the contact variable.
                $contact->save();

                // Save and commit changes to the social variable.
                $social->save();

             // If the contact info or username were not found...
            }catch(\ModelNotFoundException $me){

                // An 'error, Not found!' error response will be returned.
                // This error type is 404.
                return response()->json(['error' => 'Not Found!'], 404);

            }

            // If everything was successful, return a 'success' response.
            return response()->json(['success' => true], 201);

        }else{

            // Otherwise, return an 'error' response.
            return response()->json(['error'=>true],201);

        }
    }

    /**
     * updateTask
     * @params Request $request
     * update/delete/add information into database based on user input
     */
    public function updateTask(Request $request){

        // In order to update task info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){

            // The only credentials necessary are contact info, and action task.
            $credentials = $request->only('contact_info','action_task');

            // If able to update task, return a success response.
            return response()->json(['success'=>true],201);

        }else{

            // If not, return an 'error' response.
            return response()->json(['error'=>true],201);

        }
    }

    /**
     * retrieveProj
     * @params Request $request
     * retrieves all the projects from the database that are not matched
     */
    public function retrieveProj(Request $request){

        // In order to retrieve project info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){

            // Retrieve Company projects where ismatched != true.
            $projects = TableModels\CompanyModels\CompanyProject::where('ismatched','!=','true')->get();

            // If successful, return a success response.
            return response()->json(['projects' => $projects,'success'=>true],200);

        }else{

            // If not, return an error response.
            return response()->json(['error'=>true],400);

        }
    }
    /**
     * retrieveProj
     * @params Request $request
     * retrieves all the projects from the database that are not matched
     */
    public function retrieveFavUsers(Request $request){
        $userInfo = $request->all();
        // In order to retrieve project info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){
            $internInfo = array();
            // Retrieve Company projects where ismatched != true.
            $projects = TableModels\CompanyModels\CompanyFavorite::where('username','=',$userInfo['company_info']['username'])->get();
            foreach($projects as $proj){
                $temp = User::with('contactInfo','skill','education','availability','monthAvailability')->where('username', '=', $proj['internid'])->get()->toArray();
                $temp['favid'] = $proj['favid'];
                array_push($internInfo,$temp);
            }
            // If successful, return a success response.
            return response()->json(['projects' => $internInfo, 'success'=>true],200);

        }else{

            // If not, return an error response.
            return response()->json(['error'=>true],400);

        }
    }
    /**
     * retrieveProj
     * @params Request $request
     * retrieves all the projects from the database that are not matched
     */
    public function addFavUser(Request $request){
        $userInfo = $request->all();
        // In order to retrieve project info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){
            TableModels\CompanyModels\CompanyFavorite::create($userInfo);
            // If successful, return a success response.
            return response()->json(['success'=>true],200);

        }else{

            // If not, return an error response.
            return response()->json(['error'=>true],400);

        }
    }

    /**
     * retrieveProj
     * @params Request $request
     * retrieves all the projects from the database that are not matched
     */
    public function removeFavUser(Request $request){
        $userInfo = $request->all();
        // In order to retrieve project info for the user, make sure that the user
        // is a valid user. If the user is a valid user...
        if($this->isValid()){
            TableModels\CompanyModels\CompanyFavorite::destroy($userInfo['favid']);
            // If successful, return a success response.
            return response()->json(['success'=>true],200);

        }else{

            // If not, return an error response.
            return response()->json(['error'=>true],400);

        }
    }
}
