<?php

include('database.php');

$autor = $_POST['autor'];
$titulo = $_POST['titulo'];
$cuerpo = $_POST['cuerpo'];

$sql = "INSERT INTO ARTICULOS(AUTOR, TITULO, CUERPO) VALUES('$autor','$titulo','$cuerpo')";
$result = mysqli_query($connection, $sql);
echo 'Registro insertado';

?>