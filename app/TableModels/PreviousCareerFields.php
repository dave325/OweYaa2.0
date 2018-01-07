<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class PreviousCareerField extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'previouscareerfields';
    // Set primary key
    protected $primaryKey = 'careerid';
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['careerid','username','career','employer', 'start_date','end_date'];

    /**
     * Get the post that owns the comment.
     */
    public function militaryUser()
    {
        return $this->belongsTo('App\User','username','careerid');
    }
}