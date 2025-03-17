<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flashcard extends Model
{
    use HasFactory;

    protected $fillable = ['chapter_id', 'front', 'back'];

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }
}

