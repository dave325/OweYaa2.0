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
$router->get('{all}', function (){
    return view('index');
});
$router->get('/{any:.*}', function ($any) use ($router){
    return view('index');
});

Route::group(['prefix' => 'api'], function (){
    Route::post('login', "ExampleController@loginTest");
    Route::post('addUser', "ExampleController@addUser");
    Route::post('check','ValidateUser@checks');
    Route::post('uploadFile','ValidateUser@uploadFiles');
    Route::post('getUsers', 'ExampleController@returnAllUsers');
    Route::group(['prefix' => 'update'], function (){
        Route::post('contactInfo', 'ValidateUser@updateContact');
        Route::post('education', 'ValidateUser@updateEducation');
        Route::post('career', 'ValidateUser@updateCareer');
        Route::post('journal', 'ValidateUser@updateJournal');
        Route::post('skill', 'ValidateUser@updateSkill');
        Route::post('availability', 'ValidateUser@updateAvailability');
        Route::post('social', 'ValidateUser@updateSocial');
        Route::post('task', 'ValidateUser@updateTask');
        Route::post('project', 'CompanyController@updateProject');
    });
    Route::group(['prefix'=>'payment'],function(){
        Route::post('test','StripeController@test');
    });
});
