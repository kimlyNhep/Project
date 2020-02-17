<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/admin/login','Api\Auth\Adminscontroller@login');
Route::post('/admin/register','Api\Auth\Adminscontroller@register');

Route::post('/user/login','Api\Auth\Userscontroller@login');

Route::group(['middleware' => 'auth:admin_api'],function ()
{
    Route::get('/admin/users','Api\Auth\Adminscontroller@getUsers');
    Route::get('/admin/info','Api\Auth\Adminscontroller@info');
    Route::post('/admin/addMember','Api\Auth\Adminscontroller@addMember');
    Route::post('/admin/Update','Api\Auth\Adminscontroller@updateInfo');
});

Route::group(['middleware' => 'auth:api'],function ()
{
    Route::post('/user/addBook','Api\Auth\UsersController@addBooks');
    Route::get('/user/books','Api\Auth\UsersController@getBooks');
    Route::get('/user/upload','Api\Auth\UsersController@uploadImage');
});
