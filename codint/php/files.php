<?php

$directorio = '../../'; // Ruta de la carpeta principal
function mostrarArchivos($directorio) {
    $archivos = scandir($directorio);
    foreach ($archivos as $archivo) {
        // Ignorar los archivos y carpetas ocultos
        if ($archivo !== '.' && $archivo !== '..') {
            $rutaArchivo = $directorio . $archivo; // 
            if (is_dir($rutaArchivo)) {
                // Es una carpeta, llamar recursivamente a la función para mostrar los archivos dentro de la carpeta
                echo '<li class="__console_editor_carpeta"><div onclick="toggleList(this)" style="color: #797bf2;display: flex; flex-direction: row; align-items: center;"> <span class="__console_editor_icono"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="__console_svg"> <path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/></svg></span>'.$archivo.' <i class="fa-solid fa-diagram-successor" style="margin-left: auto;"></i> </div> ';
                
                echo '<ul class="__console_editor_archivos" style="color: white;" > ';
                mostrarArchivos($rutaArchivo . '/');
                echo '</ul>';
                echo '</li>';
            } else {
                // Es un archivo, agregar enlace para abrirlo en el editor
                echo '<li class="__console_editor_file_"><span class="__console_editor_icono"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="__console_svg"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"/></svg></span> <p onclick="open_file(\''.rawurldecode($rutaArchivo) . '\')">' . $archivo . '</p></li>';
        
           }
        }
    }
}

echo '<ul class="__console_editor__">'; 

mostrarArchivos($directorio); 

echo '</ul>';

?>