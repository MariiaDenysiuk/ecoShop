<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function(Blueprint $table){
            $table->increments('id');
            $table->timestamps();
            $table->text('content');
        });
    }

    /**
     * .
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('shops');
    }
}
