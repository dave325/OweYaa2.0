<?php
namespace App\TableModels\CompanyModels;

use Illuminate\Database\Eloquent\Model;
class CompanyInfo extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companyinfo';
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
    protected $fillable = ['username','firstname','lastname','email','phone','description','numofemployees','diversity','revenue','pointofcontact','longitude','latitude'];

    /**
     * Get the post that owns the comment.
     */
    public function user()
    {
        return $this->belongsTo('App\User','username');
    }
}