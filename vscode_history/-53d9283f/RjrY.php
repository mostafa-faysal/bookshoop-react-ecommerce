<?php
$courses=[
    'courses1'=>[
        'name'=>'programing',
        'price'=>'1000',



    ],
    'courses2'=>[
        'name'=>'english',
        'price'=>'700',



    ],
    'courses3'=>[
        'name'=>'oop',
        'price'=>'500',



    ],
    'courses4'=>[
        'name'=>'css',
        'price'=>'250',



    ],

];
$filter = filterName($courses);
function filterName($filterName){
    $arr = [];
    foreach($filterName as $key => $courses){
        $arr += [$courses['name']]; 
    };
    return $arr;
}

print_r(filterName($courses));





?>