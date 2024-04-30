function validacion() {
	
	//alert("dentro");
	
	
	// Tomamos el valor del campo con id="nombre"
	var numero = document.getElementById("numero").value;
	var directivo = document.getElementById("directivo").value;
	
	document.getElementById('errorNumero').style.display='none';
	document.getElementById('errorDirectivo').style.display='none';
	
	
	var numeroValido = /^[0-9][0-9][0-9]$/;
	var directivoValido = /^[+-]+$/;
	
	var res=true;
	// Si el nombre es nulo o la longitud es 0, significa que no se ha escrito nada.
	
	if(numero==null || numero.length==0) {
	
		document.getElementById('errorNumero').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorNumero').style.display='inline';
		
		res=false;
	} 

	 else if (!numeroValido.test(numero)){
		document.getElementById('errorNumero').innerHTML="Debe estar formado por 3 dígitos y comenzar en 001";
		document.getElementById('errorNumero').style.display='inline';
		res=false;
	}
	
	
	if(directivo==null || directivo.length==0) {
	
		document.getElementById('errorDirectivo').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorDirectivo').style.display='inline';
		
		res=false;
	}  else if (!directivoValido.test(directivo)){
		document.getElementById('errorDirectivo').innerHTML="Sólo están permitidos los valores + y -";
		document.getElementById('errorDirectivo').style.display='inline';
		res=false;
	}

	return res;
}
