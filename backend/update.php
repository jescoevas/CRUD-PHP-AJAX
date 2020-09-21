<?php

include('database.php');

$id = $_POST['id'];
$autor = $_POST['autor'];
$titulo = $_POST['titulo'];
$cuerpo = $_POST['cuerpo'];

$sql = "UPDATE articulos SET autor = '$autor', titulo = '$titulo', cuerpo = '$cuerpo' WHERE id = $id";
$result = mysqli_query($connection, $sql);
echo 'Registro actualizado';

?>