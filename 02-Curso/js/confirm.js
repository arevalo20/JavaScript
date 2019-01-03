(async function nombreCompleto() {
	// const {
	// 	value: nameComplet
	// } = await Swal({
	// 	title: 'Escribe tu nombre completo',
	// 	input: 'text',
	// 	position: 'top-end',
	// 	inputPlaceholder: 'Escribe tu nombre completo',
	// 	inputAttributes: {
	// 		maxlength: 40,
	// 		autocapitalize: 'off',
	// 		autocorrect: 'off'

	// 	}
	// })

	// if (nameComplet) {
	// 	Swal('Tu nombre comoleto es: ' + nameComplet)
	// } else {
	// 	swal('Esta vacio')
	// }

})()

var a = 'Hola a todos <br>';

document.getElementById('ejeRepet').innerHTML = a.split(",");
console.log(a.split(" "));

// var semana = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo");
var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", 4656];

document.getElementById('semana').innerHTML = (semana[0]);


var numeros = [0, 10, 20, 30, 40, 50, "Lunes"];

// var numeros = "Lunes,Martes,Miercoles";
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// var result = numeros.split(",")

// numeros.push(60);
// numeros.push(70);
// numeros.push(80);
// numeros.push(90);
// numeros.push(100);

// numeros.split();

// document.getElementById('numeros').innerHTML = (dias);

for (let i in dias) {
	document.getElementById('numeros').innerHTML = (dias[i] + "<br>");
};

dias.forEach(
	(dias2, i) => document.getElementById('diasDos').innerHTML = (i + " - " + dias2 + "<br>")
);
console.log(dias);


// document.getElementById('numeros').innerHTML = (dias.reverse());
console.log(dias);
