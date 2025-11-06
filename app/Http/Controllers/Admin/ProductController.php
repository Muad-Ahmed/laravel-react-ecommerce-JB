<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function list_products(){
        $categories =Category::latest()->get();
        $products =Product::with('category')->latest()->get();

        return Inertia::render('dashboard/products/index',[
            'categories'=>$categories,
            'products'=>$products
        ]);
    }
}
