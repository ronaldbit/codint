<?php
header('Content-Type: application/json'); // Establece la cabecera como JSON

$response = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['archivo'])) {
        $archivoSeleccionado = $_POST['archivo'];
 
        if ($archivoSeleccionado && file_exists($archivoSeleccionado)) {
            // Obtener la extensión del archivo
            $extension = pathinfo($archivoSeleccionado, PATHINFO_EXTENSION);

            if (in_array($extension, ['jpg', 'jpeg', 'png', 'gif'])) {
                // Si la extensión es de imagen, agregar la información al array de respuesta
                $response['tipo'] = 'imagen';
                $response['ruta'] = $archivoSeleccionado;
            }else if(in_array($extension, ['zip', 'rar'])){
                $response['tipo'] = 'zip';
                $response['contenido'] = $archivoSeleccionado;
            }else if(in_array($extension, ['mp3', 'wav'])){
                $response['tipo'] = 'music';
                $response['contenido'] = $archivoSeleccionado;
            }else if(in_array($extension, ['mp4'])){
                $response['tipo'] = 'video';
                $response['contenido'] = $archivoSeleccionado;
            }else if(in_array($extension, ['html', 'css', 'js', 'php', 'py','txt','htaccess'])){
                // Si la extensión es de código, agregar la información al array de respuesta
                $contenido = file_get_contents($archivoSeleccionado);
                $response['tipo'] = 'codigo';
                $response['contenido'] = $contenido;
            } else {
                $response['tipo'] = 'otro';
                $response['contenido'] = $archivoSeleccionado;
            }
        } else {
            // Si el archivo no existe, agregar un mensaje al array de respuesta
            $response['error'] = 'El archivo seleccionado {'.$archivoSeleccionado.'} no existe';
        }
    }
}
// Enviar la respuesta como JSON
echo json_encode($response);
?>
