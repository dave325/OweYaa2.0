<?php
return [
    'default' => 'local',
    'disks' =>[
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app/resources/profile_pics'),
            'url' => env('APP_URL').'resources/profile_pics',
            'visibility' => 'public',
        ],
    ],
];
