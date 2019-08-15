
// Servidor http básico
var http = require("http"); //modulo http de node en la variable http
var url = require("url");

function iniciar(route) {
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");

    route(pathname);

    response.writeHead(200, {"Content-type": "text/html"});
    response.write("Hola mundo");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");

  // http.createServer(function(request, response){
  //   console.log("Peticion Recibida.");
  //   response.writeHead(200, {"Content-type": "text/html"});
  //   response.write("Hola mundo");
  //   response.end();
  // }).listen(8888); //número del puerto en el que nuestro servidor HTTP va a escuchar
}

exports.iniciar = iniciar;
