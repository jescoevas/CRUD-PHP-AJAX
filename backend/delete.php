<?php

include('database.php');

$id = $_POST['id'];
$sql = "DELETE FROM ARTICULOS WHERE ID = $id";
$result = mysqli_query($connection, $sql);
echo 'Registro eliminado';

?>