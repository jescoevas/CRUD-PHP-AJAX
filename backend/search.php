<?php

include('database.php');

$val = $_POST['val'];

$sql = "SELECT * FROM articulos WHERE titulo LIKE '%$val%'";
$result = mysqli_query($connection, $sql);
if(!$result){
    die('Error en la consulta -> '.mysqli_error($connection));
}
$json = array();
while($row = mysqli_fetch_array($result)){
    $json[] = array('id' => $row['id'],'autor' => $row['autor'], 'titulo' => $row['titulo'], 'cuerpo' => $row['cuerpo']);
}
$jsonstring = json_encode($json);
echo $jsonstring;

?>