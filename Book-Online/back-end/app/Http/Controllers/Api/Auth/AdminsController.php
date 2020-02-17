<?php

namespace App\Http\Controllers\Api\Auth;

use App\Admin;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminsController extends Controller
{
    public function info()
    {
        return auth('admin_api')->user();
    }

    public function login(Request $request)
    {
        $creds = $request->only(['username','password']);

        if(!$token = auth('admin_api')->attempt($creds))
        {
            return response()->json(['error'=> 'Incorrect email or password'],401);
        }
        else return response()->json(['admin_token'=> $token]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'first_name' => 'required|string|min:4|max:20',
            'last_name'=> 'required|string|min:4|max:20',
            'username'=> 'required|string|min:4|max:20',
            'email'=> 'required|string|email|max:20|unique:admins',
            'password'=> 'required|string|min:6|confirmed',
            'password_confirmation' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $admin = Admin::create([
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'username' => $request->get('username'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password_confirmation')),
        ]);

        $token = auth('admin_api')->login($admin);

        return response()->json(['admin_token'=> $token],201);
    }

    public function getUsers()
    {
        $users = Admin::find(1)->Users;
        return response()->json(['users' => $users]);
    }

    public function addMember(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'first_name' => 'required|string|min:4|max:20',
            'last_name'=> 'required|string|min:4|max:20',
            'username'=> 'required|string|min:4|max:20',
            'email'=> 'required|string|email|max:20',
            'password'=> 'required|string|min:6|confirmed',
            'password_confirmation' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $admin_id = $this->info();

        $user = User::create([
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'username' => $request->get('username'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password_confirmation')),
            'admin_id' => $admin_id->id,
        ]);

        // $token = auth('api')->login($user);

        return response()->json(['user'=> $user],200);
    }

    public function updateInfo(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'first_name' => 'required|string|min:4|max:20',
            'last_name'=> 'required|string|min:4|max:20',
            'username'=> 'required|string|min:4|max:20',
            'email'=> 'required|string|email|max:20',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $admin_id = $this->info();

        $admin = Admin::find($admin_id->id)->update([
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'username' => $request->get('username'),
            'email' => $request->get('email'),
        ]);

        return response()->json(['success'=> $admin],200);
    }
}
