// Eventos
//
(function() {
  var formulario = document.getElementsByName('formulario')[0];
  var elementos = formulario.elements;
  boton = document.getElementById('btn');
  //

  var validarNombre = function(e) {
    if (formulario.nombre.value == 0) {
      alert("Completa el campo Nombre");
      e.preventDefault();
      console.log('Si funciona');
    }
  };

  var validarRadiobtn = function(e) {
    if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {} else {
      alert('Completa el campo sexo');
      e.preventDefault();
      console.log('También funciona');
    }
  };

  var valiidarCheckbox = function(e) {
    if (formulario.terminos.checked == false) {
      alert('Acepta los terminos y condiciones');
      e.preventDefault();
      console.log('Este también');
    }
  }
  //
  var validar = function(e) {
    validarNombre(e);
    validarRadiobtn(e);
    valiidarCheckbox(e);
    w
  };
  formulario.addEventListener("submit", validar);
}())
