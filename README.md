<p align="center">
  <img src="https://codint.ronald-ramos.com/codint/img/codint-banner.png" width="550"/>
</p>

![Preview](https://codint.ronald-ramos.com/codint/img/codint.gif)

Codint proporciona una interfaz de administración de archivos dentro de un directorio específico y puede usarse para cargar, eliminar, obtener una vista previa, cambiar el nombre y editar sus archivos. Se puede utilizar como una aplicación independiente.

## Demo

url: https://codint.ronald-ramos.com/

## Features

Please refer to our docs at [https://codint.ronald-ramos.com/features](https://codint.ronald-ramos.com/features)

## Install

Para obtener instrucciones de instalación, consulte nuestros documentos en [https://codint.ronald-ramos.com/installation](https://codint.ronald-ramos.com/installation).

## Configuration

Nosotros amablemente proporcionamos soporte CDN para CSS y JavaScript. Simplemente use estos enlaces.
Copie y pege en el apartado de Head.
```
<link rel="stylesheet" href="https://codint.ronald-ramos.com/codint/css/codint.css"> 
```

Nos ubicamos al final de nuestra estructura y colocamos este div >
```
<div class="codint" id="codint"></div>
```

Copie estos Scripts despues del anterior codigo (div)
```
<script src="https://codint.ronald-ramos.com/codint/js/ace.js" type="text/javascript" charset="utf-8"></script> 
<script src="https://codint.ronald-ramos.com/codint/js/codint.js" type="text/javascript"></script>
```

Puede assignar una configuración inicial: 
- idioma (soporte es-en)
- modo (theme dark-light)
- font (puede hacer uso de cualquiera que tenga soporte en sus stylos)
- font Size (Usted asigna el tamaño de la fuente)
- Size (Asigne el tamaño inicial codint)
```
var settings = {
    lang: 'es',
    theme: "dark",
    font: "system-ui",
    fontSize: '13px',
    size: '350px'
};
```

Para inciar con Codint es necesario que configure el inicio:
```
codint.init('codint', settings);
```
Configurar Ace editor, inicio del editor es inportante.
```
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");
```

Para entender mejor la instalación, a continuación un ejemplo.

## Example
### Comience con esta plantilla HTML básica o modifique estos ejemplos . Esperamos que personalice nuestras plantillas y ejemplos, adaptándolos a sus necesidades.

Copie el HTML a continuación para comenzar a trabajar con un documento Bootstrap mínimo.

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Codint Example</title>

    <!-- Codint Css -->
    <link rel="stylesheet" href="https://codint.ronald-ramos.com/codint/css/codint.css"> 

  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- div:: id and class se nombran codint (es necesario para el funcionamiento) -->
    <div class="codint" id="codint"></div>

    <!-- Js Files necesarios para el funcionamiento-->
    <script src="https://codint.ronald-ramos.com/codint/js/ace.js" type="text/javascript" charset="utf-8"></script>  
    <script src="https://codint.ronald-ramos.com/codint/js/codint.js" type="text/javascript"></script>

    <!-- Configuración e inicio de Codint -->
    <script>
    //configuración inicial de Codint
    var settings = {
        lang: 'es',
        theme: "dark",
        font: "system-ui",
        fontSize: '13px',
        size: '350px'
    };
    codint.init('codint', settings);

    // Configuración inicial del editor de codio Ace  
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/html");

    </script>
  </body>
</html>
```


## Content

Una vez descargado, descomprima la carpeta comprimida para ver la estructura de Codint (compilado). Verás algo como esto:

```
codint/
├── css/
│   └── codint.css
├── js/
│   ├── ace.js
|   ├── codint.js
│   └── lang.json
└── php/
    ├── code.php
    ├── files.php
    └── save.php
```
Esta es la forma más básica de Codint: archivos precompilados para un uso rápido en casi cualquier proyecto web. Proporcionamos CSS y JS compilados ( Json.*), así como Php compilado y minimizado ( php/.php.*). Los mapas de origen CSS ( codint.*.css) están disponibles para su uso con las herramientas de desarrollo de ciertos navegadores.


## Contributing

If you're interested in contributing to this project, our docs are best places to start [https://codint.ronald-ramos.com/contributing](https://codint.ronald-ramos.com/contributing).

<hr>

<p align="center"> © 2023 Ronald Ramos. </p>
           
<p align="center">
  <a href="https://fb.com/doolpool.company" target="blank">
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="doolpool.company" height="15" width="15" />
  </a>
  <a href="https://www.youtube.com/channel/uc1jwir5d3pgcdaxb2brdh3w" target="blank"> 
    <img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg" alt="https://www.youtube.com/channel/uc1jwir5d3pgcdaxb2brdh3w" height="15" width="15" />
  </a>
</p>

