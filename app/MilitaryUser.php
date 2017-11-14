<?php

namespace App;
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
     protected $fillable = ['name','password','email', 'contactinfo', 'course', 'bio', 'programmingskills', 'mentor','social', 'education','actiontask', 'availability','wantedskills','events', 'goals','careersearch', 'bootcamp', 'language'];

     /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'name',
        'email'
    ];
    /**
     * Get the skills associated with the user.
     */
    public function skill()
    {
        return $this->hasMany('App\TableModels\Skill', 'name');
    }

    /**
     * Get the skills associated with the user.
     */
    public function contactInfo()
    {
        return $this->hasOne('App\TableModels\ContactInfo', 'name');
    }

    /**
     * Get the courses associated with the user.
     */
    public function course()
    {
        return $this->hasMany('App\TableModels\Course', 'name');
    }

    /**
     * Get the languages associated with the user.
     */
    public function language()
    {
        return $this->hasMany('App\TableModels\Language', 'name');
    }

    /**
     * Get the social media associated with the user.
     */
    public function social()
    {
        return $this->hasOne('App\TableModels\Social', 'name');
    }

    /**
     * Get the mentor associated with the user.
     */
    public function mentor()
    {
        return $this->hasOne('App\TableModels\Mentor', 'name');
    }

    /**
     * Get the education associated with the user.
     */
    public function education()
    {
        return $this->hasOne('App\TableModels\Education', 'name');
    }

    /**
     * Get the action task associated with the user.
     */
    public function actionTask()
    {
        return $this->hasOne('App\TableModels\ActionTask', 'name');
    }

    /**
     * Get the availability associated with the user.
     */
    public function availability()
    {
        return $this->hasMany('App\TableModels\Availability', 'name');
    }

    /**
     * Get the wanted skills associated with the user.
     */
    public function wantedSkills()
    {
        return $this->hasMany('App\TableModels\WantedSkills', 'name');
    }

    /**
     * Get the events associated with the user.
     */
    public function events()
    {
        return $this->hasMany('App\TableModels\Event', 'name');
    }

    /**
     * Get the goals associated with the user.
     */
    public function goals()
    {
        return $this->hasMany('App\TableModels\Goal', 'name');
    }

    /**
     * Get the career search associated with the user.
     */
    public function careerSearch()
    {
        return $this->hasMany('App\TableModels\CareerSearch', 'name');
    }

    /**
     * Get the bootcamp associated with the user.
     */
    public function bootcamp()
    {
        return $this->hasMany('App\TableModels\Bootcamp', 'name');
    }

    /**
     * Get the previous career fields associated with the user.
     */
    public function prevCareerFields()
    {
        return $this->hasMany('App\TableModels\PreviousCareerField', 'name');
    }

    /**
     * Get the career goals associated with the user.
     */
    public function careerGoals()
    {
        return $this->hasMany('App\TableModels\CareerGoal', 'name');
    }

    /**
     * Get the programming skills associated with the user.
     */
    public function programmingSkills()
    {
        return $this->hasMany('App\TableModels\ProgrammingSkill', 'name');
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
