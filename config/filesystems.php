<?php
return [
    "default" => "local",
    'disks' =>[
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
            'url' => env('APP_URL').'/resources/profile_pics'
        ],
        'ftp' => [
            'driver'   => 'ftp',
            'host'     => 'ftp.example.com',
            'username' => 'your-username',
            'password' => 'your-password',
            'root'     => '',
            // 'passive'  => true,
            // 'ssl'      => true,
            'timeout'  => 30,
        ],
    ],

];
