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

    var emailDigitado = document.getElementById("inputEmailCadastro").value
    var usuarioDigitado = document.getElementById("inputUsuarioCadastro").value
    var senhaDigitada = document.getElementById("inputSenhaCadastro").value
    var confirmaSenha = document.getElementById("inputConfirmSenhaCadastro").value

    if (emailDigitado || usuarioDigitado || senhaDigitada ){
        alert("Digite corretamente seu usuário e senha")
        return
    }
    if (senhaDigitada != confirmaSenha){
        alert("As senhas não coincidem")
        return;
    }

    alert("Usuário cadastrado com sucesso")

    usuarioCadastrado = usuarioDigitado
    senhaCadastrada = senhaDigitada

    mostraLogin()

}