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

$filter = filterPrice($courses);
function filterPrice($filterPrice){
    $arrOfPrice = [];
    foreach($filterPrice as $key => $courses){
        $arrOfPrice []= [$courses['price']];
        if ($filter >= 600) {
         echo  $filter *0.10;
        }else {
         echo $key ;
        }       ;   
    };
 return $arrOfPrice;
   
};

print_r($filter);



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