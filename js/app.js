// Swal({
//   type: 'success',
//   title: 'Oops...',
//   text: 'Something went wrong!',
// })

var $numero_1 = 3; // variable inicializada
var $numero_2 = 7.4; // identificador
var resultado = $numero_1 + $numero_2;

var texto1 = "Una frase con 'comillas simples' dentro";
var texto2 = 'Una frase con "comillas dobles" dentro';

var texto3 = "Una frase con \n 'comillas simples' \n dentro";

var texto4 = 'Una frase con "comillas dobles" dentro';

function mensajeTexto() {
  Swal({
    title: texto3,
    type: "success"
    // text: 'You clicked the button!',
  });
}

var dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
];

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

function mesesAno() {
  Swal({
    title: meses[5],
    type: "success"
    // text: 'You clicked the button!',
  });
}

var numero4 = 5;
++numero4; // Incremento ++
function incremento() {
  Swal({
    title: numero4,
    type: "success"
  });
}

var numero5 = 5;
--numero5; // Decremento --
function decremento() {
  Swal({
    title: numero5,
    type: "success"
  });
}

var numeroEx = 5;
var numeroEx2 = 2;
numeroR1 = ++numeroEx + numeroEx2;
// numeroResult = 8, numero1 = 6
document.getElementById("numeroEx").innerHTML = numeroEx;
document.getElementById("numeroEx2").innerHTML = numeroEx2;
document.getElementById("resultado").innerHTML = numeroR1;
console.log(resultado);

var primNumero = 5;
var segNumero = 2;
resultado2 = primNumero++ + segNumero;
// numero3 = 7, numP1 = 6
document.getElementById("primNumero").innerHTML = primNumero;
document.getElementById("segNumero").innerHTML = segNumero;
document.getElementById("resultado2").innerHTML = resultado2;
console.log(resultado2);

var visible = false; // Muestra "false" y no "true"
function contrario() {
  Swal({
    title: !visible,
    type: "success"
  });
}
console.log(!visible);
console.log(visible); // mostrara el valor establecido
// alert(!visible)

var numP1 = 10;
var numP2 = 5;
resultP = numP1 % numP2; // resultado = 0
document.getElementById("numP1").innerHTML = numP1;
document.getElementById("numP2").innerHTML = numP2;
document.getElementById("resultP").innerHTML = resultP;
console.log(resultP);

numB1 = 9;
numB2 = 5;
resultB = numB1 % numB2; // resultado = 4
document.getElementById("numB1").innerHTML = numB1;
document.getElementById("numB2").innerHTML = numB2;
document.getElementById("resultB").innerHTML = resultB;
console.log(resultB);

// Estructuras de control de flujo

// 3.4.1. Estructura if
var mostrarMensaje = true;

if (mostrarMensaje == true) {
  document.getElementById("estructura").innerHTML = "Hola Mundo!";
  console.log(mostrarMensaje);
}

// var Primero1 = 5;
// var Primero2 = 8;

// if(Primero1 <= Primero2) {
//   alert("numero1 no es mayor que numero2");
// }
// if(Primero1 >= 0) {
//   alert("numero2 es positivo");
// }
// if(Primero1 >= 0 || Primero1 != 0) {
//   alert("numero1 es negativo o distinto de cero");
// }
// if(++Primero1 < Primero2 ) {
//   alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

// var edad = 8;
// if (edad >= 18) {
//   Swal('Eres mayor de edad');
// } else {
//   Swal('Todavía eres menor de edad');
// }

// var nombre = "";

// if(nombre == "") {
//   Swal('','Aún no nos has dicho tu nombre');
// }
// else {
//   Swal(nombre, 'Hemos guardado tu nombre');
// }

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();

if (numero < 1 || numero > 99999999) {
  // alert("El número proporcionado no es válido");
  document.getElementById('valido').innerHTML = "El número proporcionado no es válido";
} else {
  var letraCalculada = letras[numero % 23];
  if (letraCalculada != letra) {
    document.getElementById('valido').innerHTML = "La letra o el número proporcionados no son correctos";
  } else {
    document.getElementById('valido').innerHTML = "El número de DNI y su letra son correctos";
  }
}
document.getElementById('numero').value = numero;
document.getElementById('letra').value = letra;