<?php

namespace App\Http\Controllers;
use App\User;
use App\MilitaryUser;
use App\CompanyUser;
use App\TableModels\CompanyModels as CModel;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Stripe;
class StripeController extends Controller{

    public function test(Request $request){
        $info = $request->all();
        if($request->input("stripetoken")){
            $user["customer"] = Stripe\Customer::retrieve($request->input("stripetoken"));
            $user["charge"] = Stripe\Charge::create(array(
                "amount" => $info['type']['total']['amount'],
                "currency" => $info['type']['currency'],
                "description" => "Example charge",
                "statement_descriptor" => "Custom descriptor",
                "source" => $info['tempToken'],
            ));
        }
       return response()->json($user);
    }
}
