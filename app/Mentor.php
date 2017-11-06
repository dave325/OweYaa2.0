<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
class Mentor extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'mentor';
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
    protected $fillable = ['name', 'mentorname', 'location','discussion', 'email'];

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