<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
class Education extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'education';
    // Set primary key
    protected $primaryKey = 'name';
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['name', 'school', 'degree','gradDate', 'course1', 'course2', 'course3'];

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
    public function post()
    {
        return $this->belongsTo('App\MilitaryUser', 'name');
    }
}