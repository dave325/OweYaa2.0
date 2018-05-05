<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use \SplPriorityQueue;

/*
TODO authenticate
 */

class CompanyInternMatch extends Controller
{

    private $skillsList;
    private $wantedSkills;
    private $pq;
    private $companyLocation = array(40, -74);

    /**
     * isValid
     *
     * Check if the user is a valid user
     */

    private function isValid()
    {
        try {

            // If the user cannot be authenticated, then the user doesn't
            // exist. The response states that the user is not found.

            //app auth uses the header security token.
            if (AuthController::currUser() == null) {

                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            // If the Token expired, the response states that the token has
            // expired, and the exception status code is also returned.
            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            // If the Token is invalid, the response states that the token is
            // invalid, and the exception status code is also returned.
            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            // If the Token is absent, the response states that the token is
            // absent, and the exception status code is also returned.
            return response()->json(['token_absent'], $e->getStatusCode());

        }

        return true;
    }
    public function test(Request $request)
    {
        if ($isValid = $this->isValid()) {
            $user = User::with('membershiptoken')->where("username", "=",AuthController::currUser['username'])->get();
            if($user['membershiptoken']['stripetoke'] === null){
                return response()->json(['success' => false]);
            }
            $this->pq = new SplPriorityQueue();
            $this->skillsList = array("php", "nodejs", "agile");
            $this->wantedSkills = array('linux', 'c#');
            $filtered = $this->filter(true, 500);

            for ($i = 0; $i < count($filtered); $i++) {
                $this->pq->insert($filtered[$i]->username, $this->getSkillPoints($filtered[$i]->skill->pluck('skill')->toArray()));
            }

            $ret = array();
            while (!$this->pq->isEmpty()) {
                array_push($ret, $this->pq->extract());
            }

            return json_encode($ret);
        }else{
            return response()->json(compact($ret));
        }
    }

    private function getSkillPoints($internSkills)
    {
        $points = 0;

        for ($i = 0; $i < count($this->skillsList); $i++) {
            $hasSkill = array_search($this->skillsList[$i], $internSkills);
            if ($hasSkill !== false) {
                switch ($i) {
                    case 0:$points += 4;
                        break;
                    case 1:$points += 3;
                        break;
                    case 2:$points += 2;
                        break;
                    default:$points += 1;
                        break;
                }
            }

        }

        return $points;

    }

    private function filter($attendedCollFlag, $maxDistance)
    {

        $compLatitude = $this->companyLocation[0];
        $compLongitude = $this->companyLocation[1];

        $users = User::with('education', 'contactinfo', 'skill')

            ->whereHas('contactinfo',
                function ($query) use ($compLatitude, $compLongitude, $maxDistance) {
                    $query->whereRaw("
            6371 * 2 * ASIN(SQRT(
            POWER(SIN(($compLatitude - abs(latitude)) * pi()/180 / 2),
            2) + COS($compLatitude * pi()/180 ) * COS(abs(latitude) *
            pi()/180) * POWER(SIN(($compLongitude - longitude) *
            pi()/180 / 2), 2) )) < $maxDistance * 1.60934
            ");
                })

            ->whereHas('education',
                function ($query) use ($attendedCollFlag) {
                    if (!$attendedCollFlag) {
                        return;
                    }
                    $query->where('attendedcollege', '=', '$attendedCollFlag');

                })->get();

        /*
        var_dump(DB::select(DB::raw("
        SELECT d AS  6371 * 2 * ASIN(SQRT(
        POWER(SIN(($compLatitude - abs(latitude)) * pi()/180 / 2),
        2) + COS($compLatitude * pi()/180 ) * COS(abs(latitude) *
        pi()/180) * POWER(SIN(($compLongitude - longitude) *
        pi()/180 / 2), 2) )) FROM contactinfo
        ")));
         */

        return $users;
    }
}
