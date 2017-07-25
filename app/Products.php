<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table="products";
    protected $fillable=['name','vendorCode','price','count','img1','img2','description','shortDescription'];
}
