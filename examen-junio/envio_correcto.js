function validacion() {
	
	//alert("dentro");
	
	
	// Tomamos el valor del campo con id="nombre"
	var movil = document.getElementById("movil").value;
	var codigo = document.getElementById("codigo").value;
	
	document.getElementById('errorMovil').style.display='none';
	document.getElementById('errorCodigo').style.display='none';
	
	
	var movilValido = /^[6][0-9]{8}$/;
	var codigoValido = /^[A-Z]{2}[0-9]{8}[A-Z]{2}$/;
	
	var res=true;
	// Si el nombre es nulo o la longitud es 0, significa que no se ha escrito nada.
	
	if(movil==null || movil.length==0) {
	
		document.getElementById('errorMovil').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorMovil').style.display='inline';
		
		res=false;
	} 

	else if (movil.length != 9){
		document.getElementById('errorMovil').innerHTML="Debe estar formado por 9 dígitos";
		document.getElementById('errorMovil').style.display='inline';
		res=false;
	}
	 else if (!movilValido.test(movil)){
		document.getElementById('errorMovil').innerHTML="Debe estar formado únicamente por dígitos y comenzar por 6 o 7";
		document.getElementById('errorMovil').style.display='inline';
		res=false;
	}
	
	
	if(codigo==null || codigo.length==0) {
	
		document.getElementById('errorCodigo').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorCodigo').style.display='inline';
		
		res=false;
	} 

	else if (!codigoValido.test(codigo)){
		document.getElementById('errorCodigo').innerHTML="Debe estar formado por 2 letras mayúsculas, 8 dígitos y terminar en ES";
		document.getElementById('errorCodigo').style.display='inline';
		res=false;
	}

	return res;
}
