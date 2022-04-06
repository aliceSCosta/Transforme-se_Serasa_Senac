var estacionamento = [0, 1, 0, 0, 1, 0];

function main(){

    

    var vaga = prompt("Escolha uma vaga para ver a disponibilidade: ");

    if (estacionamento[vaga-1] == 1){
        alert("Essa vaga já está ocupada");
        main();
        return;
    };

    var opcao = prompt(`- VAGA DISPONÍVEL
                        Deseja estacionar seu carro?
                        [1] - Sim
                        [2] - Não
    `);

    if(opcao == 2){
        main();
        return;
    };

    alert("Vaga ocupada com sucesso!");
    estacionamento[vaga] == 1;

    alert = (estacionamento)

    main();
};

main();