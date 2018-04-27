<?php
namespace App\TableModels\CompanyModels\CompanyProject;

use Illuminate\Database\Eloquent\Model;
class Milestone extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'milestones';
    // Set primary key
    protected $primaryKey = "milestoneid";
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['milestoneid','projid','milestone','completed'];

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
    public function user()
    {
        return $this->belongsTo('App\User','username');
    }
}