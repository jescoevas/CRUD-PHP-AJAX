<?php

include('database.php');

$id = $_POST['id'];
$sql = "DELETE FROM articulos WHERE id = $id";
$result = mysqli_query($connection, $sql);
echo 'Registro eliminado';

?>