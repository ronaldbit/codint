<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['archivo'])) {
        $archivoSeleccionado = $_POST['archivo'];

        if (file_exists($archivoSeleccionado)) {
            // Obtener la extensión del archivo
            $extension = pathinfo($archivoSeleccionado, PATHINFO_EXTENSION);

            if (in_array($extension, ['jpg', 'jpeg', 'png', 'gif'])) {
                // Si la extensión es de imagen, mostrar etiqueta de imagen
                echo '<div >'.$archivoSeleccionado.'</div>';
            } else {
                // Si la extensión es de código, mostrar textarea con el contenido
                $contenido = file_get_contents($archivoSeleccionado);
                echo $contenido;
            }
        } else {
            echo 'El archivo seleccionado {'.$archivoSeleccionado.'} no existe';
        }
    }
}
?>