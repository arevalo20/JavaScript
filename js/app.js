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
// function calculaPrecioTotal(precio, porcentajeImpuestos) {
//   var gastosEnvio = 10;
//   var precioConImpuestos = (1 + porcentajeImpuestos / 100) * precio;
//   var precioTotal = precioConImpuestos + gastosEnvio;
//   return precioTotal.toFixed(2);
// }

// var precioTotal = calculaPrecioTotal(23.34, 16);
// var otroPrecioTotal = calculaPrecioTotal(15.2, 4);

// document.getElementById("precioTotal").innerHTML = precioTotal;
// document.getElementById("otroPrecioTotal").innerHTML = otroPrecioTotal;

/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */

// function numero_entero() {
//   num1 = document.getElementById("numero").value;
//   var resultado = numero_entero_aux();
//   document.getElementById("resultado1").value = num1;
//   document.getElementById("resultado2").value = resultado;
//   console.log(resultado);
// }

// function numero_entero_aux() {
//   num1 = document.getElementById("numero").value;
//   if (num1 % 2 == 0) {
//     return "par";
//   } else {
//     return "impar";
//   }
// }

// ----------------------

// function multiplica() {
//   // var numero1 = null;
//   var numero1 = document.getElementById("numeroMulti").value;
//   numero1 *= 2;

//   document.getElementById("respuMulti").value = numero1;
//   console.log(numero1);

//   var resultMulti = document.getElementById("respuMulti").value;
//   resultMulti *= 4;
//   document.getElementById("multiPor2").value = resultMulti;
// }

// ---------------

var primern;
var segundon;
var resultado2;

function init() {
  //tuve que cambiar la forma de declarar las variables porque buscando lei que
  //el getElementsClassName es para grupo de vaiables y yo solo tenia una y lo cambie por Id
  var pantalla = document.getElementById("pantalla");
  var reset = document.getElementById("reset");
  var backspace = document.getElementById("backspace");
  var porcentaje = document.getElementById("porcentaje");
  var division = document.getElementById("division");
  var multiplicacion = document.getElementById("multiplicacion");
  var resta = document.getElementById("resta");
  var suma = document.getElementById("suma");
  var igual = document.getElementById("igual");
  var numero1 = document.getElementById("numero1");
  var numero2 = document.getElementById("numero2");
  var numero3 = document.getElementById("numero3");
  var numero4 = document.getElementById("numero4");
  var numero5 = document.getElementById("numero5");
  var numero6 = document.getElementById("numero6");
  var numero7 = document.getElementById("numero7");
  var numero8 = document.getElementById("numero8");
  var numero9 = document.getElementById("numero9");
  var cero = document.getElementById("cero");
  var decimal = document.getElementById("decimal");

  numero1.onclick = function(e) {
    pantalla.value = pantalla.value + "1";
  };
  numero2.onclick = function(e) {
    pantalla.value = pantalla.value + "2";
  };
  numero3.onclick = function(e) {
    pantalla.value = pantalla.value + "3";
  };
  numero4.onclick = function(e) {
    pantalla.value = pantalla.value + "4";
  };
  numero5.onclick = function(e) {
    pantalla.value = pantalla.value + "5";
  };
  numero6.onclick = function(e) {
    pantalla.value = pantalla.value + "6";
  };
  numero7.onclick = function(e) {
    pantalla.value = pantalla.value + "7";
  };
  numero8.onclick = function(e) {
    pantalla.value = pantalla.value + "8";
  };
  numero9.onclick = function(e) {
    pantalla.value = pantalla.value + "9";
  };
  cero.onclick = function(e) {
    pantalla.value = pantalla.value + "0";
  };
  decimal.onclick = function(e) {
    pantalla.value = pantalla.value + ".";
  };
  porcentaje.onclick = function(e) {
    pantalla.value = pantalla.value + "%";
  };
  
  
  reset.onclick = function(e) {
    recetear();
  };
  suma.onclick = function(e) {
    primern = pantalla.value;
    resultado2 = "+";
    limpiar();
  };
  resta.onclick = function(e) {
    primern = pantalla.value;
    resultado2 = "-";
    limpiar();
  };
  multiplicacion.onclick = function(e) {
    primern = pantalla.value;
    resultado2 = "*";
    limpiar();
  };
  division.onclick = function(e) {
    primern = pantalla.value;
    resultado2 = "/";
    limpiar();
  };
  igual.onclick = function(e) {
    segundon = pantalla.value;
    resolver();
  };
}

function limpiar() {
  pantalla.value = "";
}

function recetear() {
  pantalla.value = "";
  primern = 0;
  segundon = 0;
  resultado2 = "";
}
//esto lo vi en java tube que buscar en mi ordenador donde tenia un ejercicio parecido que tenia.
function resolver() {
  var res = 0;
  switch (resultado2) {
    case "+":
      res = parseFloat(primern) + parseFloat(segundon);
      break;
    case "-":
      res = parseFloat(primern) - parseFloat(segundon);
      break;
    case "*":
      res = parseFloat(primern) * parseFloat(segundon);
      break;
    case "/":
      res = parseFloat(primern) / parseFloat(segundon);
      break;
  }
  recetear();
  pantalla.value = res;
}

// function calcula(operacion) {
//   var operando1 = document.getElementById("number1").value;
//   var operando2 = document.getElementById("number2").value;

//   var result = eval(operando1 + operacion + operando2);
//   document.getElementById("resultado").value = result;
// }

// function Mostrar(numDigito) {
//   // console.log(numDigito.value);
//   if (numDigito.value) {
//   } else {
//   }
//   document.getElementById("number1").value = numDigito.value;
//   document.getElementById("number2").value = numDigito.value;
//   console.log(numDigito.value);
//   return true;
// }

// ---------------

// var numero = prompt("Introduce un número y se mostrará su factorial");
// var resultado = 1;

// for(var i=1; i<=numero; i++) {
//   resultado *= i;
// }
// alert(resultado);

// ---------------

/** Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

// function info(cadena) {
//   var resultado = 'La cadena "' + cadena + '"';

//   // Comprobar mayúsculas y minúsculas
//   if (cadena == cadena.toUpperCase()) {
//     resultado += " está formada sólo por mayúsculas";
//   } else if (cadena == cadena.toLowerCase()) {
//     resultado += " está formada sólo por minúsculas";
//   } else {
//     resultado += " está formada por mayúsculas y minúsculas";
//   }

//   return resultado;
// }
// document.getElementById("mensaje1").innerHTML = info(
//   "OVNI = OBJETO VOLADOR NO IDENTIFICADO"
// );
// document.getElementById("mensaje2").innerHTML = info(
//   "En un lugar de la mancha..."
// );
// document.getElementById("mensaje3").innerHTML = info("...no hay papel....");

// ---------------

// function creaMensaje() {
//   var mens1 = "Mensaje de prueba";
//   alert(mens1);
// }
// creaMensaje();

// var mens2= "Mensaje de prueba2";

// function muestraMensaje() {
//   alert(mens2);
// }

// var mens3 = "gana la de fuera";
// function muestraMensaje() {
//   mens3 = "gana la de dentro";
//   alert(mens3);
// }

// alert(mens3);
// muestraMensaje();
// alert(mens3);
