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
        try {
            // Use Stripe's library to make requests...
            if($request->input("stripetoken") && Stripe\Customer::retrieve($info['user']['company']['stripetoken'])){
                $user["customer"] = Stripe\Customer::retrieve($info['user']['company']['stripetoken']);
                $user["charge"] = Stripe\Charge::create(array(
                    "amount" => $info['type']['total']['amount'],
                    "currency" => $info['type']['currency'],
                    "description" => "Example charge",
                    "statement_descriptor" => "Custom descriptor",
                    "source" => $info['tempToken'],
                    "customer" => $user['customer']->id
                ));
            }else{
                $user["customer"] = Stripe\Customer::create(array(
                    "email" =>$info['user']['company']['email'],
                    "source" => $info['tempToken']
                ));
                $user["charge"] = Stripe\Charge::create(array(
                    "amount" => $info['type']['total']['amount'],
                    "currency" => $info['type']['currency'],
                    "description" => "Example charge",
                    "statement_descriptor" => "Custom descriptor",
                    "source" => $info['tempToken'],
                    "customer" => $user['customer']['id']
                ));
            }
          } catch(\Stripe\Error\Card $e) {
            // Since it's a decline, \Stripe\Error\Card will be caught
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            return response()->json($err);
          } catch (\Stripe\Error\RateLimit $e) {
            // Too many requests made to the API too quickly
          } catch (\Stripe\Error\InvalidRequest $e) {
            // Invalid parameters were supplied to Stripe's API
          } catch (\Stripe\Error\Authentication $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
          } catch (\Stripe\Error\ApiConnection $e) {
            // Network communication with Stripe failed
          } catch (\Stripe\Error\Base $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
          } catch (Exception $e) {
            // Something else happened, completely unrelated to Stripe
          }
          return response()->json($user);
    }
}
