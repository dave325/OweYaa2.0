<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;  
use Illuminate\Support\Facades\Hash;
class CompanyController extends Controller{

    public function updateProject(Request $request){
        $credentials = $request->all();
        if($user = app('auth')->guard()->authenticate()){
            try{
                $project = TableModels\CompanyProject::findOrFail($credentials['projid']);
                $project->fill($credentials);
                $project->save();
            }catch(ModelNotFoundException $me){
                TableModels\CompanyProject::create($credentials);
            }
        }else{
            return response()->json(compact('user'));
        }
    }
}
