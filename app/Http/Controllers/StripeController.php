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
        $user - Stripe\Customer::retrieve($request->input("stripetoken"));
       $user1 = Stripe\Charge::retrieve(array(
            "id" => $request->input("stripetoken"),
            "expand" => array("customer"),
            "amount" => "1600",
            "currency" => "usd"));
        return response()->json($user);
    }
}
