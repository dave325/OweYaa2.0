<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels\CompanyModels as CModel;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;  
use Illuminate\Support\Facades\Hash;
class CompanyController extends Controller{

    public function updateProject(Request $request){
        $credentials = $request->all();
        if($user = app('auth')->guard()->authenticate()){
            try{
                $project = CModel\CompanyProject::findOrFail($credentials['projid']);
                $project->fill($credentials);
                $project->save();
            }catch(ModelNotFoundException $me){
                CModel\CompanyProject::create($credentials);
            }
        }else{
            return response()->json(compact('user'));
        }
    }
}
