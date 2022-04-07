var usuarioCadastrado = "alice.scosta"
var senhaCadastrada = "123456"

function mostraCadastro(){
    document.getElementById("telaCadastro").style.display = "block"
    document.getElementById("telaLogin").style.display = "none"

}

function mostraLogin(){
    document.getElementById("telaLogin").style.display = "block"
    document.getElementById("telaCadastro").style.display = "none"
}

function login(){



    var usuarioDigitado = document.getElementById("inputUsuario").value
    var senhaDigitada = document.getElementById("inputSenha").value


    if(usuarioDigitado == usuarioCadastrado && senhaDigitada == senhaCadastrada){
        window.location.href = "areaAluno.html"
    }else{
        alert("Usuário ou senha estão incorretos")
    }

}


function cadastrarUsuario(){

    var email = document.getElementById()
    usuarioCadastrado = document.getElementById("inputUsuarioCadastro").value

}