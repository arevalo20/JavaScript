// Modificar estilos
var encabezado = document.getElementById("encabezado");
// encabezado.style.color = "#fff";
// encabezado.style.backgroundColor = "navy";
// encabezado.style.padding = "20px";
//
// encabezado.className = "titulo tituloGrande";
//
// encabezado.className = encabezado.className.replace("tituloGrande", "");
encabezado.className = "titulo ";
//
// var btnImagen = document.getElementById('btnImagen');
btnImagen.className = "btn-prueba";
//
boton.className = "btn-prueba";
//
btn.className = "btn-prueba";
//
linkEnlace.className = "btn-prueba";
//
input.className = "text-input";
//
var nombre = document.getElementById('nombre');
nombre.className = "text-input";
//
opeacion.className = "btn-prueba";
opeacion2.className = "btn-prueba";
num1.className = "text-input";
num2.className = "text-input";
//
var zoom = function() {
  var thumb = document.getElementById("thumb");
  // thumb.setAttribute("class", "thumb grande");
  //
  if (thumb.className == "thumb") {
    thumb.className = "thumb grande";
    console.log('Grande');
  } else {
    thumb.className = "thumb";
    console.log('Pequeña');
  }
  //
  // thumb.className = "thumb grande";
}