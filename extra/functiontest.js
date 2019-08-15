//Pasando funciones

function decir(palabra) {
  console.log(palabra);
}

function ejecutar(algunaFuncion, valor) {
  algunaFuncion(valor);
}

ejecutar(decir, "Hola");

//mas elegante

function ejecutar(algunaFuncion, valor) {
  algunaFuncion(valor);
}

ejecutar(function(palabra){ console.log(palabra) }, "Hola anónimo"); //creamos una funcion anónima
