<?php

include('database.php');

$id = $_POST['id'];
$autor = $_POST['autor'];
$titulo = $_POST['titulo'];
$cuerpo = $_POST['cuerpo'];

$sql = "UPDATE ARTICULOS SET AUTOR = '$autor', TITULO = '$titulo', CUERPO = '$cuerpo' WHERE ID = $id";
$result = mysqli_query($connection, $sql);
echo 'Registro actualizado';

?>