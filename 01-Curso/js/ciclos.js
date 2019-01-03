// Ciclos FOR - Ciclos
var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var text = "";
for (i = 0; i <= semana.length - 1; i++) {
  text += semana[i] + "<br>";
  document.getElementById("name2").innerHTML = text;
  // console.log(semana[i]);
}
//
// var semana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// var numeroDias = semana2.length - 1;
// var text2 = "";
// var numDias = 0;
// while (numDias <= numeroDias) {
//  text2 += semana2[numDias] + "<br>";
//  document.getElementById("name3").innerHTML = text2;
//  numDias++;
//  console.log(semana2[numDias]);
// }