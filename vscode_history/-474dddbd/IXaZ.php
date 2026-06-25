<?php
// -1
// $arr = [1,2,3,4,5,6,7];
// for($i=0; $i < count($arr); $i++) { 
//     echo $arr[$i];
// };






// -2
// $arr = [1,2,3,23,5,6,7];
// $size = count($arr);
// $inputKey = 23;
// $i=0;
// for(; $i < $size; $i++) {
//     if ($inputKey == $arr[$i]) {
//       echo $arr[$i];
//       break ;
//     } 
         
//     };

// if ($size== $i) {
//    echo  "notfound";
// }

?>
<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="get">
<input name="username" type="text" placeholder="first name">
<input name="salary" type="text" placeholder="salary">
<input type="submit" value="Click">

</form>
</body>
</html> -->


<?php
$arr=[];
$num = 0;
?>
<form method="$_GET">
    <input type="text" name="username" placehorder="enter your name" />
    <input type="text" name="salery" placehorder="enter your salery" />
    <input type="submit" value="send" />
</form>
<?php
$arr['user'.$num++] = $_GET;
for ($i=0; $i < $arr ; $i++) { 
   echo '<pre>';
print_r($arr);
echo '<pre>'; 
}

?>
<table>
    <tr>
        <th>user name</th>
        <th>salery</th>
    </tr>
    <tr>
        <!-- <td>
           
        </td>
    </tr> -->


</table>