<?php

namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class Course extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses';
    // Set primary key
    protected $primaryKey = 'courseid';
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['username','course','completed', 'courseid'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'name',
    ];

    /**
     * Get the post that owns the comment.
     */
    public function militaryUser()
    {
        return $this->belongsTo('App\MilitaryUser', 'name');
    }
}