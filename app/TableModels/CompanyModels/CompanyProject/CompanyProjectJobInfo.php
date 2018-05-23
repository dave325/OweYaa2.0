<?php
namespace App\TableModels\CompanyModels\CompanyProject;

use Illuminate\Database\Eloquent\Model;
class CompanyProjectJobInfo extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companyprojjobinfo';
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
    protected $fillable = ['projid','title','jobtype','position','focusarea','istemp','projdescription','projdeadline','isremote','totalinternhours','ismatched','initiated','datesubmitted','completed'];


    /**
     * Get the post that owns the comment.
     */
    public function user()
    {
        return $this->belongsTo('App\User','username');
    }

}