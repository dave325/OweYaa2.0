<?php
return [
    'disks' =>[
        'local' => [
            'driver' => 'local',
            'root' => storage_path('/resources/profile_pics'),
            'url' => env('APP_URL').'/resources/profile_pics',
            'visibility' => 'public',
        ],
    ],
];
