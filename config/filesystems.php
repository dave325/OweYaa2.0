<?php
return [
    "default" => "local",
    'disks' =>[
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
            'url' => env('APP_URL').'/resources/profile_pics'
        ],
    ],
    'storage' => [
        'driver' => 'local',
        'root'   => storage_path(),
    ],

];
