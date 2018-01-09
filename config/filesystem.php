<?php
return [
    'disks' =>[
        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/resources/profile_pics'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'private',
        ],
    ],
];
