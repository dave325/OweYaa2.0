<?php
return [
    "default" => "local",
    "cloud" => "s3",
    'disks' =>[
        'local' => [
            'driver' => 'local',
            'root' => dirname(storage_path('app'),5) . '/public_html/update/assets/images/uploads'
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
