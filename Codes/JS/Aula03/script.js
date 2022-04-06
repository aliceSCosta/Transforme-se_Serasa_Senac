var valor;
var opcao;

alert("Seja bem-vindo(a) ao Cafézinho Cupcake :) ");
alert(`Esse é o nosso Menu:
[1] - Mocaccino - R$ 7,00 
[2] - Capuccino - R$ 5,00 
[3] - Café Expresso - R$ 1,00`);

valor = parseFloat(prompt("Insira o dinheiro: "));
opcao = parseInt(prompt(`
[1] - Mocaccino 
[2] - Capuccino 
[3] - Café Expresso`));


if (opcao == 1 && valor >= 7){
    alert("Fazendo Mocaccino...");
}else if (opcao == 2 && valor >= 5){
    alert("Fazendo Capuccino...");
}else if (opcao == 3 && valor >= 1){
    alert("Fazendo Café...");
}else{
    alert("Dinheiro inserido é insuficiente");
};

/*switch (opcao){
    case 1:
        if(valor >= 7 ){
        alert("Fazendo Mocaccino"); 
    }else{
        alert("Dinheiro inserido é insuficiente")
    }
        break;
    case 2:
        if(valor >= 5){
            alert("Fazendo Capuccino"); 
        }else{
            alert("Dinheiro inserido é insuficiente")
        }
        break;
    case 3:
        if(valor >= 1){
            alert("Fazendo Café"); 
        }else{
            alert("Dinheiro inserido é insuficiente")
        }
        break;
    default:
        alert("Opção inexistente.");
};*/