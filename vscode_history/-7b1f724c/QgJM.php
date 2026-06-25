<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    div{
        background-color: red;
    display: flex;
    justify-content: center;
    hight: 300px;
    height: 300px;
    width: 50%;
    margin-left: 26%;
    }
    h1{
    margin-left: -39%;
    color: wheat;
    margin-top: 39px;
    }
    .num2{
        padding: 20px;
        border-radius: 3;
        background: darkorange
    }
    .num1 {

        padding: 20px;
        border-radius: 3;
        background: darkorange
    }
    .sub{

        padding: 10px;
        border-radius: 3;
        background-color: blue;
        margin: 12px;
    }
    select{
        position: fixed;
    padding: 5px;
    margin-left: 6px;
    margin-top: 39px;
    background-color: blueviolet;
    }
    b{
        color: yellow;
    margin-top: 117px;
    margin-right: 17px
    }
    h2{
        color: yellow;
    margin-right: -28px;
    margin-top: 76px;
    font-size: revert
    }
</style>


</head>
<body>
   <div>
   <form method="post">
    <input class="num2" type="text" name="num1">
    <select name="method">
        <option>select !</option>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
        <option>%</option>
    </select>
    <input class="num1" type="text" name="num2">
    <br>
    <input class="sub" type="submit" name="submit" aria-labelledby="=">

</form>
<?php
    $num1=$_POST["num1"];
    $num2=$_POST["num2"];
    $method=$_POST["method"];

if (isset($_POST["submit"])) {

    if ($num1 != "" && $num2 != "") {
        switch ($method) {
            case 'select !':
                echo "<div> <h2>blease select !!</h2></div>";
                break ;
            case '+':
               echo "<div> <h1>=".( (int)($num1) +(int)($num2) )."</h1></div>";
               break ;
               case '-':
                echo  "<div><h1>=".((int)($num1) -(int) ($num2))."</h1></div>";
                break ;
                case '*':
                    echo "<div> <h1>=".( (int)($num1) * (int) ($num2))."</h1></div>";
                    break ;
                    case '/':
                        echo "<div> <h1> =".((int)($num1 )/ (int)($num2) )."</h1></div>";
                        break ;
                        case '%':
                            echo "<div><h1> =".((int)($num1) % (int)($num2))."</h1></div>";
                            break ;
        }
    }
    else {
        echo "<div><h2>please type something !</h2></div>";
    }
   
}


?>
   </div> 
</body>
</html>




