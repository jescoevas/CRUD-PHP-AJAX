<?php

include('database.php');

$sql = 'SELECT * FROM articulos';
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