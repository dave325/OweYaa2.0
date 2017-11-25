<?php
namespace App\TableModels;

use Illuminate\Database\Eloquent\Model;
class Language extends Model{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'languages';
    // Set primary key
    protected $primaryKey = "langid";
    // Remove default increment from eloquent
    public $incrementing = false;
    // Remove default timestamp from eloquent
    public $timestamps = false;

     /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = ['langid','name','language','rating'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'name',
    ];

    /**
     * Get the post that owns the comment.
     */
    public function post()
    {
        return $this->belongsTo('App\MilitaryUser', 'name');
    }
}