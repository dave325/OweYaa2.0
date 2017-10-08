<?php
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function (){
    return view('index');
});
$router->get('{all}', function (){
    return view('index');
});

Route::group(['prefix' => 'api'], function (Request $request){
    $apiCall = "auth:" . $request->input('type');
    Route::post('login', "ExampleController@loginTest");
    Route::post('addUser', "ExampleController@addUser");
    Route::group(['middleware' => $apiCall],function(){
        Route::post('check','ExampleController@checks');
    });
});
