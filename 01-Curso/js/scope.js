// Scope
//
// Global - Podemos acceder desde cualquiera parte
// Local - Variables cradas dentro de la funcion, solo se acceden por funcion o una funcion anidada
//
// funcion global para proteger el codio
(function() {
	//
	var variableGlobal = "Esta es Global";
	//
	var miFuncion = function() {
		//
		// var variableLocal = "Esta es Local";
		alert(variableLocal);
		//
		var FuncionLocal = function() {
			var variableLocal = "Esta es variable local, dentro de FuncionLocal";
			// alert(variableLocal);
		}
		//
		FuncionLocal();
	}
	miFuncion();
	// alert(variableGlobal);
})