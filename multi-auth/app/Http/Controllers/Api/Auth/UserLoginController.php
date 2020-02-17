<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserLoginController extends Controller
{
    public function __construct()
    {
        auth()->setDefaultDriver('api');
    }

    public function login(Request $request)
    {
        $creds = $request->only(['username','password']);

        if(!$token = auth()->attempt($creds))
        {
            return response()->json(['error'=> 'Incorrect email/password'],401);
        }
        else return response()->json(['user_token'=> $token]);
    }
}
