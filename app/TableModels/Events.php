<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class Event extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'events';
    // Set primary key
    protected $primaryKey = 'eventid';
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;
    protected $casts = [
        "contactid" => 'array'
    ];

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['eventid','username','eventname','contactid'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'username'
    ];

    /**
     * Get the post that owns the comment.
     */
    public function militaryUser()
    {
        return $this->belongsTo('App\MilitaryUser','username','eventid');
    }

    /**
     * 
     */
    public function contact(){
        return $this->hasMany('App\Contact', 'eventid');
    }
}