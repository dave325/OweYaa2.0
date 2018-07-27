<?php
return [
    "default" => "local",
    "cloud" => "s3",
    'disks' =>[
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
            'url' => env('APP_URL').'/resources/profile_pics'
        ],
        's3' => [
            'driver' => 's3',
            'key' => env('AWS_KEY'),
            'secret' => env('AWS_SECRET'),
            'region' => env('AWS_REGION'),
            'bucket' => env('AWS_BUCKET'),
        ],
        'ftp' => [
            'driver'   => 'ftp',
            'host'     => 'ftp.oweyaa.com',
            'username' => ' David@oweyaa.com',
            'password' => 'Dave32594!',
        
            // Optional FTP Settings...
            // 'port'     => 21,
            // 'root'     => '',
            // 'passive'  => true,
            // 'ssl'      => true,
            // 'timeout'  => 30,
        ],
    ],

];
