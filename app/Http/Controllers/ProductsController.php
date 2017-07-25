<?php

namespace App\Http\Controllers;
use App\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    function index(){
        $products = Products::all();
        return view('admin.products.products', ['products'=>$products]);
    }

    public function create()
    {
        return view('admin.products.create');
    }

    public function store(Request $request)
    {
        if($request->hasFile('img1') && $request->hasFile('img2'))
        {
            $date=date('d.m.Y');
            $root=$_SERVER['DOCUMENT_ROOT']."/images/";
            if(!file_exists($root.$date))    {mkdir($root.$date);}
            $f_name=$request->file('img1')->getClientOriginalName();
            $f_name1=$request->file('img2')->getClientOriginalName();
            $request->file('img1')->move($root.$date,$f_name);
            $request->file('img2')->move($root.$date,$f_name1);
            $all=$request->all();
            $all['img1']="/images/".$date."/".$f_name;
            $all['img2']="/images/".$date."/".$f_name1;
            Products::create($all);
        }
        else
        {
            Products::create($request->all());
        }
        return back()->with('message','Статья добавлена');
    }

}
