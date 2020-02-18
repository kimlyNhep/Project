<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\TmpBook;
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

    public function addBooks(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'title' => 'required|string|min:4|max:50',
            'author'=> 'required|string|min:4|max:20',
            'pages'=> 'required|numeric',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $book = TmpBook::create([
            'title' => $request->get('title'),
            'author' => $request->get('author'),
            'genre_id' => $request->get('genre_id'),
            'pages' => $request->get('pages'),
            'user_id' => $request->get('user_id')
        ]);

        return response()->json(['book' => $book],200);
    }

    public function getBooks()
    {
        $books = User::find(1)->TmpBooks;
        return response()->json(['books' => $books],200);
    }

    public function uploadImage(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'fileUpload' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        if($files = $request->file('fileUpload')) {
            $destinationPath = public_path('front-end\src\Assets\Images'); // upload path
            $profileImage = date('YmdHis') . "." . $files->getClientOriginalExtension();
            $files->move($destinationPath, $profileImage);
        }
    }
}
