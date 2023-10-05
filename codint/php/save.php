<?php
$archivo = '../'.$_POST['archivo'];
$contenido = $_POST['contenido'];

if(file_put_contents($archivo, $contenido)){
    echo 'Changes saved';
}else{
    echo 'Error saving changes';
}
?>