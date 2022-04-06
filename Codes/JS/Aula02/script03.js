var usuario;
var senha = "anW5465"
var senhaInf;
 
usuario = prompt("Qual o seu usuário: ").trim();
senhaInf = prompt("Digite a sua senha: ");


if ((usuario != "") && (senhaInf == senha)) {
    alert("Você acessou o sistema.");
}else{
    alert("Usuario ou senha estão incorretos. Tente novamente.");
};

