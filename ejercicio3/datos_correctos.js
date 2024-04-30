function validacion() {
	
	//alert("dentro");
	
	
	// Tomamos el valor del campo con id="nombre"
	var nomap = document.getElementById("nomap").value;
	var fecha = document.getElementById("fecha").value;
	
	document.getElementById('errorNomap').style.display='none';
	document.getElementById('errorFecha').style.display='none';
	
	
	var nomapValido = /^[A-Za-z, -]*$/;
	var fechaValida = /^(0[1-9]|[123][0-9])(\/)(0[1-9]|1[012])\2(\d{4})$/;
	
	var res=true;
	// Si el nombre es nulo o la longitud es 0, significa que no se ha escrito nada.
	
	if(nomap==null || nomap.length==0) {
	
		document.getElementById('errorNomap').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorNomap').style.display='inline';
		
		res=false;
	} 

	 else if (!nomapValido.test(nomap)){
		document.getElementById('errorNomap').innerHTML="Sólo se permiten letras, espacios y guiones medios";
		document.getElementById('errorNomap').style.display='inline';
		res=false;
	}
	
	
	if(fecha==null || fecha.length==0) {
	
		document.getElementById('errorFecha').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorFecha').style.display='inline';
		
		res=false;
	}  else if (!fechaValida.test(fecha)){
		document.getElementById('errorFecha').innerHTML="El formato debe ser dd/mm/aaaa";
		document.getElementById('errorFecha').style.display='inline';
		res=false;
	}

	return res;
}
