<p align="center">
  <img src="https://codint.ronald-ramos.com/codint/img/banner.png" width="550"/>
</p>

![Preview](https://user-images.githubusercontent.com/5447088/50716739-ebd26700-107a-11e9-9817-14230c53efd2.gif)

[![Build](https://github.com/filebrowser/filebrowser/actions/workflows/main.yaml/badge.svg)](https://github.com/filebrowser/filebrowser/actions/workflows/main.yaml)
[![Go Report Card](https://goreportcard.com/badge/github.com/filebrowser/filebrowser?style=flat-square)](https://goreportcard.com/report/github.com/filebrowser/filebrowser)
[![Documentation](https://img.shields.io/badge/godoc-reference-blue.svg?style=flat-square)](http://godoc.org/github.com/filebrowser/filebrowser)
[![Version](https://img.shields.io/github/release/filebrowser/filebrowser.svg?style=flat-square)](https://github.com/filebrowser/filebrowser/releases/latest)
[![Chat IRC](https://img.shields.io/badge/freenode-%23filebrowser-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23filebrowser)

Codint proporciona una interfaz de administración de archivos dentro de un directorio específico y puede usarse para cargar, eliminar, obtener una vista previa, cambiar el nombre y editar sus archivos. Se puede utilizar como una aplicación independiente.

## Demo

url: https://codint.ronald-ramos.com/

## Features

Please refer to our docs at [https://codint.ronald-ramos.com/features](https://codint.ronald-ramos.com/features)

## Install

For installation instructions please refer to our docs at [https://codint.ronald-ramos.com/installation](https://codint.ronald-ramos.com/installation).

## Configuration



```
> 
> <link rel="stylesheet" href="https://codint.ronald-ramos.com/codint/css/codint.css"> 
```

```
> <script src="https://codint.ronald-ramos.com/codint/js/ace.js" type="text/javascript" charset="utf-8"></script> 
> <script src="https://codint.ronald-ramos.com/codint/js/codint.js" type="text/javascript"></script>
```

```
var settings = {
    lang: 'es',
    theme: "dark",
    font: "system-ui",
    fontSize: '13px',
    size: '350px'
};
```


```
codint.init('codint', settings);
```


```
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");
```

[Authentication Method](https://filebrowser.org/configuration/authentication-method) - You can change the way the user authenticates with the filebrowser server

[Command Runner](https://filebrowser.org/configuration/command-runner) - The command runner is a feature that enables you to execute any shell command you want before or after a certain event.

[Custom Branding](https://filebrowser.org/configuration/custom-branding) - You can customize your File Browser installation by change its name to any other you want, by adding a global custom style sheet and by using your own logotype if you want.

## Contributing

If you're interested in contributing to this project, our docs are best places to start [https://filebrowser.org/contributing](https://filebrowser.org/contributing).
