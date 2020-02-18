<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TmpBook extends Model
{
    protected $table = 'tmp_books';

    protected $fillable = [
        'title','author','genre_id','pages','user_id',
    ];

    protected function User()
    {
        return $this->belongsTo(User::class);
    }
}
