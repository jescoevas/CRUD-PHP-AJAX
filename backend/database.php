<?php

$host="localhost";
$database="articulos_php_ajax";
$user="root";
$password="";

$connection= mysqli_connect($host, $user, $password);

if(mysqli_connect_errno()){
    echo "Error al conectar con la base de datos",
    exit();
}else{
    mysqli_select_db($connection, $database) or die("No se encuentra la base de datos");
    mysqli_set_charset($connection, "utf8");
}

?>