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
Route::post('admin/register','Api\Auth\Adminscontroller@register');

Route::post('user/login','Api\Auth\Userscontroller@login');
Route::post('user/register','Api\Auth\Userscontroller@register');

Route::group(['middleware' => 'auth:admin_api'],function ()
{
	Route::get('/users','Api\Auth\Adminscontroller@getUsers');
});

