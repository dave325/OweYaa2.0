<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Tymon\JWTAuth\Contracts\JWTSubject as JWTSubject;
class CompanyUser extends Model implements AuthenticatableContract, AuthorizableContract, JWTSubject
{
    use Authenticatable, Authorizable;
    /**
     * The table associated with the model.
     *
     * @var string
     */
     protected $table = 'companies';
     protected $primaryKey = "compid";
     public $incrementing = false;
     public $timestamps = false;
      /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $fillable = ['compid', 'name','email','password'. 'matchNum', 'stripetoken', 'membertoken', 'phone', 'searchcomplete1', 'searchcomplete2', 'companyfav', 'type'];
    
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    
    public function getJWTCustomClaims()
    {
        return [];
    }
}
