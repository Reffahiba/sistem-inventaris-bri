<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    return view('pegawai.login');
})->name('login');

Route::get('/home', function () {
    return view('pegawai.dashboard');
})->name('home');


