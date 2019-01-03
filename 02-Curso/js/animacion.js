//  Variables

// var gato = "Esto es un gato";
// var barco = 453434;

// const PI = 3.1416;

/*
$(document).ready(function() {
	$("button").click(function() {
		swal("The paragraph was clicked.");
	});
}); //funcion para un boton con alert/swal
*/

var uno = "Aqui aparecera el UNO";
var dos = "Aqui aparecera el DOS";
var tres = "Aqui aparecera el TRES";
var duda1 = "Primero";
var duda2 = "Segundo";
var duda3 = "Tercero";

var myElements = document.querySelectorAll('button');
for (var i = 0; i < myElements.length; i++) {
	myElements[i].classList.add("btn-prueba");
}
var myElements2 = document.querySelectorAll('input');
for (var i = 0; i < myElements2.length; i++) {
	myElements2[i].classList.add("input-prueba");
}

$(document).ready(function() {
	jQuery('.primero').click(function() {
		console.log(uno);
		document.getElementById('primero').innerHTML = uno;
		document.getElementById('textPrimero').value = uno;

		Swal({
			title: uno,
			type: "warning",
			confirmButtonText: "Cerrar",
			allowOutsideClick: false,
			timer: 2000,
			allowEscapeKey: false,
		});
	});

	jQuery('.segundo').click(function() {
		console.log(dos);
		document.getElementById('segundo').innerHTML = dos;

		swal({
			title: dos,
			type: "info",
			confirmButtonText: "Cerrar",
			position: 'top-end',
			showConfirmButton: false,
			timer: 1500,
		});
	});

	jQuery('.tercero').click(function() {
		console.log(tres);
		document.getElementById('tercero').innerHTML = tres;

		swal({
			title: tres,
			type: "info",
			confirmButtonText: "Cerrar",
		});
	});
})

$(document).ready(function() {
	$('#boton').click(function() {
		console.log(duda1);
		document.getElementById("botonTexto").innerHTML = duda1;
		document.getElementById("botonTexto2").value = duda1;
		Swal({
			title: duda1,
			type: "success",
			confirmButtonText: "Cerrar",
			allowOutsideClick: false,
			timer: 2000,
			allowEscapeKey: false,
			showConfirmButton: false,
			position: 'top-end',
		});
	});

	$('#btn').click(function() {
		console.log(duda2);
		document.getElementById("btnTexto").innerHTML = duda2;
		document.getElementById("btnTexto2").value = duda2;
		Swal({
			title: duda2,
			type: "error",
			confirmButtonText: "Cerrar",
			allowOutsideClick: false,
			timer: 2000,
			allowEscapeKey: false
		});
	});
});

// Fecha
var fecha = new Date();
document.getElementById('fecha').value = (fecha.getHours() + ":" + fecha.getMinutes());
