<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class MonthAvailability extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'monthavailability';
    // Set primary key
    protected $primaryKey = "monthid";
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['username','month','monthid','isavailible'];

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