// document objet model
//
var elemntosP = document.getElementsByTagName("p");
var segundoParrafo = document.getElementById("dos");
//
// 1.- Crear el elemento
var elemento = document.createElement("h2");
// 2.- Crear un nodo de texto
var contenido = document.createTextNode("Este es nuestro titular");
// 3.- Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
// 4.- Agregar atributos al elemento
elemento.setAttribute("align", "center");
// 5.- Agregar el elemento al documento
document.getElementById("subtitulo").appendChild(elemento);
//
//
// var primerElemento = document.getElementById("primero");
// primerElemento.innerHTML = "Nuevo <span class='texto1'>Texto</span>"; // Elementos
// primerElemento.textContent = "Nuevo <b>Texto</b>"; // Formularios
//
//
var element = document.createElement("li");
var content = document.createTextNode("Elemento Agregado Nuevo2");
//
element.appendChild(content);
//
var padre = document.getElementsByTagName("li")[0].parentNode;
padre.appendChild(element);
referencia = document.getElementsByTagName("li")[0];
// padre.replaceChild(element, referencia);
// padre.removeChild(referencia);
//
//
//
var cuadro = document.createElement("div");
var primerCuadro = document.getElementById("container");
var resultadoCuadro = document.getElementsByTagName("div")[0];
//
cuadro.setAttribute("class", "contenido rojo");
primerCuadro.insertBefore(cuadro, resultadoCuadro);