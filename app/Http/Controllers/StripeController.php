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
        $user = array();
        try {
            // Use Stripe's library to make requests...
            if(Stripe\Customer::retrieve($info['user']['company']['stripetoken'])){
                $user["customer"] = Stripe\Customer::retrieve($info['user']['company']['stripetoken']);
                $customer->sources->create(array("source" => $info['tempToken']));
                $user["charge"] = Stripe\Charge::create(array(
                    "amount" => $info['type']['total']['amount'],
                    "currency" => $info['type']['currency'],
                    "description" => "Example charge",
                    "statement_descriptor" => "Custom descriptor",
                    "source" => $info['tempToken'],
                    "customer" => $user['customer']['id']
                ));
                return response()->json(compact('user'));
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
                return response()->json(compact('user'));
            }
          } catch(\Stripe\Error\Card $e) {
            // Since it's a decline, \Stripe\Error\Card will be caught
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            return response()->json($err);
          } catch (\Stripe\Error\RateLimit $e) {
            // Too many requests made to the API too quickly
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            return response()->json($err);
          } catch (\Stripe\Error\InvalidRequest $e) {
            // Invalid parameters were supplied to Stripe's API
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            return response()->json($err);
          } catch (\Stripe\Error\Authentication $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            return response()->json($err);
          } catch (\Stripe\Error\ApiConnection $e) {
            // Network communication with Stripe failed
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            return response()->json($err);
          } catch (\Stripe\Error\Base $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            return response()->json($err);
          } catch (Exception $e) {
            // Something else happened, completely unrelated to Stripe
            return response()->json($e);
          }
    }
}
