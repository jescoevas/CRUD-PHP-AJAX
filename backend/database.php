<?php

$host="bopvokognbfbykurhvqb-mysql.services.clever-cloud.com";
$database="bopvokognbfbykurhvqb";
$user="uacv7b2uqxh6jbl7";
$password="JHgFyXCVKhc5DOcJkzUt";

$connection= mysqli_connect($host, $user, $password);

if(mysqli_connect_errno()){
    echo "Error al conectar con la base de datos",
    exit();
}else{
    mysqli_select_db($connection, $database) or die("No se encuentra la base de datos");
    mysqli_set_charset($connection, "utf8");
}

?>