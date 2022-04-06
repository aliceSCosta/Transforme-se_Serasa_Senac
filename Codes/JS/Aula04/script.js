function main(){
    alert("---- Jogo de Acerte o Número ----");

    var numeroAcerto = parseInt(Math.random(1, 10) * 10) + 1;
    var numeroDigitado

    while (numeroDigitado != numeroAcerto){
        numeroDigitado = prompt ("Acerte um número de 1 a 10");
        if(numeroDigitado == numeroAcerto){
            alert("Parabéns, você acertou o número!");
        }else{
            alert("Você errou, tente novamente!")};
    };

    
};

main();