<?php

use Illuminate\Http\Request;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::post('/shop', [
    'uses' => 'ShopController@postShop'
]);

Route::get('/shop', [
    'uses' => 'ShopController@getShop'
]);

Route::put('/shop{id}', [
    'uses' => 'ShopController@putShop'
]);


Route::delete('/shop{id}', [
    'uses' => 'ShopController@deleteShop'
]);



Route::post('/customer', [
    'uses' => 'CustomerController@postCustomer'
]);

Route::get('/products', [
    'uses' => 'CustomerController@getProducts'
]);

Route::get('/customer/{email}/{pass}', [
    'uses' => 'CustomerController@getCustomer'
]);

Route::put('/customer/{id}', [
    'uses' => 'CustomerController@putCustomer'
]);

Route::delete('/customer/{id}', [
    'uses' => 'CustomerController@deleteCustomer'
]);


