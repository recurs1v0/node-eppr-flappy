# EPPR 2020 <a href="https://eppr.link" target="_blank"> https://eppr.link </a>

<a href="https://eppr.link" target="_blank">
  <img src="https://git.eppr.link/assets/rounded-logo.png" alt="NODE EPPR CHAT" width="100%" height="auto" border="10" />
</a>

# node-eppr-flappy
Flappy es un Proyecto de Clase para NodeJS con Express (RaspberryPi).

Utilizamos Socket.IO para mantener un registro de puntaje máximo durante cada sesión.

# Instrucciones

Antes de iniciar, comprueba que estás en la carpeta correcta con el comando:
```
pwd
```

En tu pantalla se mostrará el directorio actual, el cuál debe ser:
```
/home/pi/eppr/clases/206/
```

Para ingresar a la carpeta de "clases" usa el siguiente comando:
```
cd eppr/clases/
```

Si no lo has hecho aún, crea una carpeta nueva con el comando:
```
sudo mkdir 206
```

## Paso 1

Clona este proyecto mediante github con el comando:
```
sudo curl -sSL git.eppr.link/flappy | sh
```
El comando curl llama a nuestro repositorio privado de la EPPR.

El resultado es un comando 'git clone' con dirección al repositorio más reciente de este proyecto.

## Paso 2

Entra a la carpeta descargada con el comando:
```
cd node-eppr-flappy/
```
Recuerda utilizar la tecla TAB para auto-completar el nombre de los archivos y carpetas.

## Paso 3

Configura un nuevo proyecto de NPM con el comando:
```
sudo npm init
```
Puedes utilizar los valores default presionando Enter en cada paso del tutorial.

La recomendación de la Escuela es siempre llenar el campo de Descripción, Keywords y Autor.

## Paso 4

Verifica que se ha creado un nuevo archivos llamado 'package.json' con el comando:
```
ls -lh
```
Este archivo fue creado en el **Paso 3**

## Paso 5

Instala las librerías necesarias para este proyecto con el comando:
```
sudo npm install --save express ejs socket.io qrcode-terminal
```
Este paso tardará cerca de 1 minuto e instalará todos los paquetes mencionados arriba adentro de una carpeta llamada 'node_modules'

Si aparece un mensaje de 'minor update available' puedes ignorarlo.

Al finalizar este paso, se actualizará el archivo 'package.json' con la información de los paquetes instalados.

## Paso 6

Inicia el servidor NodeJS con el comando:
```
node index
```

Si todo ha funcionado bien, aparecerá un QR en tu pantalla.

Para poder accesar, es necesario que tu dispositivo esté en la misma red Wifi que tu Raspberry Pi.

Un juego competitivo no es lo mismo si estás solo, ingresa desde varios dispositivos móviles conectados a la misma red Wifi.

Juega, avanza en niveles y mira como se actualiza el marcador en tiempo real.

# Extras
## Cambiar dueño de archivos para editarlos

Quizás deseas modificar el archivo 'index.js' y posiblemente también el archivo 'views/index.ejs' 
```
sudo chown pi:root index.js views/index.ejs
```

## Abrir los archivos con Visual Studio Code

Si estamos usando Visual Studio Code (VSC) podemos abrir archivos rápidamente con el comando:
```
code index.js
```



# Sobre Nosotros
## ¿Qué es la EPPR?

Disclaimer
```
EPPR es una escuela virtual de programación y pensamiento recursivo.
100% Gratis
Lo único que necesitas en una Raspberry Pi4 para inscribirte a esta escuela.
Más información en: https://eppr.link
```
