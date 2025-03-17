<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Content;
use App\Models\Course;
use App\Models\Flashcard;
use App\Models\Qa;
use App\Models\Quiz;
use Illuminate\Http\Request;

class CourseController extends Controller
{

    public function store(Request $request)

    {
        $data = $request->json()->all(); // Get JSON data from request
        foreach ($data['courses'] as $courseData) {
            $course = Course::create([
                'course_title' => $courseData['courseTitle'],
                'description' => $courseData['description'],
                'banner_image' => $courseData['banner_image'],
            ]);

            foreach ($courseData['chapters'] as $chapterData) {
                $chapter = Chapter::create([
                    'course_id' => $course->id,
                    'chapter_name' => $chapterData['chapterName'],
                ]);

                foreach ($chapterData['content'] as $contentData) {
                    Content::create([
                        'chapter_id' => $chapter->id,
                        'topic' => $contentData['topic'],
                        'details' => $contentData['details'],
                    ]);
                }

                foreach ($chapterData['quiz'] as $quizData) {
                    Quiz::create([
                        'chapter_id' => $chapter->id,
                        'question' => $quizData['question'],
                        'option_a' => $quizData['options'][0],
                        'option_b' => $quizData['options'][1],
                        'option_c' => $quizData['options'][2],
                        'option_d' => $quizData['options'][3],
                        'correct_answer' => $quizData['correctans'],
                    ]);
                }

                foreach ($chapterData['flashcards'] as $flashcardData) {
                    Flashcard::create([
                        'chapter_id' => $chapter->id,
                        'front' => $flashcardData['front'],
                        'back' => $flashcardData['back'],
                    ]);
                }

                foreach ($chapterData['qa'] as $qaData) {
                    Qa::create([
                        'chapter_id' => $chapter->id,
                        'question' => $qaData['question'],
                        'answer' => $qaData['answer'],
                    ]);
                }
            }
        }

        return response()->json(['message' => 'Course saved successfully'], 201);
    }
}
