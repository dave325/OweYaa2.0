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
     protected $table = 'militaryuser';
     protected $primaryKey = "name";
     public $incrementing = false;
     public $timestamps = false;
      /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $fillable = ['name','email','location', 'phone', 'career1', 'career2', 'desired1', 'desired2', 'prev1', 'prev2', 'token'];
    
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    
    public function getJWTCustomClaims()
    {
        return [];
    }
}
