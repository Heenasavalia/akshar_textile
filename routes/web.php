<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
}); 

Route::get('/sessionAll',function(){
    return session()->all();
});

Route::get('admin_login','AdminController@admin_login')->name('admin_login');

Route::get('products','ProductController@ShowProductsList')->name('products');

Route::post('products','ProductController@submit_product_img')->name('submit_product_img');

Route::get('/7tdUgrTsyAyLTcNqBYGj','HomeController@HomeImageForm')->name('home_image');

Route::get('akshar_login','AdminLoginController@index')->name('akshar_login');
Route::post('akshar_login','AdminLoginController@login');
