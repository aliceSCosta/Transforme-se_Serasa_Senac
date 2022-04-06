var usuarioCadastrado;
var senhaCadastrada;


function fazLogin(){
    alert(" ---- Login de Usuário ---- ");

    var usuarioDigitado;
    var senhaDigitada;

    usuarioDigitado = prompt ("Digite seu usuário: ");
    senhaDigitada = prompt ("Digite sua senha: ");

    if(usuarioDigitado == usuarioCadastrado && senhaDigitada == senhaCadastrada){
        alert("Você acessou o sistema")
    }else{
        alert("Senha ou usuário incorretos, ou usuário não existe")
        var escolha;
        escolha = prompt("Você deseja criar um novo usuário?\n [1] - Sim\n[2] - Não");
        if (escolha == 1){
            cadastroUsuario();
        };
    };

};


function cadastroUsuario(){
    alert(" --- Cadastro Usuário ---- ");

    usuarioCadastrado = prompt ("Escolha um usuário: ").trim();
    senhaCadastrada = prompt ("Escolha uma senha: ").trim();

    if (usuarioCadastrado == "" || senhaCadastrada == "" ||  usuarioCadastrado.length < 3 || senhaCadastrada.length < 3 ){
        alert ("Não foi possível criar um novo usuário, pois o usário ou a senha não tinham o tamanho correto.")
        cadastroUsuario()
    };
    
    alert("Cadastro realizado com sucesso!");
};


function main(){
    
    var opcao;
    opcao = prompt(` 
    
        ---- Sistema de usuários ---- 
        \n
        [1] - Criar conta
        [2] - Fazer login
    
    `);

    if(opcao < 1 || opcao > 2){
        alert("Escolha uma opção válida");
        main();
    };

    // Cadastro de Usuário

    if(opcao == 1){
        cadastroUsuario();
        fazLogin();
    };

    // Login
    if(opcao == 2){
        fazLogin();
    };
};

main();