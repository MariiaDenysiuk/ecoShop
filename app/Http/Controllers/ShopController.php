<?php
namespace App\Http\Controllers;

use App\Shop;
use Symfony\Component\HttpFoundation\Request;

class ShopController extends  Controller {
    public function postShop(Request $request) {
        $shop = new Shop();
        $shop->content = $request->input('content');
        $shop->save();
        return response()->json(['shop'=>$shop], 201);
    }

    public function getShop() {
        $shop = Shop::all();
        $response = [
            'shop' => $shop
        ];
        return response()->json($response, 200);
    }

    public function putShop(Request $request, $id) {
        $shop = Shop::find($id);
        if(!$shop) {
            return response()->json(['message'=>'Document not found'], 404);
        }
        $shop->content = $request->input('content');
        $shop->save();
        return response()->json(['shop'=>$shop], 200);
    }

    public function deleteShop($id) {
        $shop = Shop::find($id);
        $shop->delete();
        return response()->json(['message'=>'Deleted'], 200);
    }
}