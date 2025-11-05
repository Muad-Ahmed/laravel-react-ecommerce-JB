<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function save_category(Request $request)
    {
        $request->validate([
            'name' => 'string|required|max:255',
            'color' => 'string|required',
            'description' => 'string|nullable',
            'image' => 'image|nullable|max:2048'
        ]);

        //  Slug
        $slug = Str::slug($request->name);
        $image = '';
        //  Image
        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('categories', 'public');
        }
        $new_category = [
            'name' => $request->name,
            'slug' => $slug,
            'image' => $image,
            'color' => $request->color,
        ];
        $cat = Category::create($new_category);

        return to_route('dashboard.categories.index');
    }
}
