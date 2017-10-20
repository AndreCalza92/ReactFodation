function GravarNovoUsuario() {
	var nome, email, senha, usuario;
	nome = document.getElementById('txtNome').value;
	email = document.getElementById('txtEmail').value;
	senha = window.btoa(document.getElementById('txtSenha').value);	
	usuario = document.getElementById('txtUsuario').value;

    firebase.database().ref().child('usuarios').push({
      nome: nome,
      usuario: usuario,
      email: email,
      senha: senha
    });
}


function ValidarFormulario(){
	var senha, senha2;
	senha = $("#txtSenha").val();
	senha2 = $("#txtSenha2").val();

	if(senha != senha2){
		$("#txtSenha").focus();
	}else{
		GravarNovoUsuario()	
	}
}
