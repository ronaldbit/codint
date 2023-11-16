/* ***** COMENZAR BLOQUE DE LICENCIA *****
  * Distribuido bajo licencia BSD:
  *
  * Copyright (c) 2023, Ronald Ramos - Codint
  * Reservados todos los derechos.
  *
  * Redistribución y uso en formato fuente y binario, con o sin
  * modificación, están permitidas siempre que se cumplan las siguientes condiciones:
  * * Las redistribuciones del código fuente deben conservar los derechos de autor anteriores.
  * aviso, esta lista de condiciones y el siguiente descargo de responsabilidad.
  * * Las redistribuciones en formato binario deben reproducir los derechos de autor.
  * aviso, esta lista de condiciones y el siguiente descargo de responsabilidad en el
  * documentación y/u otros materiales proporcionados con la distribución.
  * * Ni el nombre de Ronald Ramos ni el Codint
  * Los nombres de sus colaboradores pueden usarse para respaldar o promocionar productos.
  *derivado de este software sin permiso previo específico por escrito.
  *
  * ESTE SOFTWARE ES PROPORCIONADO POR LOS TITULARES DE DERECHOS DE AUTOR Y COLABORADORES "TAL CUAL" Y
  * CUALQUIER GARANTÍA EXPRESA O IMPLÍCITA, INCLUYENDO, PERO NO LIMITADO A, LA IMPLÍCITA
  * LAS GARANTÍAS DE COMERCIABILIDAD E IDONEIDAD PARA UN PROPÓSITO PARTICULAR SON
  * DESCARGO DE RESPONSABILIDAD. EN NINGÚN CASO RONALD RAMOS SERÁ RESPONSABLE DE NINGÚN
  * DAÑOS DIRECTOS, INDIRECTOS, INCIDENTALES, ESPECIALES, EJEMPLARES O CONSECUENCIALES
  * (INCLUYENDO, PERO NO LIMITADO A, LA ADQUISICIÓN DE BIENES O SERVICIOS SUSTITUTOS;
  * PÉRDIDA DE USO, DATOS O GANANCIAS; O INTERRUPCIÓN DEL NEGOCIO) CUALQUIER CAUSA Y
  * SOBRE CUALQUIER TEORÍA DE RESPONSABILIDAD, YA SEA POR CONTRATO, RESPONSABILIDAD ESTRICTA O AGRAVIO
  * (INCLUYENDO NEGLIGENCIA U OTRA MANERA) QUE SURJAN DE CUALQUIER MANERA DEL USO DE ESTE
  * SOFTWARE, AUNQUE SE LE ADVIERTE DE LA POSIBILIDAD DE TALES DAÑOS.
  *
  * ***** FINALIZAR BLOQUEO DE LICENCIA ***** */

/**
  * Definir un módulo junto con una carga útil.
  * Módulo @codint un nombre para la carga útil
  * @codint carga útil una función para llamar con parámetros (require, exports, module)
  */


const codint = {
    init: function(elementId, config) {
        const codint = document.getElementById(elementId); 
        if (codint) {
            createDivs();
            const codintLn = config.lang || 'en';
            const codintGetLang = config.getLang || 'codint/js/lang.json';
            
            const codintTheme = config.theme || 'light';
            const codintFont = config.font || 'auto';
            const codintFontSize = config.fontSize || '14px';
            const codintSize = config.size || '250px'; 
            const codintContent = config.content || false;
            const codintzIndex = config.zIndex || 100;
            
            const codintFiles = config.getFiles || 'codint/php/files.php';
            const codintFile = config.setFile || 'codint/php/save.php';
            const codintCode = config.getCode || 'codint/php/code.php';
            const codintiniFile = config.iniFile || 'index.php';
            
            codint.setAttribute("data-mode", codintTheme);
            codint.setAttribute("data-lang", codintLn);
            
            codint.style.fontFamily= codintFont;
            codint.style.fontSize = codintFontSize;
            codint.style.zIndex = codintzIndex;
            
            const content = document.querySelector('._codint-content');
            content.setAttribute("data-mode", codintContent);
            
            content.style.height = codintSize;
            
            open_file(codintiniFile);
            
            codintLang(codintLn); 
            
            fetch(codintFiles).then(response => response.text()).then(data => { 
                document.querySelector('._codint-content_files_files_tem').innerHTML = data;
                const container = document.querySelector('.nav-links');
                container.addEventListener('click', function (event) {
                    const target = event.target.closest('.toggleable');
                    if (target) { toggleList(target); }
                });
                
            }).catch(error => { console.error('Error:', error); });
            
            const codintEditor = typeof config.editor !== 'undefined' ? config.editor : true;
            //textarea - vs4 :: future vs5 editor integrad
            if(codintEditor){
                //console.log(codintEditor+' :: editor activo :: Ace editor');
            }else{
                //console.log(codintEditor+' :: editor no activo :: usando Textarea editor');
            } 
            
        } else { console.error(`Element with ID "${elementId}" not found.`); }
    },
    theme: function(elementId, config) {  
        const codint = document.getElementById(elementId);
        if (codint) {
            console.log('Codint > The mode was changed to '+config.theme);
            codint.setAttribute("data-mode", config.theme);
        } else {
            console.error(`Element with ID "${elementId}" not found.`);
        }
    },
    lang: function(elementId, lang) { 
        const codint = document.getElementById(elementId);
        codint.setAttribute("data-lang", lang);
        if (lang) {
            console.log('Codint > Language was changed to '+lang);
            fetch('codint/js/lang.json').then((response) => response.json())
                .then((translations) => {
                  const langTexts = translations[lang] || translations['en'];
                  document.querySelector('._codint-menu-1').textContent = langTexts.codintFiles;
                  document.querySelector('._codint-menu-2').textContent = langTexts.codintConsole;
                  document.querySelector('._codint-menu-3').textContent = langTexts.codintSettings;
                  
                  document.querySelector('.logo_name').textContent = langTexts.codintFiles; 
                  document.querySelector('.profile_name').textContent = langTexts.codintTextSave;
                  document.querySelector('.job').textContent = langTexts.codintTextSaveMini;
                   
                })
                .catch((error) => { console.error('Error:', error); });
        } else {
            console.error(`The "${lang}" element is not defined.`);
        }
    },
};

function codintLangXx(){
    if (document.querySelector('.codint').getAttribute('data-lang') === 'es') { 
    	codint.lang('codint', 'en');
    } else {
        codint.lang('codint', 'es');
    }
}
function codintLang(value){ codint.lang('codint', value); }


function codintThemeXx(){ 
    if (document.querySelector('.codint').getAttribute('data-mode') === 'light') { 
    	codint.theme('codint', { theme: 'dark' });
    } else {
    	codint.theme('codint', { theme: 'light' });
    }
}     

function codintModeXx(){
    if(document.querySelector('._codint-content').getAttribute('data-mode') == 'false' ){ 
        document.querySelector('._codint-content').setAttribute('data-mode', 'true');
    }else{ 
        document.querySelector('._codint-content').setAttribute('data-mode', 'false'); 
    }
} 

function createDivs() {

    var divTop = document.createElement("div");
    divTop.classList.add("_codint-top");
                
    var divMenu = document.createElement("div");
    divMenu.classList.add("_codint-menu"); 
                
        //menu izquierda
        var divMenu1 = document.createElement("div");
        divMenu1.classList.add("_codint-menu-i");
        divMenu.appendChild(divMenu1);
                
                var divMenu1op1 = document.createElement("p");
                divMenu1op1.classList.add("_codint-menu-op-1", "op"); 
                divMenu1op1.classList.add("_codint-active");
                divMenu1op1.addEventListener('click', function () { showDiv('_codint-content_files', this);});
                divMenu1op1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"> <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg><span class="_codint-menu-1" >Archivos</span>';
                divMenu1.appendChild(divMenu1op1);
                
                var divMenu1opbarr1 = document.createElement("p");  
                divMenu1opbarr1.innerHTML = '<p>&nbsp;|&nbsp;</p>';
                divMenu1.appendChild(divMenu1opbarr1);
                 
                var divMenu1op2 = document.createElement("p");
                divMenu1op2.classList.add("_codint-menu-op-2", "op"); 
                divMenu1op2.addEventListener('click', function () { showDiv('_codint-content_consola', this); });
                divMenu1op2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg> <span class="_codint-menu-2" >Consola</span>';
                divMenu1.appendChild(divMenu1op2);
                
                var divMenu1opbarr2 = document.createElement("p");
                divMenu1opbarr2.innerHTML = '<p>&nbsp;|&nbsp;</p>';
                divMenu1.appendChild(divMenu1opbarr2);
                
                var divMenu1op3 = document.createElement("p");
                divMenu1op3.classList.add("_codint-menu-op-3", "op"); 
                divMenu1op3.addEventListener('click', function () { showDiv('_codint-content_settings', this); });  
                divMenu1op3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"> <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg> <span class="_codint-menu-3" >Configuraciónes</span>';
                divMenu1.appendChild(divMenu1op3);
                   
                
        //menu centro
        var divMenu2 = document.createElement("div");
        divMenu2.classList.add("_codint-menu-c");
        divMenu.appendChild(divMenu2);
                
            var divMenu2opC = document.createElement("p");
            divMenu2opC.classList.add("_codint-menu-op-c");
            divMenu2opC.id = "_codint-menu-op-c";
            divMenu2.appendChild(divMenu2opC);
                
        //menu derecha
        var divMenu3 = document.createElement("div");
        divMenu3.classList.add("_codint-menu-d");
        divMenu.appendChild(divMenu3);
            //text1  
            var divMenu3op1 = document.createElement("p");
            divMenu3op1.classList.add("_codint-menu-op-10", "op"); 
            divMenu3op1.textContent = "Vs. 3.2.4.0";
            divMenu3.appendChild(divMenu3op1);
            //space    
            var divMenu3opBar = document.createElement("p");
            divMenu3opBar.classList.add("_codint-menu-op-10");
            divMenu3opBar.innerHTML = '<p>&nbsp;|&nbsp;</p>';
            divMenu3.appendChild(divMenu3opBar);
            //text2    
            var divMenu3op2 = document.createElement("p");
            divMenu3op2.classList.add("_codint-menu-op-11", "op"); 
            divMenu3op2.textContent = "200.20.20.111";
            divMenu3.appendChild(divMenu3op2);
            //space    
            var divMenu3opBarr = document.createElement("p"); 
            divMenu3opBarr.classList.add("_codint-menu-op-11");
            divMenu3opBarr.innerHTML = '<p>&nbsp;|&nbsp;</p>';
            divMenu3.appendChild(divMenu3opBarr);
            //mode   
            var divMenu3op3 = document.createElement("p");
            divMenu3op3.classList.add("_codint-menu-op-12", "op"); 
            divMenu3op3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"> <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>';
            divMenu3op3.addEventListener('click', codintThemeXx );
            divMenu3.appendChild(divMenu3op3);
            //space  
            var divMenu3opBarrr = document.createElement("p"); 
            divMenu3opBarrr.innerHTML = '<p>&nbsp;|&nbsp;</p>';
            divMenu3.appendChild(divMenu3opBarrr);
            //expan   
            var divMenu3op4 = document.createElement("p");
            divMenu3op4.classList.add("_codint-menu-op-13", "op"); 
            divMenu3op4.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>';
            divMenu3op4.addEventListener('click', codintModeXx );
            divMenu3.appendChild(divMenu3op4);
            //space
            var divMenu3opBarrrr = document.createElement("p"); 
            divMenu3opBarrrr.innerHTML = '<p>&nbsp;|&nbsp;</p>';
            divMenu3.appendChild(divMenu3opBarrrr);
            //lang   
            var divMenu3op5 = document.createElement("p");
            divMenu3op5.classList.add("_codint-menu-op-14", "op"); 
            divMenu3op5.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"> <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/></svg>';
            divMenu3op5.addEventListener('click', codintLangXx ); 
            divMenu3.appendChild(divMenu3op5);
            //space
            var divMenu3opBarrrrr = document.createElement("p"); 
            divMenu3opBarrrrr.innerHTML = '<p>&nbsp;|&nbsp;</p>';
            divMenu3.appendChild(divMenu3opBarrrrr);
            //info    
            var divMenu3op6 = document.createElement("p");
            divMenu3op6.classList.add("_codint-menu-op-15", "op"); 
            divMenu3op6.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 192 512"> <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>';
            divMenu3.appendChild(divMenu3op6);
                
                
    //contenido
    var divContent = document.createElement("div");
    divContent.classList.add("_codint-content"); 
    divContent.setAttribute("data-mode", "false");
                
        // Crear un div para los archivos
        var divFiles = document.createElement("div");
        divFiles.id = "_codint-content_files";
        divFiles.classList.add("_codint-content_files");
        divFiles.classList.add("_codint-visible"); 
        divContent.appendChild(divFiles);
                
            // Crear divs adicionales dentro de 'files'
            var subDiv1 = document.createElement("div");
            subDiv1.classList.add("_codint-content_files_files");
            subDiv1.classList.add("sidebar"); 
            subDiv1.classList.add("close");
            subDiv1.innerHTML = '<div class="logo-details"> <i class="bx-menu"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></i>  <span class="logo_name">Files</span>   </div> <div class="_codint-content_files_files_tem" ></div> <div class="profile-details"> <div class="profile-content"><img src="https://codint.ronald-ramos.com/logo.jpg" alt="profileImg"></div><div class="name-job"> <div class="profile_name">Update file</div><div class="job">save what you edited</div></div></div> ';
            divFiles.appendChild(subDiv1); 
            
            var subDiv2 = document.createElement("div");
            subDiv2.classList.add("_codint-content_files_code"); 
            subDiv2.innerHTML = '<div id="editor" style="width: 100%;height: 100%;align-items: center;display: flex;justify-content: center;" ></div>';
            divFiles.appendChild(subDiv2); 
                
        // Crear un div para la consola
        var divConsola = document.createElement("div");
        divConsola.id = "_codint-content_consola";
        divConsola.classList.add("_codint-content_consola");
        divConsola.classList.add("_codint-oculto");
        divConsola.innerHTML = '<div class="console-mensaje"></div>';
        divContent.appendChild(divConsola);
                
        // Crear un div para las configuraciones
        var divSettings = document.createElement("div");
        divSettings.id = "_codint-content_settings";
        divSettings.classList.add("_codint-content_settings");
        divSettings.classList.add("_codint-oculto");
        divSettings.textContent = "Configuraciones";
        divContent.appendChild(divSettings);
                
    // Agregar los divs al div flotante
    document.getElementById("codint").appendChild(divTop);
    document.getElementById("codint").appendChild(divMenu);
    document.getElementById("codint").appendChild(divContent);
                
}
 
function open_file(filename) {
    const editorElement = document.getElementById('editor');
    editorElement.innerHTML = ''; // Limpiar el contenido del editor
    
    document.getElementById('_codint-menu-op-c').textContent = ">_ Editor > " + filename; 
    console.log("Codint > Open file " + filename);  
    
    fetch('codint/php/code.php', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', }, body: 'archivo=' + encodeURIComponent(filename), })
    .then(response => response.json()) // Parsea la respuesta como JSON
    .then(data => {
        if (data.tipo === 'imagen') {
                // Si es una imagen, crear un elemento img
                const imgElement = document.createElement('img');
                imgElement.src = data.ruta;
                imgElement.style = 'width: 50%;max-width: 300px;border-radius: 5px;';
                editorElement.appendChild(imgElement);
        } else if (data.tipo === 'codigo') {
                // Si es código, crear un elemento textarea
                const textareaElement = document.createElement('textarea');
                textareaElement.id = 'editor-code';
                textareaElement.style = ' width: 100%; height: 100%; background: none; padding: 5px; resize: none;border: none;outline: none; color: var(--color-texto);';
                textareaElement.value = data.contenido;
                editorElement.appendChild(textareaElement);
        }else if (data.tipo === 'music') {
                // Si es música, crear un elemento de audio
                const audioElement = document.createElement('audio');
                audioElement.controls = true;
                audioElement.style = 'width: 90%;';
                audioElement.innerHTML = '<source src="' + data.contenido + '" type="audio/mp3">';
                editorElement.appendChild(audioElement);
        }else if (data.tipo === 'video') {
                // Si es video, crear un elemento de video
                const videoElement = document.createElement('video');
                videoElement.controls = true;
                videoElement.style = 'width: 100%; height: 100%;';
                videoElement.innerHTML = '<source src="' + data.contenido + '" type="video/mp4">';
                editorElement.appendChild(videoElement);
        }else if (data.tipo === 'zip') { 
                const divElement = document.createElement('div');
                divElement.style = 'width: 100%;height: 100%;background: none;padding: 5px;resize: none;border: none;outline: none;display: flex;align-items: center;justify-content: center;flex-direction: column;';
                divElement.innerHTML = '<span style="padding: 5px;" ><svg xmlns="http://www.w3.org/2000/svg" height="8em" viewBox="0 0 384 512"> <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM96 48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm-6.3 71.8c3.7-14 16.4-23.8 30.9-23.8h14.8c14.5 0 27.2 9.7 30.9 23.8l23.5 88.2c1.4 5.4 2.1 10.9 2.1 16.4c0 35.2-28.8 63.7-64 63.7s-64-28.5-64-63.7c0-5.5 .7-11.1 2.1-16.4l23.5-88.2zM112 336c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"/></svg></span>' + data.contenido;
                editorElement.appendChild(divElement);
        }else if (data.tipo === 'otro') {
            const divElement = document.createElement('div');
            divElement.style = 'width: 100%;height: 100%;background: none;padding: 5px;resize: none;border: none;outline: none;display: flex;align-items: center;justify-content: center;flex-direction: column;';
            divElement.innerHTML = '<span style="padding: 5px;" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"> <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-8.8-7.2-16-16-16z"/></svg></span>' + data.contenido;
            editorElement.appendChild(divElement);     
        } else { console.error('Error:' + data.error); }
    })
    .catch(error => console.error('Error:'+ error));
}

function toggleList(element) { element.classList.toggle("showMenu"); }

function showDiv(divId, button) {
    // Remover la clase _codint-active de todos los botones
    var buttons = document.querySelectorAll('._codint-menu-i p');
        buttons.forEach(function (btn) {
            btn.classList.remove('_codint-active');
        });
        // Agregar la clase _codint-active al botón seleccionado
        button.classList.add('_codint-active');
    // Ocultar todos los elementos dentro del div con la clase _codint-content
    var divContent = document.querySelector('._codint-content');
    var elementsToHide = divContent.querySelectorAll('._codint-visible');
        elementsToHide.forEach(function (element) {
            element.classList.remove('_codint-visible');
            element.classList.add('_codint-oculto');
        });
        // Mostrar solo el div seleccionado
    var selectedDiv = document.getElementById(divId);
        selectedDiv.classList.add('_codint-visible');
        selectedDiv.classList.remove('_codint-oculto');
}
//consola
var valAutoConsol = 1;
function logToConsole(message, isTyppe) {
    var numero = valAutoConsol.toString().padStart(3, "0");
    const consoleContainer = document.querySelector(".console-mensaje"); 
    const logEntry = document.createElement("p"); 
    logEntry.classList.add(isTyppe);
    logEntry.innerHTML = `<span style="white-space: nowrap;">${numero} >_</span><span>${message}</span>`;
    consoleContainer.appendChild(logEntry);
    
    valAutoConsol++;
   
    var n = parseInt(valAutoConsol);
    var num = n.toString().padStart(3, "0");
    // Borrar inputs anteriores
    const previousInputs = document.querySelectorAll(".console-input-container");
    previousInputs.forEach(input => input.remove());
    
    const inputContainer = document.createElement("p");
    inputContainer.classList.add("console-input-container");
    
    const divContainer = document.createElement("div");
    divContainer.classList.add("cmdLine");
    divContainer.classList.add("actmd");
    divContainer.innerHTML= `${num} >`;
    
    const divContainerConsole = document.createElement("div");
    divContainerConsole.classList.add("ipcmd"); 
    divContainerConsole.setAttribute("contenteditable", true);
    divContainerConsole.setAttribute("data-action", "enter");
    divContainerConsole.setAttribute("spellcheck", false);
    divContainerConsole.addEventListener("keypress", function (event) {
        if (event.key === "Enter") { processInput(divContainerConsole.textContent); }
    });
    
    inputContainer.appendChild(divContainer);
    divContainer.appendChild(divContainerConsole);
    
    consoleContainer.appendChild(inputContainer);
    inputContainer.scrollIntoView({ behavior: "smooth", block: "end" });
}

function processInput(inputValue) {
    try {  const result = eval(inputValue); } catch (error) {  console.error(error); }
}


document.addEventListener("DOMContentLoaded", function() { 
    console.log = function (message) { logToConsole(message,'Mensaje'); };
    console.warn = function (message) { logToConsole(message, 'Warning'); };
    console.error = function (message) { logToConsole(message,'Error'); };
    
    console.log('Codint 4.5.156 (default:fron30dxash, 10 August 2023, 24:00 pm)');
    console.log('[© Ronald Ramos - <a herf="https://ronald-ramos.com">Web</a>] - {License for free use.} [awarded to 200.37.57.131]');
    console.warn('Do not delete these lines of code for corresponding rights and int-console information.');
    console.log('This version includes a terminal and a code editor. Future versions will include a section for console settings, and it will be possible to interact with the terminal');
    console.log('');
    
    function capturarError(message, source, lineno, colno, error) {
        console.error(error.stack);
        return true;
    }window.onerror = capturarError;
 
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    });
});
  
