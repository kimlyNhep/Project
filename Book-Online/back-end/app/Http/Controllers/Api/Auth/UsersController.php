<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class UsersController extends Controller
{
    public function login(Request $request)
    {
        $creds = $request->only(['username','password']);

        if(!$token = auth('api')->attempt($creds))
        {
            return response()->json(['error'=> 'Incorrect email or password'],401);
        }
        else return response()->json(['user_token'=> $token]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'first_name' => 'required|string|min:4|max:20',
            'last_name'=> 'required|string|min:4|max:20',
            'username'=> 'required|string|min:4|max:20',
            'email'=> 'required|string|email|max:20|unique:users',
            'password'=> 'required|string|min:6|confirmed',
            'password_confirmation' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'username' => $request->get('username'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password_confirmation')),
            'admin_id' => $request->get('admin_id')
        ]);

        $token = auth('api')->login($user);

        return response()->json(['user_token'=> $token],201);
    }
}
