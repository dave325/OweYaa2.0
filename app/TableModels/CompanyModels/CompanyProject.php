<?php
namespace App\TableModels\CompanyModels;

use Illuminate\Database\Eloquent\Model;
class CompanyProject extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companyprojects';
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
    protected $fillable = ['username','projectdetails','projectrecieve','projectmanager','initiated', 'projid', 'ismatched','datesubmitted','resources','companyrfi','deliverymethod','completiondate','checkin','companywebsite','sentmessage','messagedate','purchasehours', 'phone','email','location','industry','internid', 'internhours'];

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