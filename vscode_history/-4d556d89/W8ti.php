<?php
$courses=[
    'courses1'=>[
        'name'=>'programing$$$$',
        'price'=>'1000',



    ],
    'courses2'=>[
        'name'=>'english%%%%',
        'price'=>'700',



    ],
    'courses3'=>[
        'name'=>'oop**',
        'price'=>'500',



    ],
    'courses4'=>[
        'name'=>'css@@@',
        'price'=>'250',



    ],

];

function filterName($filterName){
    $arr = [];
    foreach($filterName as $key => $courses){
        $arr []= [$courses['name']]; 
    };
    return $arr;
};
$filter = filterName($courses);
print_r($filter);


$spacialCracater = $filter



function spicalCracter($cracter){
    
}















$filterPrice = filterPrice($courses);
function filterPrice($filterPrice){
    $arrOfPrice = [];
    foreach($filterPrice as $key => $courses){
        $arrOfPrice []= [$courses['price']];
        if ($filterPrice >= 600) {
         print_r($filterPrice  * 0.10)  ;
        }else {
         print_r($filterPrice ) ;
        };   
    };
 return $arrOfPrice;
   
};

print_r($filterPrice);



// $filterOne = filterOneName($name);
// function filterOneName($nameONe){
//     $array = [];
//     foreach ($nameONe as $key => $value) {
//     if ($nameONe=="@") {
//     $arry []= [$value];
//     };
//     };
//     return $array ;

// };
// print_r($filterOne) ;




?>