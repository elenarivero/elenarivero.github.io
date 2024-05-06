function validacion() {
	
	//alert("dentro");
	
	
	// Tomamos el valor del campo con id="nombre"
	var usuario = document.getElementById("usuario").value;
	var password = document.getElementById("password").value;
	
	document.getElementById('errorUsuario').style.display='none';
	document.getElementById('errorPassword').style.display='none';
	
	
	var usuarioValido = /^[A-Za-z0-9]+$/;
	var passwordValido = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])([A-Za-z\d\W_]){8,}$/;
	
	var res=true;
	// Si el nombre es nulo o la longitud es 0, significa que no se ha escrito nada.
	
	if(usuario==null || usuario.length==0) {
	
		document.getElementById('errorUsuario').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorUsuario').style.display='inline';
		
		res=false;
	} 

	else if (usuario.length <= 4){
		document.getElementById('errorUsuario').innerHTML="Debe tener al menos 4 caracteres";
		document.getElementById('errorUsuario').style.display='inline';
		res=false;
	}
	 else if (!usuarioValido.test(usuario)){
		document.getElementById('errorUsuario').innerHTML="Puede estar formado por letras y números pero no caracteres raros";
		document.getElementById('errorUsuario').style.display='inline';
		res=false;
	}
	
	
	if(password==null || password.length==0) {
	
		document.getElementById('errorPassword').innerHTML="Este campo no puede estar vacío";
		document.getElementById('errorPassword').style.display='inline';
		
		res=false;
	} else if(password.length < 8){
		document.getElementById('errorPassword').innerHTML="Debe tener al menos 8 caracteres";
		document.getElementById('errorPassword').style.display='inline';
		
		res=false;
	}

	else if (!passwordValido.test(password)){
		document.getElementById('errorPassword').innerHTML="Debe estar formado por al menos una letra, un número y un carácter raro";
		document.getElementById('errorPassword').style.display='inline';
		res=false;
	}

	return res;
}
