<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class WantedSkills extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'wantedskill';
    // Set primary key
    protected $primaryKey = null;
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['name','skill1','skill2','skill3','skill4', 'skill5','skill6', 'skill7'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'name'
    ];

    /**
     * Get the post that owns the comment.
     */
    public function militaryUser()
    {
        return $this->belongsTo('App\MilitaryUser','name');
    }
}