// Eventos
//
(function() {
  var saludo = function(e) {
    console.log('Este evento es de tipo: ' + e.type);
    e.preventDefault();
  };
  //
  var enlace = function(e) {
    console.log('¿A donde vas?');
    e.preventDefault();
  };
  //
  // var saludo = function() {
  //   console.log('Prueba Eventos');
  // };
  //
  var boton = document.getElementById('boton');
  boton.addEventListener("click", saludo);
  // boton.removeEventListener("click", saludo); // Quitar la funcion
  //
  var linkEnlace = document.getElementById('linkEnlace');
  linkEnlace.addEventListener("click", enlace);
  //
  // var input = document.getElementById('input');
  //
  // input.addEventListener("focus", saludo);
  //
  // input.addEventListener("blur", saludo);
  //
  // input.addEventListener("change", saludo);
}())
