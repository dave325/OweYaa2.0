<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class Hobby extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'hobbies';
    // Set primary key
    protected $primaryKey = 'hobbyid';
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;
     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['username','hobby','hobbyid'];

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
        return $this->belongsTo('App\User','username');
    }
}