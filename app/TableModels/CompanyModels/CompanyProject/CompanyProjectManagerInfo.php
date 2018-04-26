<?php
namespace App\TableModels\CompanyModels\CompanyProject;

use Illuminate\Database\Eloquent\Model;
class CompanyProjectManagerInfo extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companyprojmanagerinfo';
    // Set primary key
    protected $primaryKey = "projid";
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['projid','managername','managerdept','managercontact','ismanager'];

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