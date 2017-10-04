<?php

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
$router->post('/api/login',"ExampleController@loginTest");
/*
Route::group(['prefix' => 'api'], function (){
    Route::post('login', "ExampleController@loginTest");
    Route::post('addUser', "ExampleController@addUser");
    Route::group(['middleware' => 'auth:api'],function(){
        Route::post('check','ExampleController@checks');
    });
});
*/