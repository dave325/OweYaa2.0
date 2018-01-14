<?php
namespace App\TableModels\CompanyModels;

use Illuminate\Database\Eloquent\Model;
class Company extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companies';
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
    protected $fillable = ['username','name','email','matchNum','stripeToken'];

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