<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;

    protected $fillable = ['chapter_id', 'topic', 'details'];

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }
}

