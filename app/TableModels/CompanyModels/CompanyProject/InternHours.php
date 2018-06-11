<?php
namespace App\TableModels\CompanyModels\CompanyProject;

use Illuminate\Database\Eloquent\Model;
class InternHours extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'internhours';
    // Set primary key
    protected $primaryKey = 'matchid';
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['username','hours', 'projid', 'checkin','matchid'];

    /**
     * Get the post that owns the comment.
     */
    public function militaryUser()
    {
        return $this->belongsTo('App\User', 'username');
    }
}