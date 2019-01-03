function apretar() {
	swal({
		title: '¿Estás seguro?',
		type: "warning",
		// showConfirmButton: false,
		// timer: 1200,
		position: 'top-end',
		showCancelButton: true,
		confirmButtonText: '¡Sí, bórralo!',
		cancelButtonText: 'No, cancela!',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {
			swal(
				'Borrado!',
				'Su archivo ha sido eliminado.',
				'success'
			)
		} else if (
			// Read more about handling dismissals
			result.dismiss === Swal.DismissReason.cancel
		) {
			swal(
				'Cancelado',
				'Tu archivo imaginario es seguro :)',
				'error'
			)
		}
	})
	console.log('apretar1');
}

function encima() {
	swal({
		title: 'El raton esta encima',
		type: "warning",
		showConfirmButton: false,
		timer: 1200,
		position: 'top-end',
	});
	console.log('encima');
}

function fuera() {
	swal({
		title: 'El raton esta afuera',
		type: "info",
		showConfirmButton: false,
		timer: 1200,
		position: 'top-end',
	});
	console.log('fuera');
}

var eventoUno = document.querySelector(".btnBoton")
eventoUno.addEventListener("click", function() {
	swal({
		title: 'Hola',
		type: "question",
		showConfirmButton: false,
		timer: 1200,
		position: 'top-end',
	});
	console.log('.btnBoton');
});

// window.addEventListener("keypress", function(event) {
// 	swal({
// 		title: String.fromCharCode(event.keyCode),
// 		type: "info",
// 		showConfirmButton: false,
// 		timer: 1200,
// 		position: 'top-end',
// 	});
// 	console.log(event.keyCode);
// })

// window.addEventListener("load", function() {
// 	swal({
// 		title: 'Ya cargo',
// 		type: "info",
// 		showConfirmButton: false,
// 		timer: 1200,
// 		position: 'top-end',
// 	});
// 	console.log('load');
// });

/*
	setInterval();
	setTime();
*/

// var tiempo = setInterval(function() {
// document.getElementById('temporizador').innerHTML = ("Hello <br>");
// }, 1000);
// console.log('tiempo');

// setTimeout(
// 	function() {
// 		document.getElementById('temporizador').innerHTML = ("Este es otro texto");
// 	}, 3000)

// = = = = = = = = = = = = = = = =

// var video = document.querySelector(".video");

// video.addEventListener("play",
// 	function() {
// 		swal({
// 			title: 'Pusiste play',
// 			type: "info",
// 			showConfirmButton: false,
// 			timer: 1200,
// 			position: 'top-end',

// 		});
// 	}
// );

// video.addEventListener("seeking",
// 	function() {
// 		swal({
// 			title: (this.currentTime),
// 			type: "warning",
// 			showConfirmButton: false,
// 			timer: 1200,
// 			position: 'top-end',
// 		});
// 	}
// );
