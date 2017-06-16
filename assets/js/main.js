function validar() {
	var usuario = document.getElementById("userName").value;
	var password = document.getElementById("password").value;

	function validarUsuario(){
		if(usuario == "" || usuario.length == 0){ // valida que el campo usuario no este vacio			
			alert("Debes ingresar tu usuario");
		}else if(usuario.length < 6){
			alert("El nombre de usuario debe contener al menos 6 caracteres");
		}
	}

	validarUsuario();

	function validarPassword(){
	if(password == "" || password.length == 0){ // valida que el campo usuario no este vacio			
		alert("Debes ingresar tu contraseña");
	}else if(password.length < 6){
		alert("La contraseña debe contener al menos 6 caracteres");
	}else if(password === "123456"){
		alert("Error, tu contraseña no puede ser 123456, Debes ingresar una contraseña válida");
	}
}

validarPassword();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function finalDrop(ev){
	ev.preventDefault();
}

function drop(ev){
	ev.preventDefault();

	var dato = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(dato));
}