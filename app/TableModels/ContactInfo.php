<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class ContactInfo extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'contactinfo';
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
    protected $fillable = ['firstname','lastname','email','phone','location', 'mos','branch',"username", 'imgUrl', 'isVet', 'bio','longitude','latitude', 'ismatched'];

    /**
     * Get the post that owns the comment.
     */
    public function militaryUser()
    {
        return $this->belongsTo('App\User','username');
    }
}