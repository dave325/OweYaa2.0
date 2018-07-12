<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Stripe;

class StripeController extends Controller
{

    public function test(Request $request)
    {
        $info = $request->all();
        $user = array();
        \Stripe\Stripe::setApiKey(env('stripe_api'));
        try {
            // Use Stripe's library to make requests...
            if (isset($info['user']['membership_token']['stripetoken']) && \Stripe\Customer::retrieve($info['user']['membership_token']['stripetoken'])) {
                $user["customer"] = \Stripe\Customer::retrieve($info['user']['membership_token']['stripetoken']);
                $user["charge"] = \Stripe\Charge::create(array(
                    "amount" => $info['type']['total']['amount'],
                    "currency" => $info['type']['currency'],
                    "description" => "Example charge",
                    "statement_descriptor" => "Custom descriptor",
                    "customer" => $user['customer']->id,
                ));
                return response()->json(['user' => $user, 'success' => true], 200);
            } else {
                $user["customer"] = \Stripe\Customer::create([
                    "email" => $info['user']['company_info']['email'],
                    "source" => $info['tempToken'],
                ]);
                $user["charge"] = \Stripe\Charge::create([
                    "amount" => $info['type']['total']['amount'],
                    "currency" => $info['type']['currency'],
                    "description" => "Example charge",
                    "statement_descriptor" => "Custom descriptor",
                    "customer" => $user['customer']->id,
                ]);
                $membershipToken = \App\TableModels\CompanyModels\CompanyProject\MembershipToken::where('username', '=', $info['user']['company_info']['username'])->first();
                $info['user']['membershiptoken']['stripetoken'] = $user['customer']->id;
                $membershipToken->fill($info['user']['membershiptoken']);
                $membershipToken->totalhours = $info['type']['hours'];
                $membershipToken->save();
                return response()->json(compact('user'));
            }
        } catch (\Stripe\Error\Card $e) {
            // Since it's a decline, \Stripe\Error\Card will be caught
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (\Stripe\Error\RateLimit $e) {
            // Too many requests made to the API too quickly
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (\Stripe\Error\InvalidRequest $e) {
            // Invalid parameters were supplied to Stripe's API
            $body = $e->getJsonBody();
            $err = $body['error'];
            return response()->json($err);
        } catch (\Stripe\Error\Authentication $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (\Stripe\Error\ApiConnection $e) {
            // Network communication with Stripe failed
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (\Stripe\Error\Base $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (Exception $e) {
            // Something else happened, completely unrelated to Stripe
            return response()->json($e);
        }
    }
    public function addon(Request $request)
    {
        $info = $request->all();
        $user = array();
        \Stripe\Stripe::setApiKey(env('stripe_api'));
        try {
            // Use Stripe's library to make requests...
            if (isset($info['user']['membership_token']['stripetoken']) && \Stripe\Customer::retrieve($info['user']['membership_token']['stripetoken'])) {
              $user["customer"] = \Stripe\Customer::retrieve($info['user']['membership_token']['stripetoken']);
              $user["charge"] = \Stripe\Charge::create(array(
                  "amount" => $info['type']['total']['amount'],
                  "currency" => $info['type']['currency'],
                  "description" => "Example charge",
                  "statement_descriptor" => "Custom descriptor",
                  "customer" => $user['customer']->id,
              ));

              if(isset($info["flag"])){
                  // Create Mail to notify OweYaa
              }else{
                  try{
                    $token = \App\TableModels\CompanyModels\CompanyProject\MembershipToken::findOrFail($info['user']['company_info']['username']);
                    $token->fill($info['user']['membership_token']);
                    $token->save();
                  }catch(ModelNotFoundException $me){
                      return response()->json($me);
                  }
              }
              return response()->json(['user' => $user, 'success' => true],200);
            }else{
              throw new \Stripe\Error\Authentication();
            }
        } catch (\Stripe\Error\Card $e) {
            // Since it's a decline, \Stripe\Error\Card will be caught
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (\Stripe\Error\RateLimit $e) {
            // Too many requests made to the API too quickly
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (\Stripe\Error\InvalidRequest $e) {
            // Invalid parameters were supplied to Stripe's API
            $body = $e->getJsonBody();
            $err = $body['error'];
            return response()->json($err);
        } catch (\Stripe\Error\Authentication $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (\Stripe\Error\ApiConnection $e) {
            // Network communication with Stripe failed
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (\Stripe\Error\Base $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
            $body = $e->getJsonBody();
            $err = $body['error'];

            return response()->json($err);
        } catch (Exception $e) {
            // Something else happened, completely unrelated to Stripe
            return response()->json($e);
        }
    }
}
