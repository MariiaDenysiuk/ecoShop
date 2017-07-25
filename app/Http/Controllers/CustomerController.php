<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Products;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function postCustomer(Request $request) {
        $customer = new Customer();
        $customer->first_name = strip_tags($request->input('first_name'));
        $customer->last_name = strip_tags($request->input('last_name'));
        $customer->email = strip_tags($request->input('email'));
        $customer->password = strip_tags($request->input('password'));
        $customer->save();
        return response()->json(['customer'=>$customer], 201);
    }

    public function getProducts() {
        $products = Products::all();
        $response = [
            'product' => $products 
        ];
        return response()->json($response, 200);
    }
    public function getCustomer($email, $pass) {
        $customer = Customer::where('email', $email)->where('password', $pass)->first();
        $response = [
            'customer' => $customer
        ];
        return response()->json($response, 200);
    }

    public function putCustomer(Request $request, $id) {
        $customer = Customer::find($id);
        if(!$customer) {
            return response()->json(['message'=>'Document not found'], 404);
        }
        $customer->first_name = $request->input('first_name');
        $customer->last_name = $request->input('last_name');
        $customer->email = $request->input('email');
        $customer->password = $request->input('password');
        $customer->save();
        return response()->json(['customer'=>$customer], 200);
    }

    public function deleteCustomer($id) {
        $customer = Customer::find($id);
        $customer->delete();
        return response()->json(['message'=>'Deleted'], 200);
    }
}
