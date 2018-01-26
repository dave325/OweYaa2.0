<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class Skill extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'skills';
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
    protected $fillable = ['skillid','username','skill','amount'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'username',
    ];

    /**
     * Get all of the posts for the country.
     */
    public function skill()
    {
        return $this->hasManyThrough('App\User', 'App\MilitaryUser');
    }
}