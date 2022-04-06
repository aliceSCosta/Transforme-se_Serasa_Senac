var jogadorNome;
var jogadorVida = 200;
var jogadorAtaque = 35;
var jogadorDefesa = 40;
var jogadorDinheiro = 0;

function mostraLoja(){
    var opcao = prompt(`---- Bem-Vindo ao restaurante Ramen Ichiraku ----
    Você pode comprar os seguintes itens:
    [1] - Curry da Vida - 20 de Vida - $25
    [2] - Ramen com Naruto - 10 de Ataque - $15
    [3] - Tofu com Macarrão - 15 de Defesa - $20`)

    if (opcao == 1 && jogadorDinheiro >= 25){
        alert("Você comprou um Curry da Vida")
        jogadorVida += 20
        jogadorDinheiro -= 25
        mostraAtributos();
        
    }else{
        alert("Você não tem dinheiro suficiente")
    }
    if (opcao == 1 && jogadorDinheiro >= 15){
        alert("Você comprou um Curry da Vida")
        jogadorAtaque += 10
        jogadorDinheiro -= 15
        mostraAtributos();
        
    }else{
        alert("Você não tem dinheiro suficiente")
    }
    if (opcao == 1 && jogadorDinheiro >= 20){
        alert("Você comprou um Curry da Vida")
        jogadorDefesa += 15
        jogadorDinheiro -= 20
        mostraAtributos();
        
    }else{
        alert("Você não tem dinheiro suficiente")
    }
}

function batalha(inimigoNome, inimigoVida, inimigoAtaque, inimigoDefesa, inimigoDinheiro){
    alert(jogadorNome + " inicia uma luta contra " + inimigoNome)

    while (jogadorVida > 0 && inimigoVida > 0){
        var danoCausado;
        danoCausado = jogadorAtaque - inimigoDefesa;

        inimigoVida -= danoCausado;

        alert(`${inimigoNome} sofreu ${danoCausado} de dano.
        Vida do ${inimigoNome}: ${inimigoVida}`)

        if( inimigoVida <= 0){
            break;
        }

        
        //Ataque inimigo
        danoCausado = inimigoAtaque - jogadorDefesa;

        jogadorVida -= danoCausado;

        alert(`${jogadorNome} sofreu ${danoCausado} de dano.
        Vida do ${jogadorNome}: ${jogadorVida}`)
    }

    if(jogadorVida <= 0){
        alert("Você perdeu a batalha, fim de jogo!")
        return
    }else{
        alert("Parabéns! Você derrotou o inimigo!")
        jogadorDinheiro += inimigoDinheiro
        mostraAtributos();
        mostraCaminhos();
    }
}

function mostraCaminhos(){
    var opcao;
    opcao = prompt(`
        Escolha um destino:
        [1] - Vila Oculta da Névoa
        [2] - Vila Oculta do Som
        [3] - Ir atrás do Sasuke no barril
    `)

    if(opcao == 1){
        batalha("Zabuza", 230, 50, 30, 300);
    }
    if(opcao == 2){
        batalha("Orochimaru", 850, 35, 30, 450);
    }
    if(opcao == 3){
        batalha("Kimimaru", 100, 25, 30, 110);
    }
}

function mostraAtributos(){
    alert(`
       Atributos de ${jogadorNome} 
            Vida: ${jogadorVida}
            Ataque: ${jogadorAtaque}
            Defesa: ${jogadorDefesa}
            Dinheiro: ${jogadorDinheiro}
    `);

    
};

function main(){
    alert("Seja bem-vindo à Vila Oculta da Folha");

    jogadorNome = prompt("Qual é o seu nome ninja");
    mostraAtributos();
    mostraCaminhos();
};

main();