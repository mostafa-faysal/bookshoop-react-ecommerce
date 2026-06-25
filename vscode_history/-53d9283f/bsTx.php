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

function filterName($filterName){
    foreach($filterName as $courses){
    
    };
    return $filterName;
}

print_r(filterName($courses));





?>