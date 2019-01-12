// var dias = [
//   "Lunes",
//   "Martes",
//   "Miércoles",
//   "Jueves",
//   "Viernes",
//   "Sábado",
//   "Domingo"
// ];
// var text;

// var numDias = dias.concat(3, 5, 4, 2, "Esto es una prueba", 8, 12, "mas texto", 8, 9, 1, 3, "aun mas texto");
// console.log(numDias);

// text = "<ul class='cuadro'>";
// numDias.forEach(semana);
// text += "</ul>";
// document.getElementById("dias").innerHTML = text;
// console.log(numDias);

// function semana(value) {
//   text += "<li class='nav'>" + value + "</li>";
// }

// function suma_y_muestra(primerNumero, segundoNumero) {
//   var resultado = primerNumero + segundoNumero;
//   document.getElementById('resultado1').innerHTML = resultado;
// }
// var numero1 = 3;
// var numero2 = 5;

// suma_y_muestra(numero1, numero2);

// Definición de la función
function calculaPrecioTotal(precio, porcentajeImpuestos) {
  var gastosEnvio = 10;
  var precioConImpuestos = (1 + porcentajeImpuestos / 100) * precio;
  var precioTotal = precioConImpuestos + gastosEnvio;
  return precioTotal.toFixed(2);
}

var precioTotal = calculaPrecioTotal(23.34, 16);
var otroPrecioTotal = calculaPrecioTotal(15.20, 4);

document.getElementById('precioTotal').innerHTML = precioTotal;
document.getElementById('otroPrecioTotal').innerHTML = otroPrecioTotal;

/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */

function numero_entero() {
  num1 = document.getElementById('numero').value;
  var resultado = numero_entero_aux();
  document.getElementById('resultado1').value = num1;
  document.getElementById('resultado2').value = resultado;
  console.log(resultado);
}

function numero_entero_aux() {
  num1 = document.getElementById('numero').value;
  if (num1 % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

// ----------------------

function multiplica() {
  var numero1 = null;
  numero1 = document.getElementById('numeroMulti').value;
  numero1 *= 2;

  document.getElementById('respuMulti').innerHTML = numero1;
}

// ---------------

// var numero = prompt("Introduce un número y se mostrará su factorial");
// var resultado = 1;

// for(var i=1; i<=numero; i++) {
//   resultado *= i;
// }
// alert(resultado);

// ---------------