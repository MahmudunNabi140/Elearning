<?php

use App\Http\Controllers\Api\Vi\LoginController;
use App\Http\Controllers\Api\Vi\RegisterController;
use App\Http\Controllers\CourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', function (Request $request) {
    return response()->json(['message' => 'Hello World!']);
});

Route::post('/register', [RegisterController::class, 'store']);
Route::post('/login', [LoginController::class, 'store']);
Route::post('/courses', [CourseController::class, 'store']);
