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
       $user["customer"] = Stripe\Customer::retrieve($request->input("stripetoken"));
       $user["charge"] = Stripe\Charge::retrieve("ch_1BmbWH2eZvKYlo2CcKyWK40x");
       return response()->json($user);
    }
}
