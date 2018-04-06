<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class Education extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'education';
    // Set primary key
    protected $primaryKey = 'username';
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
<<<<<<< HEAD
    protected $fillable = ['username', 'school', 'degree','gradDate', 'course1', 'course2', 'course3','attendedcollege'];
=======
    protected $fillable = ['username', 'school', 'degree','graddate', 'course1', 'course2', 'course3','attendedcollege'];
>>>>>>> 893771774a6311b8168153848237d855547a6d07

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'username',
    ];

    /**
     * Get the post that owns the comment.
     */
    public function militaryUser()
    {
        return $this->belongsTo('App\User', 'username');
    }
}