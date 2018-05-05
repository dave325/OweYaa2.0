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

Route::group(['prefix' => 'api'], function ($router){
    Route::post('getFilterUser', "CompanyInternMatch@test");
    Route::post('login', "ExampleController@loginUser");
    Route::post('getUser', "ExampleController@getUser");
    Route::post('addUser', "ExampleController@addUser");
    Route::post('matching', 'CompanyInternMatch@test');
    Route::post('uploadFile','ValidateUser@uploadFiles');
    Route::post('getUsers', 'CompanyController@returnAllUsers');
    Route::post('getProjects', 'CompanyController@retrieveProj');
    Route::post('getFavUsers', 'CompanyController@retrieveFavUsers');
    Route::post('addFavUsers', 'CompanyController@addFavUser');
    Route::post('removeFavUser', 'CompanyController@removeFavUser');
    Route::group(['prefix' => 'update'], function (){
        Route::post('contactInfo', 'ValidateUser@updateContact');
        Route::post('education', 'ValidateUser@updateEducation');
        Route::post('career', 'ValidateUser@updateCareer');
        Route::post('journal', 'ValidateUser@updateJournal');
        Route::post('skill', 'ValidateUser@updateSkill');
        Route::post('availability', 'ValidateUser@updateAvailability');
        Route::post('social', 'ValidateUser@updateSocial');
        Route::post('task', 'ValidateUser@updateTask');
        Route::post('retrieveProject','ValidateUser@retrieveProj');
        Route::post('project', 'CompanyController@updateProject');
        Route::post('milestone','CompanyController@updateMilestone');
        Route::post('compSet', 'CompanyController@updateCompanySettings');
    });
    Route::group(['prefix'=>'payment'],function(){
        Route::post('test','StripeController@test');
    });
     Route::group(['prefix' => 'projDash'], function (){
        Route::post('updateAll', 'ProjectDashboardController@updateAll');
        Route::post('getProjects', 'ProjectDashboardController@getProjects');

    });
    Route::group(['prefix'=>'admin'],function(){
        Route::post('login','AdminController@login');
        Route::post('updateUser','AdminController@updateUser');
        Route::post('retrieveVet','AdminController@retrieveVet');
        Route::post('retrieveAllVet','AdminController@retrieveAllVet');
        Route::post('retrieveComp','AdminController@retrieveComp');
        // Need to implement
        Route::post('matchComp','AdminController@matchComp');
    });
});
