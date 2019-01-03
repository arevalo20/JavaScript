// Array - Arreglo
var amigos = ["Harevalo", "Alejandro", "Cesar", "Pedro"];
// console.log(amigos);
//
// Sustituir elemento
// amigos[2] = "Preguntaaco"
//
// document.write("Amigos1<b> " + amigos[2] + "</b>");
// console.log(amigos[2]); // Cesar
// document.write("Tienes " + amigos.length + " amigos");
// amigos[amigos.length] = "Fidel";
//
// Agregar elementos
// amigos.push("Fidel", "Luis", "Juan", "Manuel");
//
// eliminar elementos
// amigos.pop();
// document.write(amigos[0] + " ");
// document.write(amigos[2] + " ");
// document.write(amigos[3] + " ");
// document.write(amigos[4] + " ");
// document.write(amigos[6] + " ");
//
var amigos2 = ["Fidel", "Luis", "Juan", "Manuel", "Rodrigo"];
// console.log(amigos2);
// Sustituir elemento
// amigos2[3] = "Jose";
//
// document.write(" Amigos2 <b>" + amigos2[3] + "</b>");
// console.log(amigos2[3]); // Manuel
//
var amigos3 = amigos.concat(amigos2).sort();
// document.write(amigos3);
// console.log(amigos3);
//
var amigos4 = amigos3.join(", ");
// document.write(amigos4);
// console.log(amigos4);
//
document.getElementById("demo").innerHTML = amigos4;
//
document.getElementById("demo2").innerHTML = "Tienes " + amigos3.length + " amigos";
// document.write("</br>Tienes " + amigos3.length + " amigos")