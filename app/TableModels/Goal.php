<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class Goal extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'goals';
    // Set primary key
    protected $primaryKey = "username";
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;
     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['username','goal1','goal2','goal3'];

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
        return $this->belongsTo('App\MilitaryUser','username');
    }
}