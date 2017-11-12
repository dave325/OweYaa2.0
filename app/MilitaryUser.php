<?php

namespace App;
use App\Skill;
use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Tymon\JWTAuth\Contracts\JWTSubject as JWTSubject;
class MilitaryUser extends Model implements AuthenticatableContract, AuthorizableContract, JWTSubject
{
    use Authenticatable, Authorizable;
    /**
     * The table associated with the model.
     *
     * @var string
     */
     protected $table = 'militaryusers';
     // Set primary key
     protected $primaryKey = "name";
     // Remove default increment from eloquent
     public $incrementing = false;
     // Remove default timestamp from eloquent
     public $timestamps = false;
      /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $fillable = ['name','password','email','mos', 'branch', 'imgurl', 'location', 'phone', 'career1', 'career2', 'desired1', 'desired2', 'prev1', 'prev2', 'course', 'bio', 'programmingskills', 'mentor','social', 'education','actiontask', 'availability','wantedskills','events', 'goals','careersearch'];

     /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];
    /**
     * Get the skills associated with the user.
     */
    public function skill()
    {
        return $this->hasMany('App\Skill', 'name');
    }

    /**
     * Get the courses associated with the user.
     */
    public function course()
    {
        return $this->hasMany('App\Course', 'name');
    }

    /**
     * Get the languages associated with the user.
     */
    public function language()
    {
        return $this->hasMany('App\Language', 'name');
    }

    /**
     * Get the social media associated with the user.
     */
    public function social()
    {
        return $this->hasOne('App\Social', 'name');
    }

    /**
     * Get the mentor associated with the user.
     */
    public function mentor()
    {
        return $this->hasOne('App\Mentor', 'name');
    }

    /**
     * Get the education associated with the user.
     */
    public function education()
    {
        return $this->hasOne('App\Education', 'name');
    }

    /**
     * Get the education associated with the user.
     */
    public function actionTask()
    {
        return $this->hasOne('App\ActionTask', 'name');
    }

    /**
     * Get the education associated with the user.
     */
    public function availability()
    {
        return $this->hasMany('App\Availability', 'name');
    }

    /**
     * Get the education associated with the user.
     */
    public function wantedSkills()
    {
        return $this->hasOne('App\WantedSkills', 'name');
    }

    /**
     * Get the education associated with the user.
     */
    public function events()
    {
        return $this->hasMany('App\Event', 'name');
    }

    /**
     * Get the education associated with the user.
     */
    public function goals()
    {
        return $this->hasMany('App\Goal', 'name');
    }

    /**
     * Get the education associated with the user.
     */
    public function careerSearch()
    {
        return $this->hasMany('App\CareerSearch', 'name');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    
    public function getJWTCustomClaims()
    {
        return [];
    }
}
