<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels\CompanyModels as CModel;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Database\Eloquent\ModelNotFoundException;  
use Stripe\Stripe;
class CompanyController extends Controller{

    public function test(Request $request){
       $user = Stripe\Charge::retrieve(array(
            "id" => "ch_1Bm7ha2eZvKYlo2CSixUsnPq",
            "expand" => array("customer")));
        return response()->json($user);
    }
}
