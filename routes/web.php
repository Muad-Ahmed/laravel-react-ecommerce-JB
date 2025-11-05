<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Shop\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Home Page Route
Route::get('/', [HomeController::class, 'get_home_data'])->name('home');

// Product Detail Page Route
Route::get('/detail', function () {
    return Inertia::render('product-details');
})->name('detail');

// 'auth' and 'verified' middleware routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/index');
    })->name('dashboard');

    Route::get('/dashboard/products', function () {
        return Inertia::render('dashboard/products/index');
    })->name('products');

    Route::post('/dashboard/categories', [CategoryController::class, 'save_category'])->name('dashboard.categories.save');
});

require __DIR__ . '/settings.php';
