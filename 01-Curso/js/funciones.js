// Funciones
function saludo(nombre) {
	document.getElementById("name3").innerHTML = "Que tengas un buen dia " + nombre;
}
saludo("Juan");
//
//
var suma = function(numero1, numero2) {
	var numero1 = numero1;
	var numero2 = numero2;
	return numero1 + numero2;
}
document.getElementById("suma").innerHTML = ("La suma total es: " + suma(5, 10));
document.getElementById("suma2").innerHTML = ("La suma total es: " + suma(10, 10));
//
//
var numeroMaximo = function(valor1, valor2) {
	if (valor1 > valor2) {
		return valor1;
	}
	return valor2;
}
document.getElementById("numMax").innerHTML = ("El numero máximo es: " + numeroMaximo(220, 90));
//
//
var sumar = function(num1, num2) {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var resultado = num1 + num2;
	return resultado;
}
var restar = function(num1, num2) {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var resultado = num1 - num2;
	return resultado;
}