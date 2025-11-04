<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'price',
        'original_price',
        'rating',
        'review_count',
        'description',
        'features',
        'image',
        'images',
        'colors',
        'sizes',
        'is_featured',
        'in_stock',
        'category_id',
    ];

    protected $casts = [
        'in_stock' => 'boolean',
        'is_featured' => 'boolean',
        'features' => 'array',
        'sizes' => 'array',
        'images' => 'array',
        'colors' => 'array',
        'original_price' => 'decimal:2',
        'price' => 'decimal:2',
        'rating' => 'decimal:1',
    ];

    public function category()
    {
        return $this->belongsto(Category::class);
    }
}
