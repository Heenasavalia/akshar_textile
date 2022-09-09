<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('admin_id')->nullable();
            $table->longText('description')->nullable();
            $table->longText('brand')->nullable();
            $table->longText('catalog')->nullable();
            $table->longText('pcs')->nullable();
            $table->longText('avg_price')->nullable();
            $table->longText('full_price')->nullable();
            $table->longText('size')->nullable();
            $table->longText('fabric')->nullable();
            $table->longText('initial_delivery')->nullable();
            $table->longText('availability')->nullable();
            $table->longText('note')->nullable();
            $table->integer('total_image')->nullable();
            $table->integer('is_deleted')->default(0)->comment('0 for not delete, 1 for deleted');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
