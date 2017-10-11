<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
class Course extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses';
    // Set primary key
    protected $primaryKey = null;
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['name','course','completed'];

    /**
     * Get the post that owns the comment.
     */
    public function post()
    {
        return $this->belongsTo('App\MilitaryUser', 'name');
    }
}