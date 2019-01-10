// Swal({
//   type: 'success',
//   title: 'Oops...',
//   text: 'Something went wrong!',
// })

var $numero_1 = 3; // variable inicializada
var $numero_2 = 7.4; // identificador
var resultado = $numero_1 + $numero_2;

var texto1 = "Una frase con 'comillas simples' dentro";
var texto2 = 'Una frase con "comillas dobles" dentro';

var texto3 = 'Una frase con \n \'comillas simples\' \n dentro';

var texto4 = "Una frase con \"comillas dobles\" dentro";

function mensajeTexto() {
  Swal({
    title: texto3,
    type: 'success',
    // text: 'You clicked the button!',
  });
}

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mesesAno() {
  Swal({
    title: meses[5],
    type: 'success',
    // text: 'You clicked the button!',
  });
  // alert(meses);
}