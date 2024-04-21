function validacion() {
	
	//alert("dentro");
	
	
	// Tomamos el valor del campo con id="nombre"
	var direccion = document.getElementById("direccion").value;
	var cp = document.getElementById("cp").value;
	
	document.getElementById('errorDireccion').style.display='none';
	document.getElementById('errorCP').style.display='none';
	
	
	var direccionValida = /^[A-Za-z0-9, \\/.,-]*$/;
	var cpValido = /^[0-9]{6}$/;
	
	var res=true;
	// Si el nombre es nulo o la longitud es 0, significa que no se ha escrito nada.
	
	if(direccion==null || direccion.length==0) {
	
		document.getElementById('errorDireccion').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorDireccion').style.display='inline';
		
		res=false;
	} 

	 else if (!direccionValida.test(direccion)){
		document.getElementById('errorDireccion').innerHTML="Los únicos caracteres raros que se permiten son \, /, -, la coma(,), el punto(.) y el espacio";
		document.getElementById('errorDireccion').style.display='inline';
		res=false;
	}
	
	
	if(cp==null || cp.length==0) {
	
		document.getElementById('errorCP').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorCP').style.display='inline';
		
		res=false;
	}  else if (!cpValido.test(cp)){
		document.getElementById('errorCP').innerHTML="Debe estar formado por 5 dígitos";
		document.getElementById('errorCP').style.display='inline';
		res=false;
	}

	return res;
}
