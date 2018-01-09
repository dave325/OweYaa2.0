<?php
return [
    'disks' =>[
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app/resources/profile_pics'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'public',
        ],
    ],
];
