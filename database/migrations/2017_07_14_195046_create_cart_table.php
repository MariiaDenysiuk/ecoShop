<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCartTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart', function(Blueprint $table){
            $table->integer('customer_id')->unsigned();
            $table->integer('goods_id')->unsigned();
            $table->float('amount');
            $table->timestamp('date');
            $table->primary(['customer_id', 'goods_id']);
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            $table->foreign('goods_id')->references('idprod')->on('products')->onDelete('cascade');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cart');
    }
}
