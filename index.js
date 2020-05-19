// EPPR Socket.IO + Flappy Score
// Escuela de Programación y Pensamiento Recursivo
// eppr.link
// Autor: @lxps 2020
const { exec } = require("child_process");
var qrcode = require('qrcode-terminal');
var express = require('express');
var app = express();
// Definición de Variables Globales
// Cada vez que iniciamos el servidor, el highScore vuelve a cero.
var highScore = 0;

// Antes de iniciar esta clase, recuerda:
// 1) Iniciar un nuevo proyecto de Node con el comando:
// sudo npm init
// 2) Instalar los módulos express, ejs, socket.io y qrcode-terminal con el comando:
// sudo npm install --save express ejs socket.io qrcode-terminal
// 3) Iniciar el programa con el comando:
// node index

app.set('view engine', 'ejs')
// Define la carpeta /public/ como contenido estático.
app.use(express.static('public'))
// Inicia servidor en el puerto 3000 :
server = app.listen(3000, function () {
    console.log('Node app corriendo en el puerto 3000!');
    console.log('Visita desde esta compu: http://10.55.0.1:3000');
    // Corre un comando Shell desde NodeJS.
    // Este comando va a traernos la URL asociada a la dirección local sobre WIFI.
    exec("ifconfig wlan0 | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        // Limpiar respuesta, usualmente incluye la palabra "inet " además de multiples entradas de línea "\n"
        var LAN = stdout.replace("\n", "").replace("\n", "").replace("inet ", "").replace("\n", "")
        console.log(`o bien, mediante WIFI en : http://${LAN}:3000`);
        // Imprimir Código QR para rápido acceso mediante WiFi.
        qrcode.generate(`http://${LAN}:3000`, { small:true });
        console.log('Usa este QR desde un dispositivo en la misma red WiFi')
    });

});

// Código para iniciar Socket.IO
const io = require("socket.io")(server)
// Función de conexión, sucede cada vez que un dispositivo se conecta.
io.on('connection', (socket) => {
    // setScore : Función inicial para reportar el Record actual.
    socket.emit('setScore', { highScore, ip: socket.conn.remoteAddress });
    console.log('Nuevo jugador : '+socket.conn.remoteAddress.replace("::ffff:","")+' conectado!')
    // submit : Función que escucha una respuesta del mismo dispositivo que acaba de conectarse.
    socket.on('submit', (data) => {
        // checkHighScore : Compara el valor recibido, contra el valor actual global.
        if(checkHighScore(data, socket.conn.remoteAddress)){
            console.log(" 🍾 Nuevo Record!")
            socket.emit('newRecord', { msg: 'Felicidades! Rompiste el record' });
        }
        // Imprime información sobre el nuevo record.
        console.log({...data, ip: socket.conn.remoteAddress.replace("::ffff:","") })
    });
})
// Función para comparar un highscore recibido contra el registro global.
// En caso de que el valor recibido sea mayor, se notificará a todos los dispositivos conectados.
var checkHighScore = function ( incomingHighScore, ip ){
    var newHighScore = incomingHighScore.highScore
    // Condicional IF : Nuevo Score es mayor que el highScore actual ?
    if( +newHighScore > highScore ){
        // Actualizar valor de highScore global.
        highScore = newHighScore
        // newHighScore : Transmitir a todos los dispositivos conectados.
        io.emit('newHighScore', { highScore, ip });
        return true
    }
    return false
}
app.get('/', function (req, res) {
    res.render('index')
});