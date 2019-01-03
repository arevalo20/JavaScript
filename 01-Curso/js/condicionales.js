// Conditions - Condicionales
var nombre = "Hiram";
var edad = 15;
//
// nombre = prompt("Ingresa tu nombre");
// edad = prompt("Ingresa tu edad");
//
if (edad >= 18 && nombre == "Hiram") {
  document.getElementById("name").innerHTML = "Bienvenido " + nombre + " eres mayor de edad";
  // console.log("Bienvenido eres mayor de edad");
} else if (nombre != "Hiram") {
  document.getElementById("name").innerHTML = nombre + " no tienes acceso";
  // console.log("No eres mayor de edad");
} else {
  document.getElementById("name").innerHTML = nombre + " no eres mayor de edad";
  // console.log("No eres mayor de edad");
}
//
//
if (true) {} else {}
//
//
// if (nombre == "Hiram") {
//  document.getElementById("name").innerHTML = "Bienvenido " + nombre;
//  console.log("Bienvenido " + nombre);
// } else if (edad == 50) {
//  document.getElementById("name").innerHTML = "Bienvenido tienes 18 años";
// } else {
//  document.getElementById("name").innerHTML = "Bienvenido Anonimo";
//  console.log("Bienvenido Anonimo");
// }
// document.getElementById("name").innerHTML = nombre;