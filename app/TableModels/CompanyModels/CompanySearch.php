<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class CompanySearch extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companysearch';
    // Set primary key
    protected $primaryKey = "searchid";
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['username','skillset','expectedlocation','physicallocation','details','status','searchid'];

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