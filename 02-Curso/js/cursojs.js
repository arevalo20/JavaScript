var uno1 = 6;
// uno1 = uno1 + 10;
// uno1 /= 2;

// var uno1 = prompt("Escribe el valor de UNO1");

var dos1 = 3;

var tres;

var suma = uno1 + dos1;
var resta = uno1 - dos1;
var dividir = uno1 / dos1;
var resto = uno1 % dos1;
var mulltipli = uno1 * dos1;

var presc = 15 + 2 * 15 / 3;

// var comparar = (uno1 != dos1 && uno1 >= dos1);
var comparar = (!(uno1 == dos1));

document.getElementById('suma').innerHTML = suma;
document.getElementById('resta').innerHTML = resta;
document.getElementById('dividir').innerHTML = dividir;
document.getElementById('resto').innerHTML = resto;
document.getElementById('multipli').innerHTML = mulltipli;

document.getElementById('prescedencia').innerHTML = presc;

document.getElementById('conparar').innerHTML = comparar;

// -- -- -- -- -- -- -- -- -

document.getElementById('entender').innerHTML = uno1;


document.getElementById('evaluacionResp').innerHTML = tres;

document.getElementById('evaluacion1').innerHTML = (uno1 == dos1 ? "Variable UNO1 <b>es igual</b> a variable <b>DOS1!</b>" : "Variable uno1 <b>no es igual</b> a variable <b>DOS1!</b>");

// -- -- -- -- -- -- -- -- -

var cambiarClass = document.querySelectorAll('.operacion');
for (var i = 0; i < cambiarClass.length; i++) {
	cambiarClass[i].classList.replace('operacion', 'input-prueba');
};

// -- -- -- -- -- -- -- -- -

if (uno1 == 3 || uno1 == "") {
	document.getElementById('evaluacion2').innerHTML = "Valor 3 <b>es igual</b> a variable <b>UNO1</b>";
} else {
	document.getElementById('evaluacion2').innerHTML = "Valor 3 <b>no es igual</b> a variable <b>UNO1</b>";
};

if (uno1 == dos1) {
	document.getElementById('evaluacion3').innerHTML = "Variable UNO1 <b>es igual</b> a variable <b>DOS1!</b>";
} else if (uno1 <= dos1) {
	document.getElementById('evaluacion3').innerHTML = "Variable UNO1 <b>es menor o igual</b> a variable <b>DOS1!</b>";
} else if (uno1 >= dos1) {
	document.getElementById('evaluacion3').innerHTML = "Variable UNO1 <b>es mayor o igual</b> a variable <b>DOS1!</b>";
} else {
	document.getElementById('evaluacion3').innerHTML = "Estas bien wey!";
};

switch (uno1) {
	case 0:
		tres = "Variable UNO1 <b>es 0</b>";
		break;
	case 1:
		tres = "Variable UNO1 <b>es 1</b>";
		break;
	case 2:
		tres = "Variable UNO1 <b>es 2</b>";
		break;
	case 3:
		tres = "Variable UNO1 <b>es 3</b>";
		break;
	case 4:
		tres = "Variable UNO1 <b>es 4</b>";
		break;
	case 5:
		tres = "Variable UNO1 <b>es 5</b>";
		break;
	default:
		tres = "Variable UNO1 <b>no coincide</b>";
		break;
}
document.getElementById('evaluacion4').innerHTML = tres;

// -- -- -- -- -- -- -- -- -

var nueva1 = 20;
// var nueva2 = 20;
var numeros = "";
var numeros2 = "";
var numeros3 = "";


for (var i = 0; i <= 20; i++) {
	if (i == 5) {
		break;
	}
	numeros += i + " ";
	document.getElementById('while1').innerHTML = numeros;
}

for (var i = 0; i <= 20; i++) {
	if (i == 5 || i == 7) {
		continue;;
	}
	numeros2 += i + " ";
	document.getElementById('while2').innerHTML = numeros2;
}

for (var i = 0; i <= 20; i++) {
	if (i >= 5 && i <= 15) {
		continue;
	}
	numeros3 += i + " ";
	document.getElementById('while3').innerHTML = numeros3;
}

// -funciones

function primera() {
	var saludo = document.getElementById('funciones1').innerHTML = "Hola a todos1";
	return saludo;
}
primera();

//  ----------------

function segunda(a, b, c, ) {
	var datos = document.getElementById('funciones2').innerHTML = ("Mi nombre es: " + a + "<br> Mi apellido es: " + b + "<br> Mi edad es: " + c);
	return datos;
}
segunda("Hiram", "Arévalo", 30);

//  ----------------

function tercera(nombre = "") {
	var nombreCompleto = nombre;
	return document.getElementById('funciones3').innerHTML = (nombreCompleto);
}
tercera("Hiram Arévalo");

//  ----------------

function cuarta(nombre, apellido) {
	if (nombre != null && apellido != null) {
		respuesta = document.getElementById('funciones4').innerHTML = (nombre + " " + apellido);
	} else {
		respuesta = document.getElementById('funciones4').innerHTML = ("No puso sus datos completos");
	};
	return respuesta;
}
cuarta("Juan", "Perez");


//  ----------------

var prueba = function() {
	var nombre = "Sabrina";
	var apellido = "Garcia";

	respuesta = (nombre + " " + apellido);
	return respuesta;
}
document.getElementById('funciones5').innerHTML = (prueba());

//  = = = = = = = = = = = = = = = = = = = = = = = = =

var a = function(nombre, uno1) {
	var e = nombre;
	uno1(e);
}
var b = function(i) {
	document.getElementById('funciones6').innerHTML = (i);
};

a("Juan", b);

//  = = = = = = = = = = = = = = = = = = = = = = = = =


var uno1 = nombre => nombre;
document.getElementById('funciones7').innerHTML = (uno1("Prueba de otra funcion"));

var dos2 = (nombre, apellido) => nombre + apellido;
document.getElementById('funciones8').innerHTML = (dos2("Jose" + " ", "Cuevas"));

//  = = = = = = = = = = = = = = = = = = = = = = = = =
