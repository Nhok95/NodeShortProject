
// Servidor http básico
var http = require ("http")

http.createServer(function(request, response)) {
  response.writeHead(200, {"Content-type": "text/html"});
  response.write("Hola mundo");
  response.end()
}).listen(8888);
