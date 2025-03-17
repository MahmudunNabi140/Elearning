<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;

    protected $fillable = ['course_id', 'chapter_name'];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function contents()
    {
        return $this->hasMany(Content::class);
    }

    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }

    public function flashcards()
    {
        return $this->hasMany(Flashcard::class);
    }

    public function qas()
    {
        return $this->hasMany(Qa::class);
    }
}

