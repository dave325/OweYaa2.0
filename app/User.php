<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Tymon\JWTAuth\Contracts\JWTSubject as JWTSubject;
class User extends Model implements AuthenticatableContract, AuthorizableContract, JWTSubject
{
    use Authenticatable, Authorizable;
    /**
     * The table associated with the model.
     *
     * @var string
     */
     protected $table = 'user';
     protected $primaryKey = "username";
     public $incrementing = false;
     public $timestamps = false;
      /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $fillable = ['username','password', 'email','type'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'email',
        'username'
    ];
    public function milUser()
    {
        return $this->hasOne('App\MilitaryUser', 'username');
    }
    /**
     * Get the skills associated with the user.
     */
    public function skill()
    {
        return $this->hasMany('App\TableModels\Skill', 'username');
    }

    /**
     * Get the skills associated with the user.
     */
    public function contactInfo()
    {
        return $this->hasOne('App\TableModels\ContactInfo', 'username');
    }

    /**
     * Get the courses associated with the user.
     */
    public function course()
    {
        return $this->hasMany('App\TableModels\Course', 'username');
    }

    /**
     * Get the languages associated with the user.
     */
    public function language()
    {
        return $this->hasMany('App\TableModels\Language', 'username');
    }

    /**
     * Get the social media associated with the user.
     */
    public function social()
    {
        return $this->hasOne('App\TableModels\Social', 'username');
    }

    /**
     * Get the mentor associated with the user.
     */
    public function mentor()
    {
        return $this->hasOne('App\TableModels\Mentor', 'username');
    }

    /**
     * Get the education associated with the user.
     */
    public function education()
    {
        return $this->hasOne('App\TableModels\Education', 'username');
    }

    /**
     * Get the action task associated with the user.
     */
    public function actionTask()
    {
        return $this->hasOne('App\TableModels\ActionTask', 'username');
    }

    /**
     * Get the availability associated with the user.
     */
    public function availability()
    {
        return $this->hasMany('App\TableModels\Availability', 'username');
    }

    /**
     * Get the wanted skills associated with the user.
     */
    public function wantedSkills()
    {
        return $this->hasMany('App\TableModels\WantedSkill', 'username');
    }

    /**
     * Get the events associated with the user.
     */
    public function events()
    {
        return $this->hasMany('App\TableModels\Event', 'username');
    }

    /**
     * Get the goals associated with the user.
     */
    public function goals()
    {
        return $this->hasMany('App\TableModels\Goal', 'username');
    }

    /**
     * Get the career search associated with the user.
     */
    public function careerSearch()
    {
        return $this->hasMany('App\TableModels\CareerSearch', 'username');
    }

    /**
     * Get the bootcamp associated with the user.
     */
    public function bootcamp()
    {
        return $this->hasMany('App\TableModels\Bootcamp', 'username');
    }

    /**
     * Get the previous career fields associated with the user.
     */
    public function prevCareerFields()
    {
        return $this->hasMany('App\TableModels\PreviousCareerField', 'username');
    }

    /**
     * Get the career goals associated with the user.
     */
    public function careerGoals()
    {
        return $this->hasMany('App\TableModels\CareerGoal', 'username');
    }

    /**
     * Get the programming skills associated with the user.
    */
    public function certifications()
    {
        return $this->hasMany('App\TableModels\Certification', 'username');
    }
    
    /**
     * Get the interviews associated with the user.
     */
    public function interviews()
    {
        return $this->hasMany('App\TableModels\Interview', 'username');
    }

    /**
     * Get the programming skills associated with the user.
     */
    public function hobbies()
    {
        return $this->hasMany('App\TableModels\Hobby', 'username');
    }

    /**
     * Get the interviews associated with the user.
     */
    public function company()
    {
        return $this->hasOne('App\TableModels\CompanyModels\Company', 'username');
    }

    /**
     * Get the interviews associated with the user.
     */
    public function companyFavorite()
    {
        return $this->hasMany('App\TableModels\CompanyModels\CompanyFavorite', 'username');
    }

    /**
     * Get the interviews associated with the user.
     */
    public function companyProject()
    {
        return $this->hasMany('App\TableModels\CompanyModels\CompanyProject', 'username');
    }

    /**
     * Get the interviews associated with the user.
     */
    public function companySearch()
    {
        return $this->hasMany('App\TableModels\CompanyModels\CompanySearch', 'username');
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
