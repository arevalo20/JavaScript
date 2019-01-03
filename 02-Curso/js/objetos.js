class Animal {
	constructor(tipo, raza) {
		this.cero = tipo;
		this.raza = raza;
	};
};

class Domesticos extends Animal {
	constructor(cero, nombre, edad, peso) {
		super(cero)
		this.uno = nombre;
		this.dos = edad;
		this.tres = peso;
	};
};

var animal1 = new Domesticos("Hogar", "Boby", 8, 6);
var animal2 = new Domesticos("Caza", "Jorge", 7, 5);
// var animal3 = new Domesticos("Hogar", "Boby", 8, 6);

var unico = new Animal("Salvaje", "Pura");

// document.getElementById("gato").innerHTML = (unico.cero + " " + animal1.uno + " " + animal1.dos + " " + animal1.tres);

// = = = = = = = = = = = = = = = =

// BOM Browser Objet Model

window.name = "Es el nombre de la ventana";

var dato = "El nombre es: " + window.name + "<br>";
var ancho = "El ancho es: " + window.outerWidth + "<br>";
var alto = "Es alto es: " + window.outerHeight + "<br>";
var anchoInterno = "El ancho interno es: " + window.innerWidth + "<br>";
var altoInterni = "El alto interno es: " + window.innerHeight + "<br>";
var scrollHorizontal = "El Scroll horizontal es: " + window.pageXOffset + "<br>";
var scrollVertical = "El Scroll vertical es: " + window.pageYOffset + "<br>";
var distanciaIzquierda = "La distancia desde la izquiera es: " + window.screenX + "<br>";
var distanciaSuperior = "La distancia desde lo superior es: " + window.screenY + "<br>";
var distanciaDerecha = "La distancia desde la izquiera es: " + window.screenYY + "<br>";

// var = "" + + "<br>";
document.write(dato, ancho, alto, anchoInterno, scrollHorizontal, scrollVertical, distanciaIzquierda, distanciaSuperior, distanciaDerecha);
// document.getElementById("bom").innerHTML = (dato, ancho, alto, anchoInterno, scrollHorizontal, scrollVertical, distanciaIzquierda, distanciaSuperior, distanciaDerecha);
