<?php
namespace App\TableModels\CompanyModels;

use Illuminate\Database\Eloquent\Model;
class CompanyProjectSkill extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companyprojskills';
    // Set primary key
    protected $primaryKey = "skillid";
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['skillid','skill','projid'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'projid'
    ];

    /**
     * Get the post that owns the comment.
     */
    public function user()
    {
        return $this->belongsTo('App\User','username');
    }

}